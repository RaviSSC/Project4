const Contact = require("../../models/contact");
async function create(req, res) {
  try {
    const contact = await Contact.create(req.body);
    res.json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}