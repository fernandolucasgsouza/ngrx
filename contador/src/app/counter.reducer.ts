import { createReducer, on, Action } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";


export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, state => ++state),
    on(decrement, state => --state),
    on(reset, state => 0),
);

export function counterReducer(state , action: Action) {
    return _counterReducer(state, action);
}