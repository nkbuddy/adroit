import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let users

export default class UsersDAO{
    static async injectDB(conn){
        if(users){
            return
        }try{
            users = await conn.db(process.env.USERS_NS).collection("users")
        }catch(e){
            console.error(
                `Unable to establish a collection handle in restaurantsDAO: ${e}`,
            )
        }
    }

    static async getRestaurants({
        
    })
}