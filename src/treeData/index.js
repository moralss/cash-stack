const {
    getAllMembers
} = require("../queries/member");
const { getReceipt } = require("../queries/receipt");

const getTreeData = async userId => {


    try {
        console.log("id passed", userId)
        const receiptDetial = await getReceipt(userId);
        const members = await getAllMembers(userId);
        console.log(members)
        // if(members.length > 6){
        // }

        for (var i in members) {
            console.log("stage 1", members[i].memeber_id)
            if (receiptDetial[0].stage > 1 && receiptDetial[0].active !== false) {
                const stage2Members = await getAllMembers(members[i].memeber_id);
                members[i].downliner = stage2Members;
                if (receiptDetial[0].stage > 2) {
                    // console.log("stage 2", stage2Members)
                    for (var i in stage2Members) {
                        const stage3Members = await getAllMembers(stage2Members[i].memeber_id);
                        stage2Members[i].downliner = stage3Members;
                        // console.log("stage 3 members ", stage3Members);
                        if (receiptDetial[0].stage > 3) {
                            for (var i in stage3Members) {
                                const stage4Members = await getAllMembers(stage3Members[i].memeber_id);
                                stage3Members[i].downliner = stage4Members;

                                for (var i in stage4Members) {
                                    const stage5Members = await getAllMembers(stage4Members[i].memeber_id);
                                    stage4Members[i].downliner = stage5Members;

                                    for (var i in stage5Members) {
                                        const stage6Members = await getAllMembers(stage5Members[i].memeber_id);
                                        stage5Members[i].downliner = stage6Members;
                                    }
                                }

                            }

                        }
                    }
                }
            }
        }

        return members;

    } catch (e) {
        console.log(e);
    }
}

const getRubyStage = async userId => {

    try {
        const members = await getAllMembers(userId);
        if (members.length == 6) {
            return { rubyStage: 2 };
        }

        for (var i in members) {
            const stage2Members = await getAllMembers(members[i].id);
            if (stage2Members.length === 6) {
                return { rubyStage: 3 }
            }
        }
        for (var i in stage2Members) {
            const stage3Members = await getAllMembers(members[i].id);
            if (stage3Members.length === 6) {
                return { rubyStage: 4 }
            }
        }

    } catch (e) {


        console.log(e);
    }
}





module.exports = {
    getTreeData,
    getRubyStage
};