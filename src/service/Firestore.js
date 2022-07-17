import { initializeApp } from "firebase/app";
import {getFirestore,getDocs,collection, getDoc, doc,query,where,setDoc, addDoc,Timestamp,orderBy,limit} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBjaB1op6oXeUlymsK2h4COAqAJIF4XRMU",
  authDomain: "mm-chocolates.firebaseapp.com",
  projectId: "mm-chocolates",
  storageBucket: "mm-chocolates.appspot.com",
  messagingSenderId: "490684034133",
  appId: "1:490684034133:web:a739e4f04befffc26378dc"
};


const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase)

export function testDatabase() {
    console.log(appFirestore);
}

export async function getItem() {

    const itemCollection = collection(appFirestore,"chocolates");
    const qOrder = query(itemCollection, orderBy("order"), limit(6));
    const itemSnapshot = await getDocs(qOrder);

    let respu = itemSnapshot.docs.map(doc=>{
        return {
            ...doc.data(),
            id:doc.id

        }
    })
    
    return respu;

}

export async function getItem2(itemId){
    const itemCollection = collection(appFirestore,"chocolates");
    
    const docref = doc(itemCollection,itemId);
   
    const docSnapshot = await getDoc(docref);
    
    return {
        id: docSnapshot.id,
        ...docSnapshot.data()
    };
}


export async function getItem3(categoryId) {
    const itemCollection = collection(appFirestore,"chocolates");

    const q = query(itemCollection,where("category", "==", categoryId));
    // const q2 = query(itemCollection,orderBy("order","asc"),limit(3));
    // const q3 = query(itemCollection,where("order", ">", 3),orderBy("price","asc"),limit(3));

    const itemSnapshot3 = await getDocs(q);
    

    let respu = itemSnapshot3.docs.map(doc=>{
        return {
            ...doc.data(),
            id:doc.id
        }
    })

    return respu;
}

// export async function getItem4() {
//     const itemCollection = collection(appFirestore,"chocolates");
//     const q2 = query(itemCollection,where("order", "<=", 3),orderBy("price","asc"),limit(3));
//     const q3 = query(itemCollection,where("order", ">", 3),orderBy("price","asc"),limit(3));
//     const itemSnapshot2 = await getDocs(q2,q3);
//     // const itemSnapshot3 = await getDocs(q3);

//     let respu = itemSnapshot2.docs.map(doc=>{
//         return {
//             ...doc.data(),
//             id:doc.id,
//         }
//     })

//     return respu;

// }

// export async function getItem5() {
//     const itemCollection = collection(appFirestore,"chocolates");
//     const q3 = query(itemCollection,where("order", ">", 3),orderBy("order"),limit(3));
//     const itemSnapshot3 = await getDocs(q3);
    

//     let respu = itemSnapshot3.docs.map(doc=>{
//         return {
//             ...doc.data(),
//             id:doc.id,
//         }
//     })

//     return respu;
// }

export async function exportData() {
    const productos = [

        {
            id: 1,
            order:1,
            name:'Caja de bombones chica',
            price: 700,
            stock: 5,
            img:'../../img/chica1.jpg',
            category: 'Bombones',
            description: 'Caja de 1/4kg: Aproximadamente entre 25-30 bombones de chocolate semi-amargo, dulce, y blanco.',
            description2: 'Caja de 1/4kg: Variado de bombones de chocolate semi-amargo, dulce, y blanco rellenos de una gran variedad de sabores como pueden ser: Dulce de leche, bon o bon, pasta de maní, almendras con ddl, nueces con ddl, chocolate, pasta de avellanas, maní, marroc, coco, menta y pasas de uva con ddl'
        },
    
        {
            id: 2,
            order:2,
            name:'Caja de bombones mediana',
            price: 1400,
            stock: 5,
            img: '../../img/mediana.jpg',
            category: 'Bombones',
            description: 'Caja de 1/2kg: Aproximadamente entre 50-60 bombones de chocolate semi-amargo, dulce, y blanco.',
            description2: 'Caja de 1/2kg: Variado de bombones de chocolate semi-amargo, dulce, y blanco rellenos de una gran variedad de sabores como pueden ser: Dulce de leche, bon o bon, pasta de maní, almendras con ddl, nueces con ddl, chocolate, pasta de avellanas, maní, marroc, coco, menta y pasas de uva con ddl'
        },
    
        {
            id: 3,
            order:3,
            name:'Caja de bombones grande',
            price: 2800,
            stock: 5,
            img: "../../img/grandee.jpg",
            category: 'Bombones',
            description: 'Caja de 1kg: Aproximadamente entre 110-120 bombones de chocolate semi-amargo, dulce, y blanco.',
            description2: 'Caja de 1kg: Variado de bombones de chocolate semi-amargo, dulce, y blanco rellenos de una gran variedad de sabores como pueden ser: Dulce de leche, bon o bon, pasta de maní, almendras con ddl, nueces con ddl, chocolate, pasta de avellanas, maní, marroc, coco, menta y pasas de uva con ddl'
        },
    
        {
            id: 4,
            order:4,
            name:'Caja de bombones y barritas chica',
            price: 700,
            stock: 5,
            img: '../../img/ambas.jpg',
            category: 'Mixbarritas',
            description: 'Caja de 1/4kg: Variado de bombones y barritas de chocolate semi-amargo, dulce, y blanco.',
            description2: 'Caja de 1/4kg: Variado de bombones y barritas de chocolate semi-amargo, dulce, y blanco rellenos de una gran variedad de sabores como pueden ser: Dulce de leche, bon o bon, pasta de maní, almendras con ddl, nueces con ddl, chocolate, pasta de avellanas, maní, marroc, coco, menta y pasas de uva con ddl'
        },
    
    
        {
            id: 5,
            order:5,
            name:'Caja de bombones y barritas mediana',
            price: 1400,
            stock: 5,
            img: '../../img/ambas.jpg',
            category: 'Mixbarritas',
            description: 'Caja de 1/2kg: Variado de bombones y barritas de chocolate semi-amargo, dulce, y blanco.',
            description2: 'Caja de 1/2kg: Variado de bombones y barritas de chocolate semi-amargo, dulce, y blanco rellenos de una gran variedad de sabores como pueden ser: Dulce de leche, bon o bon, pasta de maní, almendras con ddl, nueces con ddl, chocolate, pasta de avellanas, maní, marroc, coco, menta y pasas de uva con ddl'
        },
    
    
        {
            id: 6,
            order:6,
            name:'Caja de bombones y barritas grande',
            price: 2800,
            stock: 5,
            img: '../../img/ambas.jpg',
            category: 'Mixbarritas',
            description: 'Caja de 1kg: Variado de bombones y barritas de chocolate semi-amargo, dulce, y blanco.',
            description2: 'Caja de 1kg: Variado de bombones y barritas de chocolate semi-amargo, dulce, y blanco rellenos de una gran variedad de sabores como pueden ser: Dulce de leche, bon o bon, pasta de maní, almendras con ddl, nueces con ddl, chocolate, pasta de avellanas, maní, marroc, coco, menta y pasas de uva con ddl'
        }
    
    
    
    ];

    const itemCollection = collection(appFirestore,"chocolates");     

    productos.forEach(item =>{
        
        const newDoc =  doc(itemCollection);

        setDoc(newDoc,item).then(res =>{
            console.log("documento guardado:",newDoc.id);
        })
        .catch((error=> console.log("Error obtenido: ", error)));
    })
}


export async function buyOrder(dataOrden) {
    const orderCollection = collection(appFirestore,"ordenes");
    const dataTimeStamp = Timestamp.now();

    const orderWithDate ={
        buyer: dataOrden.buyer,
        items: dataOrden.items,
        total: dataOrden.total,
        date: dataTimeStamp
    }

    const orderCreated = await addDoc(orderCollection,orderWithDate);

    return orderCreated;
}




export default appFirestore;