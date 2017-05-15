
import React from 'react'
import classNames from 'classnames'

export const H2 = ({children}) => (<h2 className='f4 fw5 lh-copy'>{children}</h2>)
export const Icon = ({className}) => (<i className={classNames('fa', className)} aria-hidden='true' />)
