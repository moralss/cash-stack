const {
  jwtChecker
} = require("../src/auth/jwtHelper");
const {
  getAllMembers
} = require("../src/queries/member");

const dashboard = app => {
  app.get("/dashboard", jwtChecker, async (req, res) => {
    try {
      return res.status(200).json("hello");
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  });
};


const memberBoard = app => {
  app.get("/api/AllMembers", async (req, res) => {
    const {
      _userId
    } = req.query;
    try {
      const members = await getAllMembers(_userId);

      for (var i in members) {
        const nextMembers = await getAllMembers(members[i].id);
        members[i].total = nextMembers.length;
      }
      return res.status(200).json({
        members: members
      });

    } catch (e) {
      console.log(e);
      return res.status(200).json();
    }
  });
}




module.exports = {
  dashboard,
  memberBoard
};