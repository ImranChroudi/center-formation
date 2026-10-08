import { Alert, Linking } from 'react-native';

// Opens the phone's normal calling screen with the number filled in.
export function callNumber(phone) {
  const cleaned = String(phone).replace(/[^\d+]/g, ''); // keep digits and a leading +
  if (!cleaned) {
    Alert.alert('No phone number', 'This person has no phone number saved.');
    return;
  }
  Linking.openURL(`tel:${cleaned}`).catch(() =>
    Alert.alert('Cannot call', 'This device cannot make phone calls.')
  );
}
