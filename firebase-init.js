// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// ✅ Your Firebase Config (from console)
const firebaseConfig = {
  apiKey: "AIzaSyCVgr6hpmlJmI7JhyQm2WxDJPwbJ_7jgNo",
  authDomain: "sponsorconnect-925e3.firebaseapp.com",
  projectId: "sponsorconnect-925e3",
  storageBucket: "sponsorconnect-925e3.appspot.com", // 🔁 correct small typo: should end in `.app**spot**.com`
  messagingSenderId: "325535363089",
  appId: "1:325535363089:web:15516b824f721b5a2f41b0"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase Services to Use in Other Scripts
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
