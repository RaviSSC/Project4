//This is for allowing the user to createa a database for professional contacts

const mongoose = require('mongoose');

const contacts = new mongoose.Schema({
name: String,
company: String,
role : String,




})
module.exports = mongoose.model("Contacts", contacts)