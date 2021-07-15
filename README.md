# CRUD-node-express-postgres-ejs

- `Pastikan sebelum memulai tutorial ini kalian telah menginstall`
  ['node.js'](https://nodejs.org/en/)
  ['postgresql'](https://www.postgresql.org/)
- `jalankan npm init -y untuk membuat package json yang sebagai tempat depedency kalian`
- `setelah itu install module yang akan kalian butuhkan pada latihan kali ini saya akan menggunakan `express`, `pg`, `ejs`. setelah itu saya akan mengistall module nodemon secara global`

setelah mengikuti tahapan diatas maka tampilan folder kita kurang lebih akan seperti ini

```
├── node_modules
│   └── ...
├── package.json
└── package-lock.json
```

## Setup Database

jika saya menemukan case seperti ini biasanya yang pertama saya lakukan adalah membuat databasenya dulu

- pastikan kalian telah membuat database di dalam postgres kalian (bisa menggunakan pgadmin, adminer, dbeaver)
- buat lah database dengan `employee` atau bisa gunakan nama sesuai keperluan kalian
- setelah itu buat folder baru dengan nama `config` (folder ini akan berisi koneksi aplikasi kita ke database)
- setelah itu buat file dengan nama `config.js` kemudian isi file tersebut dengan code dibawah ini

#### code 1

```Javascript
// file: config/config.js

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud-postgres', //nama tabel yang akan dibuat
  password: '', //password saat install postgres
  port: 5432, // port default postgres
})

module.exports = pool
```

- setelah selesai, buat file `setup.js` masih di dalam folder config
- file setup.js nantinya yang akan membuatkan tabel pada aplikasi kita

#### code 2

```Javascript
// file config/setup.js
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
```

#### Tabel Employee

| Kolom    | Tipe         | Deskripsi   |
| :------- | :----------- | :---------- |
| id       | SERIAL       | PRIMARY KEY |
| name     | VARCHAR(255) | NOT NULL    |
| position | VARCHAR(255) | NOT NULL    |
| phone    | INT          | NOT NULL    |
| email    | VARCHAR(255) | NOT NULL    |
| address  | VARCHAR(255) | NOT NULL    |
