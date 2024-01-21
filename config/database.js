const mongoose = require("mongoose")

module.exports = {
    databaseConnection: async (url) => {
        try {
            await mongoose.connect(url);
            console.log("Successfully connect to MongoDB.");
        } catch (error) {
            console.error("Connection error", err);
            process.exit();
        }
    }
}