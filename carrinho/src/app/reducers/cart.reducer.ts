import { ActionModel, CartModel, ProductModel } from "../models";
import { ActionTypes } from '../actions';

export const cart: CartModel = new CartModel();


export function cartReducer(state = cart, action: ActionModel) {

    switch (action.type) {
        case ActionTypes.Add:
            {
                state.products.push(action.payload)
                state.total = calculateTotal(state.products)
                console.log('state', state);
                return state
            }
        case ActionTypes.Remove:
            {
                const index = state.products.indexOf(action.payload)
                state.products.splice(index, 1)
                state.total = calculateTotal(state.products)
                console.log('index', index);
                console.log('state', state);
                return state
            }
        case ActionTypes.Clear:
            {
                state = new CartModel();
                state.total = calculateTotal(state.products)
                console.log('state', state);
                return state
            }
        default:
            return state;
    }
}

function calculateTotal(products: ProductModel[]): number {
    let total = 0;
    products.forEach(product => {
        total += product.price
    });
    return total;
}