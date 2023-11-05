"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _controllers = require('./controllers'); var _controllers2 = _interopRequireDefault(_controllers);

const app = _express.Router.call(void 0, )
app.use('/', _controllers2.default.MainController)

exports. default = app
