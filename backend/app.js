const express = require("express");
const nodemon = require("nodemon");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();


const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

dotenv.config();

app.use(express.json());


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
app.use("/api/users", userRoute);

app.listen(8800, () => {
    console.log("Node server connected");
});
