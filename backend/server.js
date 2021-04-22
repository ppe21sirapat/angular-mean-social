const express = require('express') ;
const path = require('path') ;
const bodyParser = require('body-parser') ;
const cors = require('cors') ;

const app = express() ;
const port = process.env.PORT || 8000 ;

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({extended: false})) ;
app.use(cors()) ;


app.listen(port, () => {
    console.log('Listen on PORT : ' + port) ;
})

// Static directory path 
app.use(express.static(path.join(__dirname, 'dist/')))
// Base route 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
})

//Set API Route
app.use('/api',require('./api/api.js')) ;


// Database Connect 
const mongoose = require('mongoose') ;
const db_name = 'mongodb://localhost:27017/member_db' ;

mongoose.Promise = global.Promise ;
mongoose.connect(db_name, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connect Success') ;
}, error => {
    console.log('Database error' + error) ;
})