
import React from 'react'
import {connect} from 'react-redux'

import {H2} from 'view/Atoms'

// @NOTE Would usually put selectors with logic like this in the state,
// written TDD. In interest of time and brevity of this project however...
const mapStateToProps = state => ({
  purchase: state.purchases[state.purchases.length - 1]
})

const Container = ({purchase}) => (
  <div>
    <H2>Latest Purchase</H2>
    <p>{JSON.stringify(purchase)}</p>
  </div>
)

export const LatestPurchase = connect(mapStateToProps)(Container)
