import mongoose from "mongoose";

export async function connectDatabase() {
    mongoose.connect(process.env.MONGO_URL as string);
    const connection = mongoose.connection;

    connection.on("error", (error) => {
        console.error("Error connecting to database", error);
        process.exit();
    });
    connection.on("connected", () => {
        console.log("Connected to database");
    })
}