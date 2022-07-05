// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, query, where, setDoc, addDoc, Timestamp } from 'firebase/firestore';
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
const db = getFirestore(appFirebase);

export function testDataBase(){
  console.log(db);
}

export async function getItems() { //definir funcion asincrona para que pueda hacer el await de la promesa
    const itemsCollection = collection(db,"items");
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
  const docRef = doc(db, "items", id);
  const docSnapshot = await getDoc(docRef); //el await espera a que la llamada se cumpla
  //console.log("snap: " + docSnapshot.data());
  //devuelve un objeto
  return {id:docSnapshot.id,  ...docSnapshot.data()};
}

//traer categorias con un query y where condition
export async function getProductsByCategory(category){
  //https://cloud.google.com/firestore/docs/query-data/queries?hl=es-419
  const itemsRef = collection(db, "items");

  // Create a query against the collection.
  const q = query(itemsRef, where("category", "==", category));

  //Después de crear un objeto de consulta, usa la función get() para recuperar los resultados:
  const querySnapshot = await getDocs(q);

  let respuesta = querySnapshot.docs.map( doc => {
    return { //con el spread extrae todo de doc.data y ademas le añade el id
      ...doc.data(), //crea una array nuevo dde extrae con data los datos que nos interesan de de la collection
      id: doc.id //asi se obtiene el id que asigna firestore aleatoriamente, sino no viene en data
    }
  })

  return respuesta;
}

//funcion que se ejecuta 1 sola vez a los efectos de guardar los datos en Firebase
//se puede invocar desde el onclik de un button onClick={exportDataToFirestore} //sin ()! solo referencia
export async function exportDataToFirestore(){
  const productos = [
    {"id":1,
        "name":"Colobus guerza",
        "img":"/img/tejido1.png",
        "price":48,
        "desc":"Etiam tempor augue id quam elementum fermentum. Suspendisse vulputate bibendum dui. Aliquam erat volutpat. Fusce nisl nisi, varius vel enim nec, dictum semper ante.",
        "category":"crochet",
        "stock":5
    },
    {"id":2,
        "name":"Butorides striatus",
        "img":"/img/tejido2.png",
        "price":13,
        "desc":"Sed mattis diam eu quam tincidunt, nec luctus arcu dictum. Curabitur maximus tempus erat, ac mollis diam molestie a.",
        "category":"crochet",
        "stock":5
    },
    {"id":3,
        "name":"Phalacrocorax carbo",
        "img":"/img/tejido3.png",
        "price":87,
        "desc":"Etiam at neque at sapien dictum venenatis ut vitae turpis. Fusce malesuada quis velit vel consectetur. Pellentesque faucibus velit nisl, non bibendum dui pellentesque sed.",
        "category":"agujas",
        "stock":5
    },
    {"id":4,
        "name":"Neophron percnopterus",
        "img":"/img/tejido5.png",
        "price":46,
        "desc":"Donec quis tempor justo. Nulla convallis, sem ac rutrum rutrum, purus nisi hendrerit erat, vitae placerat erat tellus eu urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        "category":"bordado",
        "stock":5
    },
    {"id":5,
        "name":"Boselaphus tragocamelus",
        "img":"/img/tejido6.png",
        "price":18,
        "desc":"Mauris accumsan ligula tortor, ut consequat nibh vestibulum ultrices. Suspendisse potenti. Sed non nulla sit amet neque consequat auctor id id lacus.",
        "category":"agujas",
        "stock":5
    },
    {"id":6,
        "name":"Conolophus subcristatus",
        "img":"/img/tejido1.png",
        "price":100,
        "desc":"Mauris dignissim nisl ac velit imperdiet tincidunt. Integer in faucibus mauris. Aenean libero nibh, lacinia porttitor gravida a, fringilla non nisl.",
        "category":"agujas",
        "stock":5
    },
    {"id":7,
        "name":"Taurotagus oryx",
        "img":"/img/tejido2.png",
        "price":41,
        "desc":"Praesent ultrices interdum felis, et rutrum quam dictum vel. Sed condimentum euismod odio vel convallis.",
        "category":"bordado",
        "stock":5
    },
    {"id":8,
        "name":"Tachybaptus ruficollis",
        "img":"/img/tejido3.png",
        "price":71,
        "desc":"Duis vel mauris at neque sollicitudin consectetur. Sed feugiat libero ac pellentesque vehicula.","category":"bordado",
        "stock":5
    },
    {"id":9,
        "name":"Paradoxurus hermaphroditus",
        "img":"/img/tejido5.png",
        "price":18,
        "desc":"Proin viverra, nunc sed dignissim feugiat, velit est laoreet augue, in dapibus nunc ante ac enim. Duis et nisi in nunc blandit ornare a scelerisque velit.",
        "category":"crochet",
        "stock":5
    },
    {"id":10,
        "name":"Cochlearius cochlearius",
        "img":"/img/tejido6.png",
        "price":88,
        "desc":"Sed non nulla sit amet neque consequat auctor id id lacus. Mauris dignissim nisl ac velit imperdiet tincidunt. Integer in faucibus mauris. Aenean libero nibh, lacinia porttitor gravida a, fringilla non nisl.","category":"crochet",
        "stock":5
    }
];
  const itemsCollection = collection(db, "items");

  productos.forEach( item => {
    const newDoc = doc(itemsCollection);
    setDoc(newDoc, item).then( res => {
      console.log('Documento Guardado: ', newDoc.id);
    })
    .catch((error => console.log('Se obtuvo error: ' ,error))
    )
  })
  //const itemPrueba = producto[0];

}

export async function createBuyOrder(pDataOrder) {
  //console.log('ok', pDataOrder);
  const orderCollectionRef = collection(db, "orders");
  const dateTimeStamp = Timestamp.now();
  const dataOrderWithDate = {
    items : pDataOrder.items,
    total: pDataOrder.total,
    buyer: pDataOrder.buyer,
    date: dateTimeStamp
  };
  const orderCreated = await addDoc(orderCollectionRef, dataOrderWithDate);
  //console.log('Orden Creada ', orderCreated.id);
  return orderCreated;
}

export default db;