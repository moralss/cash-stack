const {
    jwtChecker
} = require("../src/auth/jwtHelper");
const { saveAccountInfo } = require("../src/commands/account");
const { getAccountInfo } = require("../src/queries/account");
const { updateAccountInfo } = require("../src/updates/account");



const accountInfo = app => {
    app.post("/api/account-info", async (req, res) => {
        try {
            const { accountName, accountNumber } = req.body;
            const id = await saveAccountInfo(req.body);
            const accountInfo = await getAccountInfo(req.body.userId);
            return res.status(200).json(accountInfo[0]);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    });

    app.put("/api/account-info", async (req, res) => {
        try {
            const { accountName, accountNumber } = req.body;
            const id = await updateAccountInfo(req.body);
            const accountInfo = await getAccountInfo(req.body.userId);
            return res.status(200).json(accountInfo[0]);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    });

    app.get("/api/account-info/:userId", async (req, res) => {
        try {
            const { userId } = req.params;
            const accountInfo = await getAccountInfo(userId);
            return res.status(200).json(accountInfo[0]);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    });
};


module.exports = {
    accountInfo,
};