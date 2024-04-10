import {UserInterface} from "../models/models";
import { connectToDb } from "./utils";
import {User} from "../models/models";

export const getUsers = async (query:string) => {
    const regex = new RegExp(query, 'i');
    try {
        await connectToDb();
        const Users: UserInterface[] = await User.find({username: {$regex:regex}});
        return Users;
    }
    catch (error) {
        console.log("Error fetching users");
    } 
    return [];
}