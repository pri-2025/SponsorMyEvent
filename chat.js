import { db, auth } from './firebase-init.js';
import { collection, addDoc, serverTimestamp, doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export async function sendMessage(chatId, text) {
  const senderId = auth.currentUser.uid;

  await setDoc(doc(db, 'chats', chatId), {
    chatId,
    lastMessage: text,
    timestamp: serverTimestamp()
  }, { merge: true });

  await addDoc(collection(db, `chats/${chatId}/messages`), {
    senderId,
    text,
    timestamp: serverTimestamp()
  });
}
import { collection, query, orderBy, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export function listenToMessages(chatId, callback) {
  const q = query(collection(db, `chats/${chatId}/messages`), orderBy("timestamp"));
  onSnapshot(q, snapshot => {
    const messages = [];
    snapshot.forEach(doc => messages.push(doc.data()));
    callback(messages);
  });
}
