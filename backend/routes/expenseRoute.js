const router = require('express').Router();
let Expense = require("../model/expense");


router.get('/',(req, res) => {
    Expense.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/',(req, res) =>
{
    const title = req.body.title;
    const date = req.body.date;
    const amount = req.body.amount;

    const newExpense = new Expense({
        title,
        date,
        amount
    });

    newExpense.save()
    .then(() => res.json('Expense add'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Expense.findById(req.params.id)
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Expense.findByIdAndDelete(req.params.id)
    .then(() => res.json('Expense deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').patch((req, res) => {
    Expense.findById(req.params.id)
    .then(expense => {
        expense.title = req.body.title;
        expense.date = req.body.date
        expense.amount = req.body.amount;

        expense.save()
        .then(() => res.json('Expense updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(409).json('Error ' + err.status));
});

module.exports = router;
