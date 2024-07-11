const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { log, error } = require("console");

// BaseURL
// const url = `http://localhost:${port}`;

// BaseURL Backend Server
const url = "https://backend-e-commerce-website-using-mern.onrender.com";

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb+srv://ductrong12072002:Ductrong12072002.@cluster0.wt3rt3d.mongodb.net/FullStackECommerceWebsite");

// API Creation 
app.get("/", (req, res) => {
    res.send("Express App Is Running");
});

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint For Images
app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('book'), (req, res) => {
    res.json({
        success: 1,
        imageURL: `${url}/images/${req.file.filename}`
    });
});

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

    image: {
        type: String,
        require: true,
    },

    category: {
        type: String,
        require: true,
    },

    newPrice: {
        type: Number,
        require: true,
    },

    oldPrice: {
        type: Number,
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
        image: req.body.image,
        category: req.body.category,
        newPrice: req.body.newPrice,
        oldPrice: req.body.oldPrice,
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

// Shema Creating For User Modal
const Users = mongoose.model('Users', {
    name: {
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

// Creaign Endpoint For User Login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });

    if (user) {
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
    else {
        res.json({ success: false, error: "Wrong Email" });
    }
})

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

// Running
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running On Port " + port);
    } else {
        console.log("Error: " + error);
    }
}); 