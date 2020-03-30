const { saveRole } = require("../src/commands/roles");
const { getRole } = require("../src/queries/roles")
const { compareRefNumber } = require("../src/queries/user");

const roles = app => {
    app.post("/api/role", async (req, res) => {
        // const id = await compareRefNumber(req.body.role);
        // if (value) {
        const id = await saveRole(req.body);
        if (id) {
            res.send(req.body.role);
            // }
        }
        else {
            res.send({ user_role: null })
        }

        console.log(req.body);
    });


    app.get("/api/role", async (req, res) => {
        const {
            _userId
        } = req.query;

        try {
            const role = await getRole(_userId);
            if (role) {
                res.send(role);
            }
            else {
                res.send({ user_role: null })
            }
        } catch (e) {
            console.log(e)
        }
        // console.log("role", role)
    });

};



module.exports = {
    roles,

};