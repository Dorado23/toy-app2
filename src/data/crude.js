import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { db } from './fire.js';



const collectionName = 'products';
const collectionRef = collection(db, collectionName);

async function getProducts() {
    // Create a reference to the "products" collection in the database
    const productsCollection = collection(db, collectionName);

    // Fetch all documents in the "products" collection
    const productsSnapshot = await getDocs(productsCollection);

    // Map the documents to objects with key property
    const productsList = productsSnapshot.docs.map(doc => withKey(doc));
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

export { getProducts, addProduct, deleteProduct, editProduct };