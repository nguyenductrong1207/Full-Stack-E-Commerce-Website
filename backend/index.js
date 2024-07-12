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
const url = `http://localhost:${port}`;

// BaseURL Backend Server
// const url = "https://backend-e-commerce-website-using-mern.onrender.com";

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb+srv://ductrong12072002:Ductrong12072002.@cluster0.wt3rt3d.mongodb.net/FullStackECommerceWebsite");

// Routes Connection
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const cartRoutes = require('./routes/cartRoutes');
const publisherRoutes = require('./routes/publisherRoutes')

app.use('', userRoutes);
app.use('', bookRoutes);
app.use('', cartRoutes);
app.use('', publisherRoutes);

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

// Running
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running On Port " + port);
    } else {
        console.log("Error: " + error);
    }
}); 