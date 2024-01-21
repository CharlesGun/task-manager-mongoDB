const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: String,
    description: String,
    urgency: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH"]
    },
    dueDate: Date,
    completed: {type: Boolean, default: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});
try {
    const Task = mongoose.model("Task", schema);
    module.exports = Task;
} catch (error) {
    console.log(error);
}