import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { db } from './fire.js';
import 'firebase/firestore';


const collectionName = 'toys';
const collectionRef = collection(db, collectionName);

async function getProducts() {
  console.log('crud 1');
    // Create a reference to the "products" collection in the database
    const productsCollection = collection(db, collectionName);
    console.log('crud 2');

    // Fetch all documents in the "products" collection
    const productsSnapshot = await getDocs(productsCollection);
    console.log('crud 3');

    // Map the documents to objects with key property
    const productsList = productsSnapshot.docs.map(doc => withKey(doc));
    console.log('crud 4');

    return productsList;
}

// Use this if you don't have an id in the objects themselves
function withKey(doc) {
    let o = doc.data();
    o.key = doc.id; // "id" is the document reference
    return o;
}

async function addProduct(product) {
    // Reference to the "products" collection
    await addDoc(collectionRef, product);
}

async function deleteProduct(key) {
    const docRef = doc(collectionRef, key);
    await deleteDoc(docRef);
}

async function editProduct(key, updatedProduct) {
    const docRef = doc(collectionRef, key);
    await updateDoc(docRef, updatedProduct);
}

export { getProducts, editProduct, deleteProduct, addProduct }