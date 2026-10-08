// One screen used for both "Add person" and "Edit person".
import React, { useState } from 'react';
import {
  Alert, Image, KeyboardAvoidingView, Platform, Pressable,
  ScrollView, StyleSheet, Text, TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addContact, deleteContact, updateContact } from '../database/database';
import { deletePhoto, photoUri, savePhoto } from '../utils/images';


export default function ContactForm({ contact, onDone }) {
  const isEditing = !!contact;
  const [name, setName] = useState(contact?.name ?? '');
  const [phone, setPhone] = useState(contact?.phone ?? '');
  // pickedUri = a newly chosen photo (not copied into app storage until Save)
  const [pickedUri, setPickedUri] = useState(null);
  const previewUri = pickedUri ?? photoUri(contact?.imageUri);

  async function choosePhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled) setPickedUri(result.assets[0].uri);
  }

  async function save() {
    if (!name.trim() || !phone.trim()) {
      Alert.alert('تقريباً انتهينا', 'من فضلك اكتب الاسم ورقم الهاتف.');
      return;
    }
    try {
      let imageName = contact?.imageUri ?? null;
      if (pickedUri) {
        const newName = savePhoto(pickedUri);
        deletePhoto(imageName); // remove the old photo
        imageName = newName;
      }
      if (isEditing) {
        await updateContact(contact.id, name.trim(), phone.trim(), imageName);
      } else {
        await addContact(name.trim(), phone.trim(), imageName);
      }
      onDone();
    } catch (e) {
      Alert.alert('تعذّر الحفظ', 'حدث خطأ ما. حاول مرة أخرى.');
    }
  }

  function confirmDelete() {
    Alert.alert(`حذف ${contact.name}؟`, 'لا يمكن التراجع عن هذا.', [
      { text: 'لا، أبقِه', style: 'cancel' },
      {
        text: 'حذف',
        style: 'destructive',
        onPress: async () => {
          await deleteContact(contact.id);
          deletePhoto(contact.imageUri);
          onDone();
        },
      },
    ]);
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>{isEditing ? 'تعديل الشخص' : 'إضافة شخص'}</Text>

        <Pressable onPress={choosePhoto} style={styles.photoBox}>
          {previewUri ? (
            <Image source={{ uri: previewUri }} style={styles.photo} />
          ) : (
            <Text style={styles.photoHint}>📷{'\n'}اضغط لاختيار صورة</Text>
          )}
        </Pressable>
        {previewUri && (
          <Pressable onPress={choosePhoto}>
            <Text style={styles.changePhoto}>تغيير الصورة</Text>
          </Pressable>
        )}

        <Text style={styles.label}>الاسم</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="مثال: ابنتي"
          placeholderTextColor="#7A8699"
        />

        <Text style={styles.label}>رقم الهاتف</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="مثال: 0612345678"
          placeholderTextColor="#7A8699"
          keyboardType="phone-pad"
        />

        <Pressable style={[styles.button, styles.save]} onPress={save}>
          <Text style={styles.buttonText}>حفظ</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.cancel]} onPress={onDone}>
          <Text style={[styles.buttonText, { color: '#1B2A41' }]}>إلغاء</Text>
        </Pressable>
        {isEditing && (
          <Pressable style={[styles.button, styles.delete]} onPress={confirmDelete}>
            <Text style={styles.buttonText}>حذف هذا الشخص</Text>
          </Pressable>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 60 },
  title: { fontSize: 36, fontWeight: '800', color: '#1B2A41', marginBottom: 16 },
  photoBox: {
    alignSelf: 'center', width: 240, height: 240, borderRadius: 24,
    borderWidth: 4, borderColor: '#1B2A41', borderStyle: 'dashed',
    alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#EEF2F7',
  },
  photo: { width: '100%', height: '100%' },
  photoHint: { fontSize: 26, fontWeight: '600', color: '#1B2A41', textAlign: 'center' },
  changePhoto: { alignSelf: 'center', marginTop: 10, fontSize: 24, color: '#1B6CA8', fontWeight: '700' },
  label: { fontSize: 26, fontWeight: '700', color: '#1B2A41', marginTop: 20, marginBottom: 6 },
  input: {
    fontSize: 28, borderWidth: 3, borderColor: '#1B2A41', borderRadius: 14,
    paddingHorizontal: 14, paddingVertical: 12, color: '#1B2A41', backgroundColor: '#FFFFFF',
    textAlign: 'right',
  },
  button: { marginTop: 18, paddingVertical: 20, borderRadius: 18, alignItems: 'center' },
  buttonText: { fontSize: 30, fontWeight: '800', color: '#FFFFFF' },
  save: { backgroundColor: '#1E8E3E', marginTop: 28 },
  cancel: { backgroundColor: '#E1E7EF' },
  delete: { backgroundColor: '#C62828' },
});