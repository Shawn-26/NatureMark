import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJD0sVGdb56RilnpMJxCG8EMcB6PGciJs",
  authDomain: "arbortag-nmsllp.firebaseapp.com",
  projectId: "arbortag-nmsllp",
  storageBucket: "arbortag-nmsllp.appspot.com",
  messagingSenderId: "202320379819",
  appId: "1:202320379819:web:e9cfa33ba1d66ad233dcee",
  measurementId: "G-F6N2M074XC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
