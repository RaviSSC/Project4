// routes/api/contact.js

const express = require('express');
const router = express.Router();
const contactsCtrl = require("../../controllers/api/contacts");
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/contact
router.post('/', contactsCtrl.create);
// POST /api/users/contact
router.post('/NewContact', contactsCtrl.login);

module.exports = router;
