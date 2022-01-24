import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  addCounter,
  resetCounter,
  subtractCounter,
  getCounter,
} from '../../redux/counter/counter.action'

const mapStateToProps = (state) => ({
  counter: state.counter,
})
const actions = {
  addCounter,
  subtractCounter,
  resetCounter,
  getCounter,
}

const Bookmarks = ({ addCounter, subtractCounter, counter, resetCounter, getCounter }) => {
  useEffect(() => {
    getCounter()
  })
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => addCounter()}>ADD</button>
      <button onClick={() => subtractCounter()}>SUBTRACT</button>
      <button onClick={() => resetCounter()}>RESET</button>
    </div>
  )
}

export default connect(mapStateToProps, actions)(Bookmarks)
