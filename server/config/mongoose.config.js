const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/load_db",{useNewUrlParser:true,useUnifiedTopology: true})
    .then(() => console.log("Connected To Load Database"))
    .catch(err => console.log("Cant Connect To Load Database", err))