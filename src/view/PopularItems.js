
import React from 'react'
import {connect} from 'react-redux'
import {presets, spring, TransitionMotion} from 'react-motion'

const ListItem = ({item, style}) => (
  <h3 className='f3 tc w-20' style={style}>
    <small className='fw3 db'>{item.name}</small>
    {item.quantity}
  </h3>
)

// ANIMATION HELPERS
const willLeave = () => ({opacity: spring(0)})

const willEnter = () => ({opacity: 0})

const getStyles = () => ({opacity: spring(1, presets.gentle)})

// MAP STATE
// @TODO Just return name as key here, then connect the items themselves to the store.
// Would cut down on unncessary renders of items whose data is not changing.
const selectItems = state => Object.keys(state.quantities).map(key => ({
  name: key,
  quantity: state.quantities[key]
}))

const mapStateToProps = state => ({
  items: selectItems(state)
})

const Container = ({items}) => (
  <TransitionMotion
    willEnter={willEnter}
    willLeave={willLeave}
    styles={items.map(item => ({
      key: item.name,
      data: item,
      style: getStyles()
    }))}
  >
    { int =>
      <div className='flex flex-wrap items-left ph5'>
        { int.map(config =>
          <ListItem key={config.key} item={config.data} style={{...config.style}} />
        ) }
      </div>
    }
  </TransitionMotion>
)

export const PopularItems = connect(mapStateToProps)(Container)
