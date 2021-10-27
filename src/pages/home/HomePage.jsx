import React, { useState } from 'react'

const HomePage = () => {
  const [counter, setCounter] = useState(0)
  const [cart, setCart] = useState([
    { id: 1, name: '3070', price: 40000, quantity: 5 },
    { id: 2, name: '3080', price: 80000, quantity: 12 },
    { id: 3, name: '3090', price: 40000, quantity: 15 },
  ])

  // let totalamount = 0
  // for (let i = 0; i < cart.length; i++) {
  //   return
  // }
  return (
    <div>
      <h1>Your Cards</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Subtract</button>
      <p>Heya</p>
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
