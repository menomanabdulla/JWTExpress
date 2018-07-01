const User = require('../model/userModel');
const bcrypt = require('bcrypt');

//singUpUser
const singUpUser = (req, res, next) => {
    User.find({email: req.body.email})
        .then(result => {
            if(result.length > 0){
                res.json({
                    message: 'signup failed email already exists'
                })
            }else{
                bcrypt.hash(req.body.password,  10, (err, hash) => { // bcrypt user password
                    if(err){
                        console.log(err);
                        
                        res.json({
                            message: 'Passowrd hashing faild',
                            error: err
                        })
                    } else {
                        let user = new User({
                            email: req.body.email,
                            password: hash
                        });
            
                        user.save()
                            .then(data => {
                                res.status(201).json({
                                message: 'User Post Successfully',
                                user: data
                        })
                    })
                        .catch (error => {
                            console.log(error);
                            res.status(500).json({
                                message: 'Error Occured'
                            });
                            
                        })
                    }
                })
            }
        })
        .catch()
    
}

//singInUser
const singInUser = (req, res, next) => {

    User.findOne({email: req.body.email}, (err, user) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                message: 'something is worng'
            })
        }
        if(!user){
            return res.status(404).json({
                message: 'user not found'
            })
        }else{
            let passwordValidationCheck = bcrypt.compareSync(req.body.password, user.password);

            if(!passwordValidationCheck){
                res.status(401).json({
                    message: 'Validation faild!! Password or Email is not valid'
                })
            }else{
              
                res.status(200).json({
                    message: ((req.body.email).split("@"))[0]+' Login Successfully',

                })
            }
        }
    })
        
}

module.exports = {
    singUpUser,
    singInUser
}
