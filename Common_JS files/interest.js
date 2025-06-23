// interest.js
import { db, auth } from './firebase-init.js';
import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export async function expressInterest(eventId, tier) {
  const sponsorId = auth.currentUser.uid;
  await addDoc(collection(db, 'sponsorships'), {
    sponsorId,
    eventId,
    tier,
    status: 'pending'
  });
  alert("Interest Expressed");
}
