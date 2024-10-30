import {Request, Response} from "express"
import prisma from "../config/db.config.js"

interface GroupUserType {
    name: string,
    group_id: string
}
class ChatGroupUserContoller {
    static async index(req: Request, res: Response){
        try {
            const {group_id} = req.query
            const users = await prisma.groupUsers.findMany({
                where: {
                    group_id: group_id as string
                }
            })
            return res.json({message: "data fetched successfully", data:users})
        } catch (error) {
            
        }
    }
    static async store(req: Request, res: Response){
        try {
           const body: GroupUserType = req.body
            await prisma.groupUsers.create({
                data: body
            })
            return res.json({message: "data fetched successfully"})
        } catch (error) {
            
        }
    }
}

export default ChatGroupUserContoller