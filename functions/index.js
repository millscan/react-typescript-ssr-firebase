"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./src/App"));

var _facts = _interopRequireDefault(require("./src/facts"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
app.get('**', function (req, res) {
  _fs["default"].readFile(_path["default"].join(__dirname, 'src', 'template.html'), 'utf8', function (err, index) {
    if (err) {
      return res.status(500).send('Error sending page :(');
    } //fetch some stuff for the initial render if you want


    (0, _facts["default"])().then(function (facts) {
      var props = {
        facts: facts
      };
      var html = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_App["default"], props));
      var finalHtml = index.replace('<script type="text/javascript" src="bundle.js"></script>', "<script>window.__INITIAL_PROPS__ = ".concat(JSON.stringify(props), "</script><script type=\"text/javascript\" src=\"bundle.js\"></script>")).replace('<!-- ::APP:: --->', html);
      res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
      res.send(finalHtml);
    });
  });
});
var ssrapp = functions.https.onRequest(app);
exports.ssrapp = ssrapp;