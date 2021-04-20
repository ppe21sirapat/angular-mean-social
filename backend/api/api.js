const express = require('express') ;
const router = express.Router() ;

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

// Add New Member

router.post('/create-account', (req, res) => {
    member.create(req.body, (error,data) => {
        if(error)
        {
            return(error) ;
        }
        else
        {
            res.json(req.body) ;
        }
    })
})

// Login Check User & Password
router.post('/check-user', (req, res) => {
    const query = {username:req.body.username, password: req.body.password} ;
    member.findOne(query).then(user => {
        if(!user)
        {
            res.json({message:'fail'})
        }
        else
        {
            res.json({message:'success',user})
        }
    })
})

module.exports = router ;