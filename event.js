// event.js
import { db, auth } from './firebase-init.js';
import { addDoc, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export async function createEvent(eventData) {
  const uid = auth.currentUser.uid;
  await addDoc(collection(db, 'events'), {
    ...eventData,
    createdBy: uid,
    timestamp: serverTimestamp()
  });
  alert("Event Created");
}
