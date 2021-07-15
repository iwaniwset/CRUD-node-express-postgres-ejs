const route = require ('express').Router()
const employeeRoute = require('./employee')

route.get('/', (req, res)=>{
    res.send('Welcome to CRUD postgres')
})
route.use('/employee', employeeRoute)

module.exports = route