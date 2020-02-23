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
const sendGrid = require("./routes/sendgrid");
const receipt = require("./routes/receipt");
const members = require("./routes/members");
const roles = require("./routes/roles");
const accountInfo = require("./routes/account");
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var port = process.env.PORT || 3000;

// const imageUpload = require("./routes/image-upload");

app.use(bodyParser.json());
app.use(cors());

accountInfo.accountInfo(app);
sendGrid.sendEmail(app);
members.memberBoard(app);
authRoutes.authRoutes(app);
receipt.receipt(app);
roles.roles(app);
dashboard.dashboard(app);
validateEmail.validateEmail(app);
// memberBoard.memberBoard(app);
activeAccount.activeAccount(app)
// imageUpload.uploader(app);  
// imageUpload.uploaderMulter(app);
// imageUpload.sendImage(app);

app.get("/api", (req, res) => res.send("Hello World!"));

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});

if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  })
}

const PORT = process.env.PORT || 3001


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));