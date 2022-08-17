import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXD8Fh8KWGmHlw-rZx9COWSBZkDtdhbSo",
  authDomain: "coderhouse-react-2419a.firebaseapp.com",
  projectId: "coderhouse-react-2419a",
  storageBucket: "coderhouse-react-2419a.appspot.com",
  messagingSenderId: "414448175093",
  appId: "1:414448175093:web:90d84d405568b51d9ac2bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
