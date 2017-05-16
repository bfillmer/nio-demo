
import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'

import {H2, Icon} from 'view/Atoms'

const Column = ({children}) => (<H2 className='ma0 center'>{children}</H2>)

const getFemale = purchase => purchase.shopper.gender === 'female'
const getMale = purchase => purchase.shopper.gender === 'male'

const mapStateToProps = state => ({
  average: numeral(
    state.purchases.reduce((total, purchase) => (total + purchase.amount), 0) / state.purchases.length
  ).format('$0,0.00'),
  gender: ({
    female: numeral(state.purchases.filter(getFemale).length / state.purchases.length * 100).format('0,0'),
    male: numeral(state.purchases.filter(getMale).length / state.purchases.length * 100).format('0,0')
  }),
  total: state.purchases.length
})

const Container = ({average, gender, total}) => (
  <div className='flex justify-between mb5 mh5 pa3 bn br3 bg-moon-gray'>
    <Column>
      <Icon className='fa-usd fa-lg' /> Average Purchase Value {average}
    </Column>
    <Column>
      <Icon className='fa-plus-square fa-lg' /> Total Purchases Today {total}
    </Column>
    <Column>
      <Icon className='fa-venus-mars fa-lg' /> Male/Female Shoppers {gender.male}/{gender.female}
    </Column>
  </div>
)

export const Statistics = connect(mapStateToProps)(Container)
