import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { photoUri } from '../utils/images';

export default function ContactCard({ contact, size, editMode, onPress }) {
  const [broken, setBroken] = useState(false);
  const uri = broken ? null : photoUri(contact.imageUri);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, { width: size }, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={editMode ? `تعديل ${contact.name}` : `اتصال بـ ${contact.name}`}
    >
      {uri ? (
        <Image
          source={{ uri }}
          style={[styles.image, { width: size, height: size }]}
          onError={() => setBroken(true)}
        />
      ) : (
        // Friendly fallback if there is no photo or the file is gone
        <View style={[styles.image, styles.placeholder, { width: size, height: size }]}>
          <Text style={styles.initial}>{contact.name.trim().charAt(0).toUpperCase()}</Text>
        </View>
      )}
      {editMode && (
        <View style={styles.editBadge}>
          <Text style={styles.editBadgeText}>✏️ تعديل</Text>
        </View>
      )}
      <Text style={styles.name} numberOfLines={2}>
        {contact.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: 'center', marginBottom: 24 },
  pressed: { opacity: 0.6 },
  image: { borderRadius: 24, borderWidth: 4, borderColor: '#1B2A41' , width : '100%' },
  placeholder: { backgroundColor: '#1B6CA8', alignItems: 'center', justifyContent: 'center' },
  initial: { fontSize: 72, fontWeight: '700', color: '#FFFFFF' },
  name: { marginTop: 10, fontSize: 28, fontWeight: '700', color: '#1B2A41', textAlign: 'center' },
  editBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFD23F',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  editBadgeText: { fontSize: 20, fontWeight: '700', color: '#1B2A41' },
});