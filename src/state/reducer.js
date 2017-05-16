
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
  purchases: []
}

export const reducer = handleActions({
  [types.STORED_PURCHASE]: (state, action) => assign({}, state, {
    purchases: [...state.purchases, action.payload]
  })
}, initialState)
