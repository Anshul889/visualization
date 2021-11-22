import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Button } from '../../components/CustomButton/Button'
import { addProduct } from '../../redux/product/product.action'

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  margin: 0 auto;
`

const actions = {
  addProduct,
}

const AddProduct = ({ addProduct }) => {
  const [inputs, setInputs] = useState({})
  const handleChange = (e) =>
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))

  const onAddProduct = (event) => {
    event.preventDefault();
    let product = {
      name: inputs.name,
      price: inputs.price,
    }
    addProduct(product)
  }

  return (
    <Wrapper onSubmit={onAddProduct}>
      <input
        key='name'
        name='name'
        placeholder='Name'
        type='date'
        onChange={handleChange}
      />
      <input
        key='price'
        name='price'
        placeholder='Price'
        type='number'
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </Wrapper>
  )
}

export default connect(null, actions)(AddProduct)
