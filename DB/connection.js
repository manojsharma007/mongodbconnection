const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.b3lzb.mongodb.net/testManoj?retryWrites=true&w=majority";
module.exports = function () { 
 mongoose.connect( URI, { useNewUrlParser: true , useUnifiedTopology: true }  )
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));
};