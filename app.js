const express = require('express')
const app = express()
const port = 3000

//import routes dari folder routes/index.js
const route = require('./routes/index')


// setup untuk view engine ejs
app.set('view engine', 'ejs');

// Setting middleware bodyParser
app.use(express.urlencoded({
    extended:true
}))

app.use('/', route)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})