import prisma from "../config/db.config.js";
class ChatGroupUserContoller {
    static async index(req, res) {
        try {
            const { group_id } = req.query;
            const users = await prisma.groupUsers.findMany({
                where: {
                    group_id: group_id
                }
            });
            return res.json({ message: "data fetched successfully", data: users });
        }
        catch (error) {
        }
    }
    static async store(req, res) {
        try {
            const body = req.body;
            await prisma.groupUsers.create({
                data: body
            });
            return res.json({ message: "data fetched successfully" });
        }
        catch (error) {
        }
    }
}
export default ChatGroupUserContoller;
