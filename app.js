const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const authRoutes = require(".//routes/auth");
const dashboard = require('./routes/dashboard')
const memberBoard = require("./routes/dashboard");
const validateEmail = require('./helperRoutes/index');
const activeAccount = require('./routes/payfast');
const path = require('path');


app.use(bodyParser.json());
app.use(cors());

authRoutes.authRoutes(app);
dashboard.dashboard(app);
validateEmail.validateEmail(app);
memberBoard.memberBoard(app);
activeAccount.activeAccount(app)

app.get("/", (req, res) => res.send("Hello World!"));



if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  })
}

const PORT = process.env.PORT || 3001


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));