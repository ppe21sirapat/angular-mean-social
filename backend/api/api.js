const express = require('express') ;
const router = express.Router() ;
const bcrypt = require('bcrypt') ;
const jwt = require('jsonwebtoken') ;

let member = require('../model/member_model.js') ;

router.get('/test-api', (req, res) => {
    res.end('API WORK') ;
})

// Get Member

router.get('/member-list', (req, res) => {
    member.find((error, data) => {
        if(error)
        {
            return(error) ;
        }
        else
        {
            res.json(data) ;
        }
    })
})

// Get Profile 
router.get('/profile', (req, res) => {
    member.findOne({_id:req.body.id}, (error, data) => {
        if(error)
        {
            return(error) ;
        }
        else
        {
            console.log(req.body)
            res.json({message:"profile", body: req.body, userData:data}) ;
        }
    })
})

// Add New Member

router.post('/create-account', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash_password) => {
            req.body.password = hash_password ;
            member.create(req.body, (error,data) => {
                if(error)
                {
                    return(error) ;
                }
                else
                {
                    console.log(req.body) ;
                    res.json(req.body) ;
                }
            })
        })
    })
    // member.create(req.body, (error,data) => {
    //     if(error)
    //     {
    //         return(error) ;
    //     }
    //     else
    //     {
    //         res.json(req.body) ;
    //     }
    // })
})

// Login Check User & Password
router.post('/login', (req, res) => {
    let userData ;
    member.findOne({username:req.body.username}).then(user => {
        userData = user ;
        if(!user)
        {
            res.json({message:'fail'})
        }
        else
        {
            return bcrypt.compare(req.body.password, userData.password)
        }
    }).then(result => {
        if(!result)
        {
            res.json({message:'fail'})
        }
        else
        {
            const token = jwt.sign({username: userData.username,userId: userData._id},'secure_token', {expiresIn: '1h'})
            res.json({message: 'success', userData, token: token})
        }
    }).catch(err => 
        {
            res.json({message: 'Auth Fail'})
        })


    // const query = {username:req.body.username, password: req.body.password} ;
    // member.findOne(query).then(user => {
    //     if(!user)
    //     {
    //         res.json({message:'fail'})
    //     }
    //     else
    //     {
    //         res.json({message:'success',user})
    //     }
    // })
})

module.exports = router ;