function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

import React, { useState } from 'react';
import './index.less';
// import Touchable from '@ant-design/mobile-touchable';
import classNames from 'classnames';
import { jsx as _jsx } from 'react/jsx-runtime';
var prefixCls = 'h-button';

var Button = function Button(props) {
  var _useState3, _objectSpread2;

  var type = props.type,
    disabled = props.disabled,
    onPress = props.onPress,
    loading = props.loading,
    className = props.className,
    activeClassName = props.activeClassName,
    children = props.children;

  var _useState = useState(
      ((_useState3 = {}),
      _defineProperty(_useState3, prefixCls, true),
      _defineProperty(_useState3, ''.concat(prefixCls, '-active'), false),
      _defineProperty(_useState3, activeClassName, false),
      _useState3),
    ),
    _useState2 = _slicedToArray(_useState, 2),
    cls = _useState2[0],
    setCls = _useState2[1];

  var innerCls = classNames(
    _objectSpread(
      _objectSpread({}, cls),
      {},
      ((_objectSpread2 = {}),
      _defineProperty(_objectSpread2, ''.concat(prefixCls, '-').concat(type), true),
      _defineProperty(_objectSpread2, className, !!className),
      _defineProperty(_objectSpread2, ''.concat(prefixCls, '-disabled'), disabled),
      _defineProperty(_objectSpread2, ''.concat(prefixCls, '-loading'), loading),
      _objectSpread2),
    ),
  );
  return /*#__PURE__*/ _jsx('button', {
    children: '111',
  }); // <Touchable
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
};

Button.defaultProps = {
  type: 'default',
  disabled: false,
  loading: false,
  className: '',
  activeClassName: '',
};
export default Button;
