// import module express
const express = require('express')
const app = express()

// Setting Port
const port = 3000

//import routes dari folder routes/index.js
const route = require('./routes/index')


// setup untuk view engine ejs
app.set('view engine', 'ejs');

// Setting middleware bodyParser
app.use(express.urlencoded({
    extended:true
}))

// route diline 18 merefer pada routes/index.js
app.use('/', route)

// ini untuk menjalan wxpress pada port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})