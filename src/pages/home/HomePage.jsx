import { getAuth } from '@firebase/auth'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [counter, setCounter] = useState(0)
  const [cart, setCart] = useState([
    { id: 1, name: '3070', price: 40000, quantity: 5 },
    { id: 2, name: '3080', price: 80000, quantity: 12 },
    { id: 3, name: '3090', price: 40000, quantity: 15 },
  ])
  useEffect(() => {
    const auth = getAuth()
    console.log(auth.currentUser)
  }, [])

  // let totalamount = 0
  // for (let i = 0; i < cart.length; i++) {
  //   return
  // }
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Subtract</button>
      <div>
        {cart.map((cartitem) => {
          return (
            <div key={cartitem.id}>
              <div>{cartitem.name}</div>
              <div>{cartitem.price}</div>
              <div>{cartitem.quantity}</div>
            </div>
          )
        })}
      </div>
      <div>counter: {counter}</div>
    </div>
  )
}

export default HomePage
