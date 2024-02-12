const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes')

const app = express()
const PORT= process.env.PORT || 5605

app.use(cors({
    origin: 'http://localhost:5045',
    credentials: true
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', routes)

app.listen(PORT,()=>{
    console.log(`App listening on port:http://localhost:${PORT}`);
})
