// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLc0nxh1tRHA5sH8gWjXlRywG_JxYglho",
  authDomain: "tejidoteadoportenio.firebaseapp.com",
  projectId: "tejidoteadoportenio",
  storageBucket: "tejidoteadoportenio.appspot.com",
  messagingSenderId: "870154836348",
  appId: "1:870154836348:web:4b7a1513c3da2afa1cecf9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export async function getItems() {
    const itemsCollection = collection(appFirestore,"items");
    const itemsSnapshot = await getDocs(itemsCollection);
    //console.log('Items: ', itemsSnapshot);
    let respuesta = [];

    itemsSnapshot.then(res => {
      const docs = res.docs;
      const arrayDocs = docs.map (doc => doc.data());
      respuesta = arrayDocs;
    })
    return respuesta;
}

export default appFirestore;