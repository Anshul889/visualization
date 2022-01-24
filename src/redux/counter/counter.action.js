import { doc, getDoc, increment, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase.utils'
import {
  ADD_NUMBER,
  GET_COUNTER,
  RESET_COUNTER,
  SUBTRACT_NUMBER,
} from './counter.constants'

export const getCounter = () => async (dispatch) => {
  const counterRef = doc(db, 'counter', 'reactcounter')
  try {
    const docSnap = await getDoc(counterRef)
    const countertotal = docSnap.data().total
    dispatch({ type: GET_COUNTER, payload: countertotal })
  } catch (e) {
    console.log(e)
  }
}

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

export const resetCounter = () => async (dispatch) => {
  const counterRef = doc(db, 'counter', 'reactcounter')
  await updateDoc(counterRef, {
    total: 0,
  })
  dispatch({ type: RESET_COUNTER })
}
