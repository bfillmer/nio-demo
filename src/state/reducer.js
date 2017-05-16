
import {createAction, handleActions} from 'redux-actions'

export const assign = Object.assign

// TYPES
export const types = {
  STORED_PURCHASE: 'nio/STORED_PURCHASE'
}

// ACTIONS
export const actions = {
  storePurchase: createAction(types.STORED_PURCHASE)
}

// REDUCERS
const initialState = {
  purchases: [],
  quantities: {}
}

// @HACK Non-normalized return data, build out a map based on item name and update the
// quantity number. Would prefer an array structure, but don't want to deal with finding
// and updating existing item quantities in a list.
const getQuantities = (quantities, cart) => cart.reduce((q, item) => assign({}, q, {
  [item.name]: q[item.name] ? item.quantity + q[item.name] : item.quantity
}), quantities)

export const reducer = handleActions({
  [types.STORED_PURCHASE]: (state, action) => assign({}, state, {
    purchases: [...state.purchases, action.payload],
    quantities: getQuantities(state.quantities, action.payload.cart)
  })
}, initialState)
