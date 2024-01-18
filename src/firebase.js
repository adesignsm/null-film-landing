import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { getStorage, ref as StorageRef } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWUGQCAMO78xyx6guPlE63i1YBsQ4UGp0",
  authDomain: "null-film.firebaseapp.com",
  databaseURL: "https://null-film-default-rtdb.firebaseio.com",
  projectId: "null-film",
  storageBucket: "null-film.appspot.com",
  messagingSenderId: "475606973883",
  appId: "1:475606973883:web:f35ec892584d4cb23f989e",
  measurementId: "G-0EPRNWKN6E"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { db, push, ref, storage, StorageRef };