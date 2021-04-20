const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

let member_model = new Schema({
    username: {
                type: String 
              },
    password: {
                type: String 
              },
    email: {
             type: String
           },
    fristname: {
                 type: String
               },
    lastname: {
                type: String
              },
    age: {
           type: String
         },
    gender: {
              type: String
            }
}, {
    collection: 'member'
})

module.exports = mongoose.model('member_model', member_model) ;