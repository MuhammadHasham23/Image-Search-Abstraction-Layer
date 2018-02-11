const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/Time.js");
mongoose.connect("mongodb://admin:admin@ds227858.mlab.com:27858/imageabstract")

const app = express();
app.use(bodyParser.json());
require('./routes/basicRoutes')(app);

app.listen(process.env.PORT || 5000,()=>{
  console.log("Node Server Is Up And Running");
});
