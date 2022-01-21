import {
  collection,
  doc,
  FieldValue,
  increment,
  updateDoc,
} from 'firebase/firestore'
import { db, firestore } from '../../firebase/firebase.utils'
import { ADD_NUMBER, SUBTRACT_NUMBER } from './counter.constants'

export const addCounter = () => async (dispatch) => {
  const counterRef = doc(db, 'counter', 'reactcounter')
  try {
    await updateDoc(counterRef, {
      total: increment(1),
    })
    dispatch({ type: ADD_NUMBER })
  } catch (e) {
    console.log(e)
  }
}

export const subtractCounter = () => async (dispatch) => {
  const counterRef = doc(db, 'counter', 'reactcounter')
  await updateDoc(counterRef, {
    total: increment(-1),
  })
  dispatch({ type: SUBTRACT_NUMBER })
}
