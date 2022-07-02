// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection } from 'firebase/firestore';
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

export function testDataBase(){
  console.log(appFirestore);
}

export async function getItems() { //definir funcion asincrona para que pueda hacer el await de la promesa
    const itemsCollection = collection(appFirestore,"items");
    const itemsSnapshot = await getDocs(itemsCollection); //el await espera a que la llamada se cumpla
    //devuelve un array
    let respuesta = itemsSnapshot.docs.map( doc => {
      return { //con el spread extrae todo de doc.data y ademas le añade el id
        ...doc.data(), //crea una array nuevo dde extrae con data los datos que nos interesan de de la collection
        id: doc.id //asi se obtiene el id que asigna firestore aleatoriamente, sino no viene en data
      }
    })

    return respuesta;
}

export async function traerProducto(id){
  //const itemsCollection = collection(appFirestore,"items");
  const docRef = doc(appFirestore, "items", id);
  const docSnapshot = await getDoc(docRef); //el await espera a que la llamada se cumpla
  //console.log("snap: " + docSnapshot.data());
  //devuelve un objeto
  return {id:docSnapshot.id,  ...docSnapshot.data()};
}

//traer categorias con un query y where condition

export default appFirestore;