const mongoose = require('mongoose');
// const connectionString = 'mongodb://localhost/tasks_api';
mongoose.connect('mongodb://localhost/tasks_api', { useNewUrlParser: true });

const SubRestfulTaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: {
        type: String,
        default: ''
    },
}, { timestamps: true });


const RestfulTaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: [SubRestfulTaskSchema],
    description: {
        type: String,
        default: ''
    },

}, { timestamps: true });

var Inner = mongoose.model('Inner', SubRestfulTaskSchema);
var Outer = mongoose.model('Outer', RestfulTaskSchema);
module.exports = { Inner: Inner, Outer: Outer };