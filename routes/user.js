const user = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const e = require('express');
const { reset } = require('nodemon');
var path = require('path');
const Users = require('../models/Users');

module.exports = app => {
    mongoose.set('useFindAndModify', false);

    app.post('/signup', async(req, res) => {
        try{
            const email = req.body.email;
            const password = req.body.password;
            const fName = req.body.firstName;
            const lName = req.body.lastName;
            const birthday = req.body.birthday;

            Users.findOne({email: email}, async function(err, user){
                if(!user){
                    const newUser = new Users();
                    newUser.firstName = fName;
                    newUser.lastName = lName;
                    newUser.email = email;
                    newUser.birthday = birthday;
                    newUser.password = bcrypt.hashSync(password, 12);

                    const user = await newUser.save();

                    res.send(200).send(user);
                }
                else{
                    res.send("This user already exists.");
                }
            })
        }
        catch (err){
            console.log("Pain incoming.");
            res.sendStatus(400);
        }
    })

}