const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useUnifiedTopology: true,
    useFindAndModify: false,    
    useNewUrlParser: true,
    useCreateIndex: true
})