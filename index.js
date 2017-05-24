'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleButton = function SimpleButton(_ref) {
  var full = _ref.full,
      style = _ref.style,
      float = _ref.float,
      label = _ref.label,
      onClick = _ref.onClick;

  var cssClass = _style2.default.simpleButton;
  if (full) cssClass = cssClass + ' ' + _style2.default.full;
  if (style) cssClass = cssClass + ' ' + _style2.default[style];
  if (float) cssClass = cssClass + ' ' + _style2.default[float];

  return _react2.default.createElement(
    'button',
    { className: cssClass, onClick: onClick },
    label
  );
};

SimpleButton.propTypes = {
  /**
   * Make button width to 100%
   */
  full: _react.PropTypes.bool,
  style: _react.PropTypes.oneOf(['blue', 'lightBlue', 'full', 'half']),
  float: _react.PropTypes.oneOf(['floatRight', 'floatLeft']),
  label: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};

exports.default = SimpleButton;
