// backend/routes/cartRoutes.js
const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

// User Schema
const Users = mongoose.model('Users');

// Creating Middelware To Fetch User
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ errors: "Please Authenticate Using Valid Token" });
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: "Please Authenticate Using A Valid Token" });
        }
    }
}

// Creating Endpoint For Adding Books In Cart Data
app.post('/addToCart', fetchUser, async (req, res) => {
    console.log("Added", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });

    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Added");
});

// Creating Endpoint To Delete Book From Cart Data
app.post('/deleteFromCart', fetchUser, async (req, res) => {
    console.log("Deleted", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });

    if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1;
    }
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Deleted");
});

// Creating Endpoint To Get Cart Data
app.post('/getCart', fetchUser, async (req, res) => {
    console.log("Get Cart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
});

module.exports = app;
