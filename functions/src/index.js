"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

var _facts = _interopRequireDefault(require("./facts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// @ts-ignore
var props = window.__INITIAL_PROPS__; //if data isn't populated by the server, fetch it on the client

if (props) {
  (0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_App["default"], props), document.querySelector('#root'));
} else {
  (0, _facts["default"])().then(function (facts) {
    return (0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
      facts: facts
    }), document.querySelector('#root'));
  });
}