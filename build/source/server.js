"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.static(__dirname + '\\views\\public'));
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
const PORT = process.env.PORT || 3000;
app.use(routes_1.default);
app.listen(PORT, () => console.log(`connected ${PORT}`));
