const express = require('express');
const {accounts, users, writeJSON}  = require('../data');

const router = express.Router();

router.get('/profile', (req, res) => res.render('profile', {user: users[0]}));
router.get('/transfer', (req, res) => res.render('transfer'));
router.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}));
router.post('/transfer', (req, res) => {
    accounts[req.body.from].balance = accounts[req.body.from].balance - req.body.amount;
    accounts[req.body.to].balance = parseInt(accounts[req.body.to].balance) + parseInt(req.body.amount);

    writeJSON();

    res.render('transfer', {message: "Transfer Completed"});
});
router.post('/payment', (req, res) => {
    accounts.credit.balance = accounts.credit.balance - req.body.amount;
    accounts.credit.available = parseInt(accounts.credit.available) + parseInt(req.body.amount);

    writeJSON();

    res.render('payment', { message: "Payment Successful", account: accounts.credit })
});

module.exports = router;