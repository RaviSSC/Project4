const { token } = require("morgan");
// const contact = require("../../models/contact");
const Contact = require("../../models/contact");


async function create(req, res) {
  try {
    console.log("Create Function")
    const contact = await Contact.create(req.body);
    console.log(req.body)
    console.log(contact)
    res.status(200).json()
 
  } catch (error) {
    res.status(400).json(error);
  }
}

// // // Update Detail by Id
async function updateContact(req, res) {
	try {
    await contact.findByIdAndUpdate(req.params.id, req.body)
		res.status(200).json("Uodated");
  } catch(error) {
			res.status(422).send(error);
		};
}

async function getContact(req, res) {
  try {
    const result = await Contact.find ({Contact })
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function deleteContact(req, res){

  const result = await Contact.findByIdAndDelete(req.params.id)
  console.log()
  res.status(200).json("Message Deleted")
}

//getAllUsers
async function getAllContact (req, res){
  try {
    const result = await Contact.find({})
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}
  

  module.exports ={create, getAllContact, deleteContact, updateContact}
