import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.ranashashank2003;
    const PASSWORD = process.env.eaXaCgsFhD1DIQse;

    const MONGO_URI = `mongodb+srv://ranashashank2003:eaXaCgsFhD1DIQse@cluster0.j3k4yya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;