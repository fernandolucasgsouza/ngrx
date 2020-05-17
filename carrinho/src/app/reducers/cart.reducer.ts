import { ActionModel, CartModel, ProductModel } from "../models";
import { ActionTypes } from '../actions';

export const cart: CartModel = new CartModel();


export function cartReducer(state = cart, action: ActionModel) {

    switch (action.type) {
        case ActionTypes.Add:
            {
                let product_temp = [];
                if (state.products.length == 0)
                    state = { ...state, products: [action.payload], total: action.payload.price };
                else {
                    product_temp = [...state.products];
                    product_temp.push(action.payload);
                    state = { ...state, products: product_temp, total: calculateTotal(product_temp) };
                }
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