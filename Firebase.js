
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByfmll4XA-GIUT1exAeShkuviG9XarY1c",
  authDomain: "green-shop-46998.firebaseapp.com",
  projectId: "green-shop-46998",
  storageBucket: "green-shop-46998.appspot.com",
  messagingSenderId: "791058331653",
  appId: "1:791058331653:web:694bc115b06feb34c0846c",
  measurementId: "G-HWR9XBQVYH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
