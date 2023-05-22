import { PRODUCT_LIST } from './constants'


export const productList = () => {
   
    return {
        type: PRODUCT_LIST,
    }

}
// export const setProductList = (data) => {
   
//     console.warn('productlist  in action' , data)
//     return {
//         type: SET_PRODUCT_LIST,
//         data: data
//     }

// }