// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBmJJ5nSu_Y5QxE0ZB8ymlmQp2kdHcs_xU",
  authDomain: "twitter-clone-yt-d6bf3.firebaseapp.com",
  projectId: "twitter-clone-yt-d6bf3",
  storageBucket: "twitter-clone-yt-d6bf3.appspot.com",
  messagingSenderId: "569612006547",
  appId: "1:569612006547:web:6663017fbf16aff8168966"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
