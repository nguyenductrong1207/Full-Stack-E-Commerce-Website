const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

// Shema Creating For User Modal
const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    status: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    image: {
        type: String,
    },
    job: {
        type: String,
    },
    dob: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// Creating Endpoint For Registering The User
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });

    if (check) {
        return res.status(400).json({ success: false, errors: "Existing User Found With Same Email Address" })
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        status: "Able",
        cartData: cart,
    });

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
})

// Creating Endpoint For User Login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });

    if (user) {
        const status = user.status;
        if (status === "Disable") {
            res.json({ success: false, error: "Your Account Is Disable" });

        }
        else {
            const passwordCheck = req.body.password === user.password;

            if (passwordCheck) {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const token = jwt.sign(data, 'secret_ecom');
                res.json({ success: true, token });
            }
            else {
                res.json({ success: false, error: "Wrong Password" });
            }
        }
    }
    else {
        res.json({ success: false, error: "Wrong Email" });
    }
});

// Creating API For Getting All Users
app.get('/getAllUsers', async (req, res) => {
    let users = await Users.find({});
    console.log("All Users Fetched");
    res.send(users);
});

// Creating API For Updating User Information
app.put('/updateUser/:email', async (req, res) => {
    const userEmail = req.params.email;
    const updates = {
        name: req.body.name,
        status: req.body.status,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image,
        job: req.body.job,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
    };

    const updatedUser = await Users.findOneAndUpdate(
        { email: userEmail },
        updates,
        { new: true }
    );

    console.log("Updated User");
    res.json({
        success: true,
        user: updatedUser,
    });
});

// Creating API For Getting user By Email
app.get('/getUserByEmail/:email', async (req, res) => {
    const userEmail = req.params.email;
    const user = await Users.findOne({ email: userEmail });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User Not Found',
        });
    }

    console.log("User Fetched By Email");
    res.json({
        success: true,
        user: user,
    });
});

module.exports = app;
