const express = require('express')
require('dotenv').config()
const routes = require('./routes')

const app = express()
const PORT= process.env.PORT || 5605

app.use('/', routes)

app.listen(PORT,()=>{
    console.log(`App listening on port:localhost://http:localhost:${PORT}`);
})