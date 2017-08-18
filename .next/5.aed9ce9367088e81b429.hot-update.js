webpackHotUpdate(5,{

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(130);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(67);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(31);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/buck/repos/qm-next/components/SmartTable.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/buck/repos/qm-next/components/SmartTable.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hZWQ5Y2U5MzY3MDg4ZTgxYjQyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbWFydFRhYmxlLmpzP2UwNDg2NDEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBTbWFydFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29ydDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIHNvcnRCeShjb2xTeW1ib2wpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0ID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc29ydDogW2NvbFN5bWJvbCwgJ2FzYyddfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFtjb2xTeW1ib2wsIGRpcl0gPSB0aGlzLnN0YXRlLnNvcnQ7XG5cbiAgICAgIGlmIChkaXIgPT0gJ2FzYycpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnQ6IFtjb2xTeW1ib2wsICdkZXNjJ119KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0OiBudWxsfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNvbHVtbnMsIGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgW3NvcnRDb2xTeW1ib2wsIGRpcl0gPSB0aGlzLnN0YXRlLnNvcnQgfHwgW251bGwsIG51bGxdO1xuXG4gICAgcmV0dXJuIDx0YWJsZT5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sLCBpZHgpID0+XG4gICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc29ydEJ5KGNvbC5zeW1ib2wpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb2wudGl0bGV9Jm5ic3A7XG4gICAgICAgICAgICAgIHtjb2wuc3ltYm9sID09IHNvcnRDb2xTeW1ib2wgJiYgZGlyID09ICdhc2MnID8gXCJeXCIgOiBcInZcIn1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtkYXRhLm1hcCgocm93LCBpZHgpID0+IDx0ciBrZXk9e2lkeH0+XG4gICAgICAgICAge2NvbHVtbnMubWFwKChjb2wsIGlkeCkgPT4gPHRkIGtleT17aWR4fT57cm93W2NvbC5zeW1ib2xdfTwvdGQ+KX1cbiAgICAgICAgPC90cj4pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNtYXJ0VGFibGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU21hcnRUYWJsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRkE7O0FBQUE7QUFJQTtBQUpBO0FBQ0E7QUFTQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUEvQ0E7QUFDQTtBQWlEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9