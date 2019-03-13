const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

//  using app to configure the views directory as well as path to find views directory
app.set('views', path.join(__dirname, 'views'));

//  set the configuration property for view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

/*
    With the use function add the "express.urlencoded" middleware to app.

    Set the extended option to true.
*/
app.use(express.urlencoded({extended: true}));



const accountData = fs.readFileSync('src/json/accounts.json', {encoding: 'utf-8'});
const accounts = JSON.parse(accountData);


const userData = fs.readFileSync('src/json/users.json', {encoding: 'utf-8'});
const users = JSON.parse(userData);

//  render the view that we defined in index.ejs file
app.get('/', (req, res) => res.render('index', {title: 'Account Summary', accounts: accounts}));

app.get('/savings', (req, res) => res.render('account', {account: accounts.savings}));
app.get('/checking', (req, res) => res.render('account', {account: accounts.checking}));
app.get('/credit', (req, res) => res.render('account', {account: accounts.credit}));
app.get('/profile', (req, res) => res.render('profile', {user: users[0]}));
app.get('/transfer', (req, res) => res.render('transfer'));
app.post('/transfer', (req, res) => {
    accounts[req.body.from].balance = accounts[req.body.from].balance - req.body.amount;
    accounts[req.body.to].balance = parseInt(accounts[req.body.to].balance) + parseInt(req.body.amount);

    const accountsJSON = JSON.stringify(accounts, null, 4);
    fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, 'utf8');
    res.render('transfer', {message: "Transfer Completed"});
})





app.listen(3000, () => {
    console.log('PS project running on port 3000!');
})