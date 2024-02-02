const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cors())
app.use(express.json())

require("dotenv").config()

// Port
const PORT = process.env.PORT | 4500

// Connection
// For MongoCompass : mongodb://127.0.0.1:27017/usermanagement
// For MongoAtlas : mongodb+srv://<username>:<password>@cluster0.bwjwxak.mongodb.net/<databasename>?retryWrites=true&w=majority

const DB = process.env.MONGODB_URI;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((err) => console.log(err))

// Schema
const loginSchemaData = new mongoose.Schema({
    email: String,
    password: String,
}, {
    timeStamps: true
});

const registerSchemaData = new mongoose.Schema({
    name: String,
    dob: String,
    father: String,
    phone: String,
    gender: String,
    email: String,
    id: String,
    enrollno: String,
    faculty: String,
    department: String,
    issuedate: String,
    expirydate: String,
    addresstype: String,
    nationality: String,
    state: String,
    district: String,
    blockno: String,
    wardno: String,
}, {
    timeStamps: true
});

const chatsSchemaData = new mongoose.Schema({
    chat: String,
}, {
    timeStamps: true
});

// Model
const loginUserModel = mongoose.model("students", loginSchemaData);
const registerUserModel = mongoose.model("details", registerSchemaData);
const chatsUserModel = mongoose.model("chats", chatsSchemaData);

// Signup
app.post("/signup", async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    try {
        // Check if the email already exists in the database
        const existingUser = await loginUserModel.findOne({ email });

        if (existingUser) {
            // Email already in use, send a response indicating the conflict
            console.log("Email already in use");
            return res.json("Email already in use");
        }

        if (password !== confirmPassword) {
            console.log("Password and confirm password do not match");
            return res.json("Password and confirm password do not match");
        }

        // If the email is not in use, create the new user
        await loginUserModel.create({ email, password })
            .then((data) => {
                console.log("User registered");
                return res.json("User registered");
            })
    } catch (err) {
        console.error(err);
        return res.json("Internal Server Error");
    }
});

// Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user with the provided email exists
        const user = await loginUserModel.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.json("User not found");
        }

        // Compare the provided password with the stored hashed password
        // const passwordMatch = bcrypt.compare(password, user.password);
        if (password != user.password) {
            console.log("Incorrect password");
            return res.json("Incorrect password");
        }

        // If the password is correct, generate a JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

        // Send the token in the response
        console.log("Successfully loggedIn");
        res.json({ token, userId: user._id });
    } catch (err) {
        console.error(err);
        res.json("Internal Server Error");
    }
});

// Register
app.post("/register", async (req, res) => {
    try {
        await registerUserModel.create(req.body)
            .then((data) => {
                console.log("Details submitted");
                return res.json("Details submitted");
            })
    } catch (err) {
        console.error(err);
        res.json("Internal Server Error");
    }
})

// Create Chats
app.post("/chats", async (req, res) => {
    try {
        await chatsUserModel.create(req.body)
            .then((data) => {
                console.log("Message sent");
                return res.json("Message sent");
            })
    } catch (err) {
        console.error(err);
        res.json("Internal Server Error");
    }
})

// Read Chats
app.get("/readChats", async (req, res) => {
    try {
        // Fetch chat data from the database
        const chats = await chatsUserModel.find({}).sort({ _id: -1 });
        res.json(chats);
    } catch (err) {
        console.error(err);
        res.json("Internal Server Error");
    }
});

// Read
// app.get("/get", async(req, res) => {
//     const data = await loginUserModel.find({})
//     res.send(data)
// })

//Update
// app.put("/update", async(req, res)=>{
//     const { _id, ...data} = req.body
//     await loginUserModel.findByIdAndUpdate({_id : _id }, data)
//         .then(() => {
//             console.log("Data Updated!")
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// Delete
// app.delete("/delete/:id", async(req, res) => {
//     const {id} = req.params
//     await loginUserModel.findByIdAndDelete(id)
//     .then(() => {
//         console.log("Data Deleted!")
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// Server
app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`))
