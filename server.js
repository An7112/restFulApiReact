
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let cors = require('cors')
app.use(cors());
let apiRoutes = require("./ApiRoute");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://nodejs2web:123456789An@cluster0.bcukn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true});

var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes);
app.listen(port, function () {
    console.log("Running on port " + port);
});