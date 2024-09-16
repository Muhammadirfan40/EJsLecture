// Import the express module
import express from "express"
import path from "path";
import ejs from "ejs"
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import Category from "./model/Category.js"
import bodyParser from "body-parser";

// Create an Express application
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a port to listen on
const PORT = process.env.PORT || 3002;



// Set up a simple route
app.get('/', async (req, res) => {

    const cats = await Category.find();
    console.log(cats);
    res.render("index", { cats });

});

// Set up a simple route
app.get('/about', async (req, res) => {

    const cats = await Category.find();
    res.render("about", { cats });

});

// Set up a simple route
app.get('/login', async (req, res) => {


    res.render("login");

});


// Set up a simple route
app.post('/login', async (req, res) => {

    console.log(req.body);


});



// Start the server
// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/pakzondb")
    .then(() => {
        app.listen(PORT, () => console.log(`Server & DB is up on port ${PORT}...`));
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });