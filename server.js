////////////////////////////////
// Boilerplate
////////////////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("./db/connection");
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require('./configs/cors.js')
const app = express();
const { PORT=7777 } = process.env;
const NODE_ENV = "development";
const songsRouter = require('./controllers/songs')


////////////////////////////////
// Middleware
////////////////////////////////

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); //logging

////////////////////////////////
// Welcome route, router re-direct, and listen
////////////////////////////////

app.get("/", (req, res) => res.send({
    status: 200,
    msg: "Thank you for connecting to the Tunr API!"
}));


app.use('/songs', songsRouter)

app.listen(PORT, () => console.log(`port running on ${PORT}`));