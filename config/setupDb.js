const { query } = require('express');
const pool = require('../config/conn')

 const dropTable = `DROP TABLE IF EXISTS "Employees"`;

 const createEmployee = `CREATE TABLE "Employees" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR ( 50 ) NOT NULL,
	"position" VARCHAR ( 50 ) NOT NULL,
  "phone" INT NOT NULL,
	"email" VARCHAR ( 255 ) NOT NULL,
  "address" VARCHAR (255) NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP 
)`;

pool.query(dropTable, (err, res) => {
  if(err){
    return console.log(err);
  }
  pool.query(createEmployee, (err, res)=>{
    if(err){
      return console.log(err);
    }
    console.log("Success Create Table");
  })

})