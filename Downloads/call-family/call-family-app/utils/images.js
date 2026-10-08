// Copies picked photos into the app's own storage so they survive
// even if the original is deleted from the gallery or the cache is cleared.
//
// The database stores only the FILE NAME (e.g. "1700000000000.jpg").
// The full path is rebuilt at runtime, because the app's folder path
// can change on iOS after an app update.
import { Directory, File, Paths } from 'expo-file-system';

function photosDir() {
  const dir = new Directory(Paths.document, 'photos');
  if (!dir.exists) dir.create();
  return dir;
}

// Copy a picked image into app storage. Returns the saved file name.
export function savePhoto(pickedUri) {
  const fileName = `${Date.now()}.jpg`;
  new File(pickedUri).copy(new File(photosDir(), fileName));
  return fileName;
}

// Turn a stored file name into a full URI for <Image>. Returns null if missing.
export function photoUri(fileName) {
  if (!fileName) return null;
  try {
    const file = new File(photosDir(), fileName);
    return file.exists ? file.uri : null;
  } catch (e) {
    return null;
  }
}

export function deletePhoto(fileName) {
  if (!fileName) return;
  try {
    const file = new File(photosDir(), fileName);
    if (file.exists) file.delete();
  } catch (e) {
    // Nothing to clean up.
  }
}
