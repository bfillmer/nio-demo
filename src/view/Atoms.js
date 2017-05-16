
import React from 'react'
import classNames from 'classnames'

export const H2 = ({className, children}) => (<h2 className={classNames('f3 fw5 lh-copy', className)}>{children}</h2>)
export const Icon = ({className}) => (<i className={classNames('fa', className)} aria-hidden='true' />)
