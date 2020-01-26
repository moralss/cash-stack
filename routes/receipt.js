const { saveReceipt } = require("../src/commands/receipt");
const { jwtChecker } = require("../src/auth/jwtHelper");
const { getReceipt } = require("../src/queries/receipt");
const { getUserById } = require("../src/queries/user")
const { sendUsMessage } = require("../src/sendGrid/index");
const { getRubyStage, getTreeData } = require("../src/treeData/index")
const { updateRecipt } = require("../src/updates/receipt");
const { getAllMembers } = require("../src/queries/member");
const receipt = app => {
    app.get("/api/receipt/:id", async (req, res) => {
        const data = await getReceipt(req.params.id)
        res.json(data[0]);
    });

    app.post("/api/receipt", async (req, res) => {
        const { userId } = req.body;
        const members = await getTreeData(userId);
        const data = await getReceipt(userId);
        console.log("data ", data);
        const { email } = await getUserById(req.body.userId);
        await sendUsMessage(
            email,
            `new receipt`,
            req.body.receiptUrl
        );


        if (data.length === 0) {
            await saveReceipt(req.body)
        }


        console.log("members length ", members.length, data);
        if (members.length === 6 && data) {
            await updateRecipt({ stage: 2, active: false, userId: userId })
        }

        var counterStage3 = 0;
        var counterStage4 = 0;

        for (var i in members) {
            const stage3Members = await getAllMembers(members[i].id);
            members[i].downliner = stage3Members;

            if (stage3Members.length == 6) {
                counterStage3++;
            }

            for (var i in stage3Members) {
                const stage4Members = await getAllMembers(stage3Members[i].id);
                stage3Members[i].downliner = stage4Members;
                if (stage4Members.length == 6) {
                    counterStage4++;
                }
            }
        }

        if (counterStage3 == 6) {
            await updateRecipt({ stage: 3, active: false, userId: userId })
        }

        if (counterStage4 == 6) {
            await updateRecipt({ stage: 4, active: false, userId: userId })
        }



        res.send(200)
    })

    app.get("/api/rugby-stage/:id", async (req, res) => {
        try {
            const stage = await getRubyStage(req.params.id);
            res.send(stage);
        } catch (e) {
            console.log(e)
        }
    })
}


module.exports = {
    receipt,
};                                                                                                         