const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const authRoutes = require(".//routes/auth");
const dashboard = require('./routes/dashboard')
const memberBoard = require("./routes/dashboard");
const validateEmail = require('./helperRoutes/index');
const activeAccount = require('./routes/payfast');

app.use(bodyParser.json());
app.use(cors());

authRoutes.authRoutes(app);
dashboard.dashboard(app);
validateEmail.validateEmail(app);
memberBoard.memberBoard(app);
activeAccount.activeAccount(app)

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));