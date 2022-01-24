import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS } from './product.constants'
import { db } from '../../firebase/firebase.utils'

export const addProduct = (product) => async (dispatch) => {
  const docRef = await addDoc(collection(db, 'products'), {
    name: product.name,
    price: parseInt(product.price),
  })
  let newProduct = {...product, id: docRef.id}
  dispatch({type: ADD_PRODUCT, payload: newProduct})
  console.log('Document written with ID: ', docRef.id)
}

export const deleteProduct = (product) => async(dispatch) => {
  console.log(product.name)
  try{
   await deleteDoc(doc(db, 'products', `${product.id}`));
  } catch(error){
    console.log(error)
  }
  dispatch({type: DELETE_PRODUCT, payload: product})
}

export const fetchProducts = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, 'products'))
  let products = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let product = { ...doc.data(), id: doc.id }
    products.push(product)
  })
  dispatch({ type: FETCH_PRODUCTS, payload: products })
  console.log(products)
}