const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");
const fs = require("fs");


// ✅ Your Firebase config here — replace with your keys from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCQdDDm0e68vvNetKCkhoM6Q5kXSH2ij38",
  authDomain: "alumini-management-syste-5cdef.firebaseapp.com",
  projectId: "alumini-management-syste-5cdef",
  storageBucket: "alumini-management-syste-5cdef.firebasestorage.app",
  messagingSenderId: "355444139417",
  appId: "1:355444139417:web:ceefb4124549df7d6f1f08",
  measurementId: "G-ZYV0BF4FNY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Load alumni data from your JSON file
const data = JSON.parse(fs.readFileSync("./students.json", "utf-8"));

async function uploadStudents() {
  for (let i = 0; i < data.length; i++) {
    const student = data[i];
    const docRef = doc(db, "students", student.authId); // Using authId as unique ID
    await setDoc(docRef, student);
    console.log(`✅ Uploaded: ${student.name}`);
  }
  console.log("🎉 All students uploaded successfully!");
}

uploadStudents();
