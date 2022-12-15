const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    user_id : {
        type: String,
        required: true,
    },
    title : {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    date : {
        type: Date,
        required: true
    },
    amount : {
        type: Number,
        required: true,
    }
}, 
{
    timestamps: true,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;