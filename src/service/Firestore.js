import { initializeApp } from "firebase/app";
import {getFirestore,getDocs,collection, getDoc, doc,query,where} from "firebase/firestore"

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
    const itemSnapshot = await getDocs(itemCollection);

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

    const docref = doc(itemCollection,itemId)
    const docSnapshot = await getDoc(docref);
    
    return {
        id: docSnapshot.id,
        ...docSnapshot.data()
    };
}


export async function getItem3(categoryId) {
    const itemCollection = collection(appFirestore,"chocolates");
    const q = query(itemCollection,where("category", "==", categoryId))
    const itemSnapshot = await getDocs(q);
    

    let respu = itemSnapshot.docs.map(doc=>{
        return {
            ...doc.data(),
            id:doc.id
        }
    })

    return respu;
}




export default appFirestore;