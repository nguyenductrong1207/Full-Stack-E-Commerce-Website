const express = require('express');
const app = express.Router();
const mongoose = require("mongoose");

// Schema For Creating Publishers
const Publisher = mongoose.model("Publisher", {
    id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
});

// Creating API For Adding Publisher
app.post('/addPublisher', async (req, res) => {
    let publishers = await Publisher.find({});
    let id;

    if (publishers.length > 0) {
        let lastPublisherArr = publishers.slice(-1);
        let lastPublisher = lastPublisherArr[0];
        id = lastPublisher.id + 1;
    } else {
        id = 1;
    }

    const publisher = new Publisher({
        id: id,
        name: req.body.name,
        country: req.body.country,
        address: req.body.address,
        email: req.body.email,
    });

    console.log(publisher);
    await publisher.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Creating API For Deleting Publisher
app.post('/deletePublisher', async (req, res) => {
    await Publisher.findOneAndDelete({ id: req.body.id });
    console.log("Deleted Publisher");
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Creating API For Getting All Publisher
app.get('/getAllPublishers', async (req, res) => {
    let publishers = await Publisher.find({});
    console.log("All Publishers Fetched");
    res.send(publishers);
});

// Creating API For Updating Publisher Information
app.put('/updatePublisher/:id', async (req, res) => {
    const publisherId = req.params.id;
    const updates = {
        name: req.body.name,
        country: req.body.country,
        address: req.body.address,
        email: req.body.email,
    };

    const updatedPublisher = await Publisher.findOneAndUpdate(
        { id: publisherId },
        updates,
        { new: true }
    );

    console.log("Updated Publisher");
    res.json({
        success: true,
        publisher: updatedPublisher,
    });
});

module.exports = app;