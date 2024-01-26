import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const USE_EMULATORS = true;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_AUTH_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with offline persistence
const firestore = getFirestore(app);
const storage = getStorage(app);

const EMULATOR_PORTS = {
  firestore: 8080,
  storage: 9199,
};

function startEmulators() {
  connectFirestoreEmulator(firestore, "localhost", EMULATOR_PORTS.firestore, {
    projectId: firebaseConfig.projectId,
  });
  connectStorageEmulator(storage, "localhost", EMULATOR_PORTS.storage);
}

if (process.env.NODE_ENV === "development" && USE_EMULATORS) {
  startEmulators();
}

// Export the initialized app, firestore, and storage
export { app, firestore, storage };