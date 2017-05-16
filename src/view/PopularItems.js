
import React from 'react'
import {connect} from 'react-redux'

const ListItem = ({item}) => (
  <h3 className='f3 center tc w-20'>
    <small className='fw3 db'>{item.name}</small>
    {item.quantity}
  </h3>
)

const selectItems = state => Object.keys(state.quantities).map(key => ({
  name: key,
  quantity: state.quantities[key]
}))

const mapStateToProps = state => ({
  items: selectItems(state)
})

const Container = ({items}) => {
  const listItems = items.map((item, key) => <ListItem key={key} item={item} />)
  return (
    <div className='flex flex-wrap ph5'>
      {listItems}
    </div>
  )
}

export const PopularItems = connect(mapStateToProps)(Container)
