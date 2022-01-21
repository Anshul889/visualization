import React from 'react'
import { connect } from 'react-redux'
import { addCounter, subtractCounter } from '../../redux/counter/counter.action'

const mapStateToProps = (state) => ({
  counter: state.counter,
})
const actions = {
  addCounter,
  subtractCounter,
}

const Bookmarks = ({ addCounter, subtractCounter, counter }) => {
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => addCounter()}>ADD</button>
      <button onClick={() => subtractCounter()}>SUBTRACT</button>
    </div>
  )
}

export default connect(mapStateToProps, actions)(Bookmarks)
