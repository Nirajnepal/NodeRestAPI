const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router =  require("./app/routes/routes")

//Initializes express
const app = express();

//Establish connection to Mongoose server 
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/products", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)



app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});

let PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});







