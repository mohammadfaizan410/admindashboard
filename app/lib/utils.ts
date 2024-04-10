import mongoose from "mongoose";
const DB_STRING : string = process.env.DB_STRING ? process.env.DB_STRING : "";
export const connectToDb = async () => {
    const connection = {
        isConnected: 0,
    }
    try {
        if(connection.isConnected==1){ console.log("already connected") 
            return}
        const db = await mongoose.connect(DB_STRING);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to the database");
    }
    catch (error) {
        console.log("Error connecting to the database");
    }
};
