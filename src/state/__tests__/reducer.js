/* global test, expect */

import {actions, initialState, types, reducer} from '../reducer'

const item = {
  type: 'alcohol',
  name: 'mead',
  quantity: 9001
}

// Reusable stream payload for tests.
const payload = {
  amount: 30,
  shopper: {
    gender: 'male',
    name: 'Thor Odinson'
  },
  cart: [item, item]
}

test('expect storePurchase shape to be correct', () => {
  const expected = {
    type: types.STORED_PURCHASE,
    payload: payload
  }
  expect(actions.storePurchase(payload)).toEqual(expected)
})

test('expect reducer to handle storePurchase correctly', () => {
  const expected = {
    purchases: [payload],
    quantities: {
      [item.name]: item.quantity * 2
    }
  }
  const action = actions.storePurchase(payload)
  const state = reducer(initialState, action)
  expect(state).toEqual(expected)
})
