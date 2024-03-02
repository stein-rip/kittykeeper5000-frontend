import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz8jMiw1Jl7yMEJpzQxhj_4CotSibsizI",
  authDomain: "kittykeeper5000.firebaseapp.com",
  projectId: "kittykeeper5000",
  storageBucket: "kittykeeper5000.appspot.com",
  messagingSenderId: "803725328411",
  appId: "1:803725328411:web:2a78f4f43cd2679340b8be"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
