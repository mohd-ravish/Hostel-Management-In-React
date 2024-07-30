const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const config = require("./config/config");
const authRoutes = require("./routes/authRoutes");
const registerRoutes = require("./routes/registerRoutes");
const chatsRoutes = require("./routes/chatsRoutes");

const app = express();

// app.use(cors({
//   origin: ["http://localhost:3000"],
//   methods: ["POST", "GET"],
//   credentials: true
// }));

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/register", registerRoutes);
app.use("/chats", chatsRoutes);

app.listen(config.PORT, () => console.log(`SERVER IS RUNNING ON PORT ${config.PORT}`));