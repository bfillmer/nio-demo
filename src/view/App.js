
import React from 'react'
import {connect} from 'react-redux'

import {H2, Icon} from 'view/Atoms'

const mapStateToProps = state => ({
  purchases: state.purchases
})

const Statistics = () => (
  <div className='mh5 pa3 bn br3 bg-moon-gray'>Statistics</div>
)

const LatestPurchase = () => (
  <H2>Latest Purchase</H2>
)

const PopularItems = () => (
  <H2>Popular Items</H2>
)

export const Container = ({purchases}) => (
  <div className='w-100'>
    <h1 className='f2 fw4 lh-copy tc'><Icon className='fa-shopping-cart' /> Checkout Activity</h1>
    <Statistics />
    <div className='flex'>
      <div className='w-50 ph5'>
        <LatestPurchase />
      </div>
      <div className='w-50 ph5'>
        <PopularItems />
      </div>
    </div>
  </div>
)

export const App = connect(mapStateToProps)(Container)
