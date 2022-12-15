const router = require('express').Router();
let User = require("../model/user");


router.get('/',(req, res) => {
    
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/',(req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;
    const fName = req.body.fName
    const lName = req.body.lName
    const mobileNumber = req.body.mobileNumber
    const dateOfBirth = req.body.dateOfBirth

    console.log("Post Request body", req.body);
    const newUser = new User({
        username,
        password,
        fName,
        lName,
        mobileNumber,
        dateOfBirth
    });

    newUser.save()
    .then(() => res.json('User add'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').patch((req, res) => {
    User.findById(req.params.id)
    .then(users => {
        // if(users.caption == req.body.caption ){
        //     let err = new Error("Duplicate username");
        //     err.status = 409;
        //     throw err;
        // }
        // users.password = req.body.password;
        users.username = req.body.username;
        users.password = req.body.password;
        users.fName = req.body.fName;
        users.lName = req.body.lName;
        users.mobileNumber = req.body.mobileNumber;
        users.dateOfBirth = req.body.dateOfBirth;
        users.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(409).json('Error ' + err.status));
});

module.exports = router;
