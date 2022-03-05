const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Userdb'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
console.log('Connected...')
})

const PORT = 5000

app.use(express.json())

const usersRoutes = require('./routes/users.js')
app.use('/users',usersRoutes)

app.get('/',(req,res) =>{
    console.log('TEST')
    res.send('Hello from homepage')
})

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))