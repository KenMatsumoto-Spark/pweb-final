"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

const app = _express2.default.call(void 0, )
app.use(_express2.default.static(__dirname + '\\views\\public'))
var path = require ('path');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);


const PORT = process.env.PORT || 3000;

app.use(_routes2.default)
app.listen(PORT, () => console.log(`connected ${PORT}`))

