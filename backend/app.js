const express = require("express");
const nodemon = require("nodemon");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const pinRoute = require("./routes/pins");

dotenv.config();

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB server connected");
})
.catch((err) => console.log("Mongodb server error!"));

app.use("/api/pins", pinRoute);

app.listen(8800, () => {
    console.log("Node server connected");
});



