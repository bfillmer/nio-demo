
import nio from 'niojs'
import {createStore, compose} from 'redux'

import {actions, reducer} from 'state/reducer'

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers = ((process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// If we aren't in production and we have redux devtools let's add that as middleware.
export const store = createStore(
  reducer,
  composeEnhancers()
)

// Attach our data stream to our store so we can actively retrieve data.
// @TODO Still a little on the fence about the organization here, works for now.
nio.source
  .socketio('//eval.socket.nio.works', ['groceries'])
  .pipe(nio.func(purchase => store.dispatch(actions.storePurchase(purchase))))
