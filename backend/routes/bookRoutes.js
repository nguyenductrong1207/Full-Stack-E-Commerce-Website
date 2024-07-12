// backend/routes/bookRoutes.js
const express = require('express');
const app = express.Router();
const mongoose = require("mongoose");

// Schema For Creating Books
const Book = mongoose.model("Book", {
    id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    salePrice: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    language: {
        type: String,
        require: true,
    },
    publicationDate: {
        type: String,
        require: true,
    },
    numPages: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    publisher: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    avilable: {
        type: Boolean,
        default: true,
    },
});

app.post('/addBook', async (req, res) => {
    let books = await Book.find({});
    let id;

    if (books.length > 0) {
        let lastBookArr = books.slice(-1);
        let lastBook = lastBookArr[0];
        id = lastBook.id + 1;
    } else {
        id = 1;
    }

    const book = new Book({
        id: id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        salePrice: req.body.salePrice,
        quantity: req.body.quantity,
        language: req.body.language,
        publicationDate: req.body.publicationDate,
        numPages: req.body.numPages,
        image: req.body.image,
        author: req.body.author,
        category: req.body.category,
        publisher: req.body.publisher,
    });

    console.log(book);
    await book.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Creating API For Deleting Books
app.post('/deleteBook', async (req, res) => {
    await Book.findOneAndDelete({ id: req.body.id });
    console.log("Deleted");
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Creating API For Getting All Books
app.get('/getAllBooks', async (req, res) => {
    let books = await Book.find({});
    console.log("All Books Fetched");
    res.send(books);
});

// Creating Endpoint For New Collection Data
app.get('/newcollection', async (req, res) => {
    let books = await Book.find({});
    let newcollection = books.slice(1).slice(-8);

    console.log("New Collection Fetched");
    res.send(newcollection);
})

// Creating Endpoint For Popular In Education Section
app.get('/popularInEducation', async (req, res) => {
    let books = await Book.find({ category: "Education" });
    let popularInEducation = books.slice(0, 4);

    console.log("Popular In Education Fetched");
    res.send(popularInEducation);
})

// Creating EndPoint For Related Book Section
app.get('/relatedBook', async (req, res) => {
    let books = await Book.find({ category: "Education" });
    let relatedBook = books.slice(0, 4);

    console.log("Related Book Fetched");
    res.send(relatedBook);
})


module.exports = app;
