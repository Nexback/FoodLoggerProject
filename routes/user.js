const Users = require('../models/Users');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const e = require('express');
const { reset } = require('nodemon');
var path = require('path');

module.exports = app => {
    mongoose.set('useFindAndModify', false);

}