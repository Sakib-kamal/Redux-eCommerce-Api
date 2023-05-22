import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constants"


export const cartData = (data = [], action) => {
    console.warn(action, 'inreducer')
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];
        case REMOVE_TO_CART:
            console.warn(action, 'inreducer')
        const remainingItem = data.filter((item) =>item.id !== action.data);
            return [...remainingItem];
        case EMPTY_CART:
            data = []
            return data;
        default:
            return data;
    }
    return ''
}