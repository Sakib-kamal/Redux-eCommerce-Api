import React, { useEffect } from 'react'
import { addToCart, removeToCart, emptyCart } from '../redux/action'
import { useDispatch } from 'react-redux'
import Header from './Header';
import { useSelector } from 'react-redux';
import { productList } from '../redux/ProductAction';

const Home = () => {

  const dispatch = useDispatch();
  const productdata = useSelector((state) => state.productData);
  console.log("productData in main home", productdata)
  useEffect(() => {
    dispatch(productList())
  }, [])

  return (<>
    <Header />
    <div>
      <button onClick={() => dispatch(emptyCart())}> Empty  cart </button><br />
    </div>
    <div className='product-container'>
      {productdata.map((item) => (<div key={item.id} className='product-item'>
        <h3> Brand :{item.name}</h3>
        <div> <img src={item.photo} /></div>
        <h3> Color : {item.color}</h3>
        <h3> Price: {item.price}</h3>
        <h3>Category: {item.category}</h3>
        <div><button onClick={() => dispatch(addToCart(item))}> Add to cart</button></div><br/>
      </div>
      ))}
    </div>
  </>
  )
}

export default Home