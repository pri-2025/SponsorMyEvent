// sponsor.js
import { db } from './firebase-init.js';
import { collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export async function filterEvents({ type, budget, minAudience }) {
  let q = collection(db, 'events');
  if (type) q = query(q, where("type", "==", type));
  if (budget) q = query(q, where("budget", "<=", budget));
  if (minAudience) q = query(q, where("audience", ">=", minAudience));

  const snapshot = await getDocs(q);
  const events = [];
  snapshot.forEach(doc => events.push({ id: doc.id, ...doc.data() }));
  return events;
}
