
import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import classNames from 'classnames'

import {H2, Icon} from 'view/Atoms'

const Column = ({children}) => (<H2 className='ma0 center v-mid independence'>{children}</H2>)
const Stat = ({children}) => (<em className='fa-lg fs-normal gunmetal'>{children}</em>)
const StatIcon = ({className}) => (<Icon className={classNames('fa-lg black-50', className)} />)

const getFemale = purchase => purchase.shopper.gender === 'female'
const getMale = purchase => purchase.shopper.gender === 'male'

const mapStateToProps = state => ({
  average: numeral(
    state.purchases.reduce((total, purchase) => (total + purchase.amount), 0) / state.purchases.length
  ).format('$0,0.00'),
  gender: ({
    female: numeral(state.purchases.filter(getFemale).length / state.purchases.length).format('0%'),
    male: numeral(state.purchases.filter(getMale).length / state.purchases.length).format('0%')
  }),
  total: state.purchases.length
})

const Container = ({average, gender, total}) => (
  <div className='flex items-center justify-between mb5 mh5 pv4 ph3 bn br3 bg-eggshell'>
    <Column>
      <StatIcon className='fa-usd' /> Average Purchase Value <Stat>{average}</Stat>
    </Column>
    <Column>
      <StatIcon className='fa-plus-square' /> Total Purchases Today <Stat>{total}</Stat>
    </Column>
    <Column>
      <StatIcon className='fa-mars' /> Male <Stat>{gender.male}</Stat>
    </Column>
    <Column>
      <StatIcon className='fa-venus' /> Female <Stat>{gender.female}</Stat>
    </Column>
  </div>
)

export const Statistics = connect(mapStateToProps)(Container)
