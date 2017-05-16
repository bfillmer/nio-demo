
import React from 'react'

import {Statistics} from 'view/Statistics'
import {Icon} from 'view/Atoms'

const H1 = ({children}) => (<h1 className='mv5 f2 fw4 lh-copy tc'>{children}</h1>)

const PopularItems = () => (
  <div className='ph5'>
  </div>
)

export const App = ({purchases}) => (
  <div className='w-100'>
    <H1><Icon className='fa-shopping-cart' /> Checkout Activity</H1>
    <Statistics />
    <H1><Icon className='fa-star' /> Popular Items</H1>
    <PopularItems />
  </div>
)
