import React, { useState } from 'react'
import './index.less'
import { ButtonPropsType } from './PropsType'
import classNames from 'classnames'

const prefixCls = 'n-button'

const Button: React.FC<ButtonPropsType> = (props) => {
  const { type, disabled, onPress, loading, className, activeClassName, children } = props
  const [cls, setCls] = useState({
    [prefixCls]: true,
    [`${prefixCls}-active`]: false,
    [activeClassName!]: false
  })
  const innerCls = classNames({
    ...cls,
    [`${prefixCls}-${type}`]: true,
    [className!]: !!className,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-loading`]: loading
  })
  return (
    <button>111</button>
    // <Touchable
    //   disabled={loading || disabled}
    //   onPressIn={() => {
    //     setCls({
    //       ...cls,
    //       [`${prefixCls}-active`]: true,
    //       [activeClassName!]: true,
    //     });
    //   }}
    //   onPress={(e) => {
    //     onPress && onPress(e);
    //   }}
    //   onPressOut={() => {
    //     setCls({
    //       ...cls,
    //       [`${prefixCls}-active`]: false,
    //       [activeClassName!]: false,
    //     });
    //   }}
    // >
    //   <div className={innerCls}>
    //     <div className={`${prefixCls}-loading-container`}>
    //       <div className={`${prefixCls}-loading-main`} />
    //     </div>
    //     <div className={`${prefixCls}-text-container`}>
    //       <span>{children}</span>
    //     </div>
    //   </div>
    // </Touchable>
  )
}

Button.defaultProps = {
  type: 'default',
  disabled: false,
  loading: false,
  className: '',
  activeClassName: ''
}

export default Button
