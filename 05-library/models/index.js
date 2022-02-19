require('dotenv').config();

const bookshelf = require('./bookshelf');

const modules = {};
modules.Titles = require('./titles');
modules.Authors = require('./authors');
modules.Users = require('./users');

module.exports =  {
    bookshelf,
    ...modules
}