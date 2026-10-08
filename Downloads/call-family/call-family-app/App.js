import React, { useCallback, useEffect, useState } from 'react';
import {
  BackHandler, FlatList, I18nManager, Platform, Pressable, SafeAreaView,
  StatusBar, StyleSheet, Text, useWindowDimensions, View,
} from 'react-native';
import { getContacts, initDatabase } from './database/database';
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';
import { callNumber } from './utils/phone';

// Arabic reads right to left. If the phone already flips the layout itself
// (I18nManager.isRTL), a normal 'row' is already right-to-left; otherwise we reverse it.
const ROW = I18nManager.isRTL ? 'row' : 'row-reverse';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  // null = home screen, { contact: null } = add, { contact } = edit
  const [form, setForm] = useState(null);
  const { width } = useWindowDimensions();

  const cardSize = Math.floor((width - 20 * 2 - 20) ); // two per row

  const load = useCallback(async () => {
    await initDatabase();
    setContacts(await getContacts());
  }, []);

  useEffect(() => { load(); }, [load]);

  // Android back button returns to the home screen from the form
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (form) { setForm(null); return true; }
      return false;
    });
    return () => sub.remove();
  }, [form]);

  async function closeForm() {
    setForm(null);
    setEditMode(false);
    await load();
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      {form ? (
        <ContactForm contact={form.contact} onDone={closeForm} />
      ) : (
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.title}>جهات اتصالي</Text>
            {contacts.length > 0 && (
              <Pressable
                style={[styles.editToggle, editMode && styles.editToggleOn]}
                onPress={() => setEditMode(!editMode)}
              >
                <Text style={styles.editToggleText}>{editMode ? 'تم' : 'تعديل'}</Text>
              </Pressable>
            )}
          </View>

          {editMode && <Text style={styles.editHint}>اضغط على شخص لتعديله</Text>}

          <FlatList
            data={contacts}
            keyExtractor={(c) => String(c.id)}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <ContactCard
                contact={item}
                size={cardSize}
                editMode={editMode}
                onPress={() => (editMode ? setForm({ contact: item }) : callNumber(item.phone))}
              />
            )}
            ListEmptyComponent={
              <View style={styles.empty}>
                <Text style={styles.emptyTitle}>لا توجد جهات اتصال بعد</Text>
              </View>
            }
            ListFooterComponent={
              <Pressable style={styles.addButton} onPress={() => setForm({ contact: null })}>
                <Text style={styles.addText}>
                  {contacts.length === 0 ? '＋ أضف أول شخص' : '＋ إضافة شخص'}
                </Text>
              </Pressable>
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: ROW, justifyContent: 'space-between',
    paddingHorizontal: 20, paddingVertical: 0,
  },
  title: { fontSize: 38, fontWeight: '800', color: '#1B2A41' },
  editToggle: { backgroundColor: '#E1E7EF', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 14 },
  editToggleOn: { backgroundColor: '#FFD23F' },
  editToggleText: { fontSize: 24, fontWeight: '700', color: '#1B2A41' },
  editHint: { fontSize: 24, textAlign: 'center', color: '#1B2A41', backgroundColor: '#FFF3C4', paddingVertical: 8 },
  list: { padding: 20, paddingTop: 12 },
  row: { flexDirection: 'column', justifyContent: 'space-between' },
  empty: { alignItems: 'center', paddingVertical: 50 },
  emptyTitle: { fontSize: 32, fontWeight: '700', color: '#1B2A41' },
  addButton: {
    backgroundColor: '#1E8E3E', borderRadius: 20, paddingVertical: 24,
    alignItems: 'center', marginBottom: 100,
  },
  addText: { fontSize: 32, fontWeight: '800', color: '#FFFFFF' },
});