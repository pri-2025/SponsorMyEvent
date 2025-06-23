// auth.js
import { auth, db } from './firebase-init.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

// Signup
export async function signup(email, password, name, role) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCred.user.uid;
  await setDoc(doc(db, 'users', uid), {
    email, name, role
  });
  alert("Signup successful");
}

// Login
export async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
  alert("Login successful");
}
