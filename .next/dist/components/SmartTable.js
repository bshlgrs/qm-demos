'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/buck/repos/qm-next/components/SmartTable.js';


var SmartTable = function (_React$Component) {
  (0, _inherits3.default)(SmartTable, _React$Component);

  function SmartTable(props) {
    (0, _classCallCheck3.default)(this, SmartTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SmartTable.__proto__ || (0, _getPrototypeOf2.default)(SmartTable)).call(this, props));

    _this.state = {
      sort: null
    };
    return _this;
  }

  (0, _createClass3.default)(SmartTable, [{
    key: 'sortBy',
    value: function sortBy(colSymbol) {
      if (this.state.sort === null) {
        this.setState({ sort: [colSymbol, 'asc'] });
      } else {
        var _state$sort = (0, _slicedToArray3.default)(this.state.sort, 2),
            _colSymbol = _state$sort[0],
            dir = _state$sort[1];

        if (dir == 'asc') {
          this.setState({ sort: [_colSymbol, 'desc'] });
        } else {
          this.setState({ sort: null });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          data = _props.data;

      var _ref = this.state.sort || [null, null],
          _ref2 = (0, _slicedToArray3.default)(_ref, 2),
          sortColSymbol = _ref2[0],
          dir = _ref2[1];

      return _react2.default.createElement('table', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('thead', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, columns.map(function (col, idx) {
        return _react2.default.createElement('th', {
          key: idx,
          onClick: function onClick() {
            return _this2.sortBy(col.symbol);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, col.title, '\xA0', col.symbol == sortColSymbol && dir == 'asc' ? "^" : "v");
      }))), _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, data.map(function (row, idx) {
        return _react2.default.createElement('tr', { key: idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, columns.map(function (col, idx) {
          return _react2.default.createElement('td', { key: idx, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }, row[col.symbol]);
        }));
      })));
    }
  }]);

  return SmartTable;
}(_react2.default.Component);

exports.default = SmartTable;