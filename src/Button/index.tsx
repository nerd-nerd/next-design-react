import React from 'react'
import './style/index.less'
import { ButtonPropsType } from './PropsType'
import classNames from 'classnames'

const prefixCls = 'next-design-btn'

const Button: React.FC<ButtonPropsType> = (props) => {
  const { type } = props
  const classes = classNames({
    [prefixCls]: true,
    [`${prefixCls}-${type}`]: type
  })
  return <button className={classes}>Button</button>
}

Button.defaultProps = {
  type: 'default',
  disabled: false,
  loading: false,
  className: '',
  activeClassName: ''
}

export default Button
