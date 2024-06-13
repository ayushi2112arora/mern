const mongoose = require("mongoose");

// Define the MongoDB connection URI
const uri = "mongodb+srv://ayushi:ayushi18aroraatlascluster.vx35ab4.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=AtlasCluster";

// Define the connection function
const connection = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connection successful");
    } catch (error) {
       console.error("Database connection failed:", error.message);
       process.exit(1); // Exit the process with failure
    }
};

// Export the connection function
module.exports = connection;



// const mongoose = require("mongoose");

// // Load environment variables from .env file
// require("dotenv").config();

// // Retrieve MongoDB connection URI from environment variables
// const uri = process.env.MONGODB_URI;

// // Connect to MongoDB
// const connectToMongoDB = async () => {
//     try {
//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Database connection failed:", error.message);
//         process.exit(1); // Exit the process with failure
//     }
// };

// module.exports = connectToMongoDB;
