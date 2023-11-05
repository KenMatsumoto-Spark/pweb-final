import express from 'express'
import router from './routes'

const app = express()
app.use(express.static(__dirname + '\\views\\public'))
var path = require ('path');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);


const PORT = process.env.PORT || 3000;

app.use(router)
app.listen(PORT, () => console.log(`connected ${PORT}`))

