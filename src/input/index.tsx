import React, { useState } from 'react';
import './index.less';
import { ButtonPropsType } from './PropsType';
import classNames from 'classnames';

const prefixCls = 'n-button';

const Input: React.FC<ButtonPropsType> = (props) => {
  return <input type="text" name="" id="name" value="" placeholder="请输入姓名" />;
};

export default Input;
