const mongoose = require('mongoose');

const URI = "";
module.exports = function () { 
 mongoose.connect( URI, { useNewUrlParser: true , useUnifiedTopology: true }  )
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));
};