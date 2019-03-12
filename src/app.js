const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

//  using app to configure the views directory as well as path to find views directory
app.set('views', path.join(__dirname, 'views'));

//  set the configuration property for view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

//  render the view that we defined in index.ejs file

app.get('/', (req, res) => res.render('index', {title: 'Index'}));

app.listen(3000, () => {
    console.log('PS project running on port 3000!');
})