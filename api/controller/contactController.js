const Contact = require('../model/contactModel');

//getAllContact
const getAllContact = (req, res, next) => {
    Contact.find()
        .then(data => {
            res.status(200).json({
                message:'All Contact Grabed Successfully!',
                contacts: data
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error Occured'
            })
        })
}

//postContact
const postContact = (req, res, next) => {
    let contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    contact.save()
        .then(data => {
            res.status(201).json({
                message: 'Contact Saved Successfully!',
                contact: data
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error Occured'
            });
        })
}

//getSingleContact
const getSingleContact = (req, res, next) => {
    let id = req.params.id;
    Contact.findById({_id : id})
        .then(result => {
            res.status(200).json({
                message: 'Single Contact Grabed Successfully',
                contact: result
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Errroe Occured'
            })            
        })
}

//updateContact
const updateContact = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = {};

    for(prop in req.body){
        // console.log(prop);
        updatedContact[prop] = req.body[prop] 
    }

    Contact.findByIdAndUpdate(id, {$set: updatedContact})
        .then(data => {
            
            res.status(200).json({
                message: "Contact Updated",
                contact: data
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Errroe Occured'
            })            
        })
}

//deleteContact
const deleteContact = (req, res, next) => {
    let id = req.params.id;
    Contact.findByIdAndRemove({_id : id})
        .then(
            res.status(200).json({
                message: 'Contact Deleted Successfully!'
            })
        )
        .catch(error => {
            console.log(error);

        })
}


module.exports = {
    getAllContact,
    postContact,
    getSingleContact,
    updateContact,
    deleteContact
}