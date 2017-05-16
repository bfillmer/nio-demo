
import React from 'react'

import {Statistics} from 'view/Statistics'
import {PopularItems} from 'view/PopularItems'
import {Icon} from 'view/Atoms'

const H1 = ({children}) => (<h1 className='mv5 f2 fw4 lh-copy tc'>{children}</h1>)

export const App = ({purchases}) => (
  <div className='w-100'>
    <H1><Icon className='fa-shopping-cart' /> Daily Statistics</H1>
    <Statistics />
    <H1><Icon className='fa-star' /> Today&#8217;s Items</H1>
    <PopularItems />
  </div>
)
