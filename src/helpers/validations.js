const {genSaltSync, hashSync, compare} = require('bcrypt');
const {jwt} = require('../config');

const encryptPass = (password) => hashSync(password, genSaltSync(10));

const validateHash = async(password, hash) =>  await compare(password, hash);

module.exports = {
    encryptPass,
    validateHash,
}