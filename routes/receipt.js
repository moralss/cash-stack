const { saveReceipt } = require("../src/commands/receipt");
const { jwtChecker } = require("../src/auth/jwtHelper");
const { getReceipt } = require("../src/queries/receipt");
const { getUserById } = require("../src/queries/user")
const { sendUsMessage } = require("../src/sendGrid/index");

const receipt = app => {
    app.get("/api/receipt/:id", async (req, res) => {
        const data = await getReceipt(req.params.id)
        res.json(data[0]);
    });

    app.post("/api/receipt", async (req, res) => {
        saveReceipt(req.body)
        const { email } = await getUserById(req.body.userId);
        const image = ""
        console.log("email ", email)
        sendUsMessage(
            email,
            `new receipt`,
            req.body.receiptUrl
        );

        res.send(200)
    })

}


module.exports = {
    receipt,
};