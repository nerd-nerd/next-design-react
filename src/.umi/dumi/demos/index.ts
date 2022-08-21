// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Button-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Applications/workspace/zpqa/demo/next-design-react/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _nextDesignReact = require("next-design-react");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_nextDesignReact.Button, null, "default"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_nextDesignReact.Button, {
      type: "primary"
    }, "primary"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_nextDesignReact.Button, {
      type: "warn"
    }, "warn"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Button } from 'next-design-react';\n\nexport default () => {\n  return (\n    <>\n      <Button>default</Button>\n      <br />\n      <Button type=\"primary\">primary</Button>\n      <br />\n      <Button type=\"warn\">warn</Button>\n    </>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"next-design-react":{"version":"1.0.0"}},"componentName":"Button","identifier":"Button-demo"},
  },
  'Button-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Applications/workspace/zpqa/demo/next-design-react/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _nextDesignReact = require("next-design-react");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_nextDesignReact.Button, {
      disabled: true,
      onPress: function onPress() {
        console.log(1);
      }
    }, "default"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_nextDesignReact.Button, {
      disabled: true,
      type: "primary"
    }, "primary"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_nextDesignReact.Button, {
      disabled: true,
      type: "warn"
    }, "warn"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Button } from 'next-design-react';\n\nexport default () => {\n  return (\n    <>\n      <Button\n        disabled={true}\n        onPress={() => {\n          console.log(1);\n        }}\n      >\n        default\n      </Button>\n      <br />\n      <Button disabled={true} type=\"primary\">\n        primary\n      </Button>\n      <br />\n      <Button disabled={true} type=\"warn\">\n        warn\n      </Button>\n    </>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"next-design-react":{"version":"1.0.0"}},"componentName":"Button","identifier":"Button-demo-1"},
  },
  'Foo-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Applications/workspace/zpqa/demo/next-design-react/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _nextDesignReact = require("next-design-react");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_nextDesignReact.Foo, {
      title: "First Demo"
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Foo } from 'next-design-react';\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"18.2.0"},"next-design-react":{"version":"1.0.0"}},"componentName":"Foo","identifier":"Foo-demo"},
  },
};
