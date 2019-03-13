const express = require('express');
const {accounts, users, writeJSON}  = require('../data');

const router = express.Router();

/*
    update the routes to be part of the router by replacing "app.get" with "router.get"
*/
router.get('/savings', (req, res) => res.render('account', {account: accounts.savings}));
router.get('/checking', (req, res) => res.render('account', {account: accounts.checking}));
router.get('/credit', (req, res) => res.render('account', {account: accounts.credit}));

module.exports = router;