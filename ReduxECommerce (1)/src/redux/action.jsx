import { ADD_TO_CART ,REMOVE_TO_CART , EMPTY_CART } from './constants'
export const addToCart = (data) => {
    console.log('action', data);
    return {
      type:ADD_TO_CART,
      data:data
    }
    
  }
  export const removeToCart = (data) => {
    console.log('action', data);
    return {
      type:REMOVE_TO_CART,
      data:data
    }
    
  }
  export const emptyCart = (data) => {
    console.log('action', data);
    return {
      type:EMPTY_CART,
      data:data
    }
    
  }