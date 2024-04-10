import {UserInterface} from "../models/models";
import { connectToDb } from "./utils";
import {User} from "../models/models";

export const getUsers = async (query:string, page:string) => {
    const regex = new RegExp(query, 'i');
    const ITEMS_IN_PAGE = 10; 
    const intPage = Number(page);
    try {
        await connectToDb();
        const Users: UserInterface[] = await User.find({ username: { $regex: regex } }).limit(ITEMS_IN_PAGE).skip(ITEMS_IN_PAGE * (intPage - 1));
        return Users;
    }
    catch (error) {
        console.log("Error fetching users");
    } 
    return [];
}


export const totalUsers = async  () => {
    try {
        await connectToDb();
        const Users: UserInterface[] = await User.find();
        return Users.length;
    }
    catch (error) {
        console.log("Error fetching users");
    } 
    return 0;
}