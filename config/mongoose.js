const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://islam:DemoChallenge2023@cluster0.flmobkn.mongodb.net/?retryWrites=true&w=majority')
.then(res =>{console.log('DB is connected')})
.catch(err => {console.log(err)});