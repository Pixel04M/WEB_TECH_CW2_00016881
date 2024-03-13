// express web app instance
const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const web_route = require('./routes/web');

// Make mock database (raw .json file) available globally in app
global.mock_db = path.join(__dirname, './data/mock_db.json');

const app = express();

// Set the view engine for web routes
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Set the directory for views

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

app.use('/', web_route); // web routes

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
