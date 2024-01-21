const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    gender: {
        type: String,
        enum: ["MAN", "WOMAN"]
    },
    DateOfBirth: Date,
});
try {
    const User = mongoose.model("User", schema);
    module.exports = User;
} catch (error) {
    console.log(error);
}