const express = require('express');

const connectDB= require('./DB/connection')
const app = express();
app.use(express.json({ extended: false }));
connectDB();
//const userm= require('./api/user')
//app.use('/api/userModel', require(userm));
const Port = process.env.Port || 3000 ;

app.listen(Port, ()=> {
    console.log("Server start !");
})
 