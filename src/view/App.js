
import React from 'react'

import {Statistics} from 'view/Statistics'
import {LatestPurchase} from 'view/LatestPurchase'
import {H2, Icon} from 'view/Atoms'

const PopularItems = () => (
  <H2>Popular Items</H2>
)

export const App = ({purchases}) => (
  <div className='w-100'>
    <h1 className='mv5 f2 fw4 lh-copy tc'><Icon className='fa-shopping-cart' /> Checkout Activity</h1>
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
