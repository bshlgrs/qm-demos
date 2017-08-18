'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _SmartTable = require('../components/SmartTable');

var _SmartTable2 = _interopRequireDefault(_SmartTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/buck/repos/qm-next/pages/table-example.js?entry';


var exampleData = [{ name: "buck", "algorithms-skill": 3, 'lls-skill': 6 }, { name: "jill", "algorithms-skill": 3, 'lls-skill': 6 }, { name: "todd", "algorithms-skill": 3, 'lls-skill': 6 }, { name: "jamie", "algorithms-skill": 3, 'lls-skill': 6 }];

var columns = [{ symbol: 'name', title: 'Name' }, { symbol: 'algorithms-skill', title: 'Algorithms score' }, { symbol: 'lls-skill', title: 'Low level systems skill' }];

var TableExample = function TableExample() {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'hello'), _react2.default.createElement(_SmartTable2.default, { data: exampleData, columns: columns, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }));
};

exports.default = TableExample;