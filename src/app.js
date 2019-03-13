const fs = require('fs');
const path = require('path');
const express = require('express');
const {accounts, users, writeJSON} = require('./data');
const accountRoutes = require('./routes/accounts');
const serviceRoutes = require('./routes/services');

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

//  render the view that we defined in index.ejs file
app.get('/', (req, res) => res.render('index', {title: 'Account Summary', accounts: accounts}));

/*
app.get('/savings', (req, res) => res.render('account', {account: accounts.savings}));
app.get('/checking', (req, res) => res.render('account', {account: accounts.checking}));
app.get('/credit', (req, res) => res.render('account', {account: accounts.credit}));

app.get('/profile', (req, res) => res.render('profile', {user: users[0]}));
app.get('/transfer', (req, res) => res.render('transfer'));
app.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}));
app.post('/transfer', (req, res) => {
    accounts[req.body.from].balance = accounts[req.body.from].balance - req.body.amount;
    accounts[req.body.to].balance = parseInt(accounts[req.body.to].balance) + parseInt(req.body.amount);

    writeJSON();

    res.render('transfer', {message: "Transfer Completed"});
});
app.post('/payment', (req, res) => {
    accounts.credit.balance = accounts.credit.balance - req.body.amount;
    accounts.credit.available = parseInt(accounts.credit.available) + parseInt(req.body.amount);

    writeJSON();

    res.render('payment', { message: "Payment Successful", account: accounts.credit })
})
*/





app.listen(3000, () => {
    console.log('PS project running on port 3000!');
})