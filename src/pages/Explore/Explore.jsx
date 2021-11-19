import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from '../../components/CustomButton/Button'
import { deleteProduct, fetchProducts } from '../../redux/product/product.action'
import AddProduct from './AddProduct'

const mapStateToProps = (state) => ({
  products: state.products,
})
const actions = {
  fetchProducts,
  deleteProduct
}

const Explore = ({ fetchProducts, products, deleteProduct }) => {
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts()
    }
  }, [products])

  return (
    <div>
      <div>
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <div key={index}>
                <div>{product.name}</div>
                <Button onClick={() => deleteProduct(product)}>Remove</Button>
              </div>
            )
          })}
      </div>
      <AddProduct />
    </div>
  )
}
export default connect(mapStateToProps, actions)(Explore)
