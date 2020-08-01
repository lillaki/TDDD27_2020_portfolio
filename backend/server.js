var express = require('express');
var cors = require('cors');
//var admin = require("firebase-admin");
//var serviceAccount = require("./serviceAccount.json");
var blogAPIRouter = require("./routes/blogAPI"); // Require the route


//admin.initializeApp({
//  credential: admin.credential.cert(serviceAccount),
//  databaseURL: "https://portfolio-81135.firebaseio.com"
//});

//var database = admin.database();

var app = express();
app.use(cors());
app.use(express.json());
app.use("/blogAPI", blogAPIRouter); // Insert the new Route


app.listen(() => {
    console.log("Server is working"); 
}); 


module.exports = app;
