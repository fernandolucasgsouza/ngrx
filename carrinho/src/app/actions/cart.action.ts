import { ActionModel } from '../models/action.model';
import { ProductModel } from '../models/product.model';

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLS'
}

export const Add = (product: ProductModel) => {
    return <ActionModel>{ type: ActionTypes.Add, payload: product }
}

export const Remove = (product: ProductModel) => {
    return <ActionModel>{ type: ActionTypes.Remove, payload: product }
}

export const Clear = () => {
    return <ActionModel>{ type: ActionTypes.Clear, payload: null }
}