const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value<0) {
                throw new Error('Age must be a positive integer!')
            }
        }
    }
})
const Task = mongoose.model('task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const me = new User({
    name: 'Ehtsham   ',
    email: '    TESTING@yopmail.com'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})

// const myTask = new Task({
//     description: 'Complete your homework',
//     completed: false
// })

// myTask.save().then(() => {
//     console.log(myTask)
// }).catch((error) => {
//     console.log(error)
// })