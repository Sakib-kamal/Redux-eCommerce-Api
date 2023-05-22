import React from 'react';
import { useSelector } from 'react-redux';
import {  removeToCart } from '../redux/action'
import { useDispatch } from 'react-redux'

const AddedProduct = () => {
  const dispatch = useDispatch();
    const product = useSelector((state)=>state.cartData);
    console.log(product, "in product")
  return (
 <>
  <h1> Your Selected product </h1>
    <div className='product-container'>
      {product.map((item) => (<div key={item.id} className='product-item'>
        <h3> Brand :{item.name}</h3>
        <span> <img src={item.photo} alt = "product photo"/></span>
        <h3> Color : {item.color}</h3>
        <h3> Price: {item.price}</h3>
        <h3>Category: {item.category}</h3>
        <div><button onClick={() => dispatch(removeToCart(item.id))}> Remove to cart</button></div>
      </div>
      ))}
    </div>
 </>
  )
}

export default AddedProduct