const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv/config")
const {DATABASE_CONFIG, SERVER_CONFIG} = require("./config")
const authRoute = require("./src/modules/auth/routes")

const PORT =process.env.PORT;
const app = express();

app.use(cors())
app.use(express.json())
app.use(authRoute)

app.get("/", (req, res) => {
    res.send("welcome to jwt-node Project");
  });

app.listen(PORT, async () => {
    console.log(`listening on ${PORT} for requests`);
    mongoose.connect(DATABASE_CONFIG.url).then(() => {
      console.log(`Connected to Mongodb database : ${DATABASE_CONFIG.dbname}`);
    });
  });