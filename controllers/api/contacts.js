const { token } = require("morgan");
const Contact = require("../../models/contact");


async function create(req, res) {
  try {
    console.log("Create Function")
    const contact = await Contact.create(req.body);
    console.log(req.body)
    console.log(contact)
    res.status(200).json()
    res.json(token)
  } catch (error) {
    res.status(400).json(error);
  }
}
module.exports ={create}


//jhave to pass token