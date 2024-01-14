// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDZHdDkYuh6j7RtRoiBHJOLo8ynJGAQdC0",
  authDomain: "filevaults-b82a2.firebaseapp.com",
  projectId: "filevaults-b82a2",
  storageBucket: "filevaults-b82a2.appspot.com",
  messagingSenderId: "673442365685",
  appId: "1:673442365685:web:8b1e3d6abcd3593b3845bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);