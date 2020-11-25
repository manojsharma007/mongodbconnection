const express = require('express');

const connectDB= require('./DB/connection')
const app = express();
app.use(express.json({ extended: false }));
connectDB();
app.use('/api/userModel', require('./api/user'));
const Port = process.env.Port || 3000 ;

app.listen(Port, ()=> {
    console.log("Server start !");
})
 