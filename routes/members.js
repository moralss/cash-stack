const { getAllMembers } = require("../src/queries/member");
const { getTreeData, getRubyStage } = require("../src/treeData/index");
const { saveMember } = require("../src/commands/member");
const {
    compareRefNumber,
} = require("../src/queries/user");
const { updateStage } = require('../src/updates/receipt');

const memberBoard = app => {
    app.get("/api/AllMembers", async (req, res) => {
        const {
            _userId
        } = req.query;
        try {
            const members = await getTreeData(_userId)
            return res.status(200).json({
                members
            });

        } catch (e) {
            console.log(e);
            return res.status(200).json();
        }
    });

    app.post("/api/members", async (req, res) => {
        const {
            pioneerRefs,
            userId
        } = req.body;
        try {
            if (pioneerRefs) {
                const value = await compareRefNumber(pioneerRefs.trim())
                const members = await getAllMembers(value.id);
                if (members.length == 6) {
                    const id = value.id
                    updateStage({ stage: 2, userId: id })

                }


                if (value && members.length !== 6) {
                    const {
                        id: pioneerId,
                        ref_number
                    } = value;

                    const savedId = await saveMember({
                        pioneerId,
                        userId,
                        ref_number
                    })
                }

                return res.status(200).json({
                });
            }

        } catch (e) {
            console.log(e);
            return res.status(200).json();
        }
    });

    app.get("/api/rubystage", async (req, res) => {
        const {
            _userId
        } = req.query;

        try {
            const stages = await getRubyStage(_userId)
            return res.status(200).json({
                ...stages
            });

        } catch (e) {
            console.log(e);
            return res.status(200).json();
        }
    });
}

module.exports = {
    memberBoard,
};