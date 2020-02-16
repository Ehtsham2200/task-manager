require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e496cc12d886d15b3a5113d').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count 
}

deleteTaskAndCount('5e496d432d886d15b3a5113e', true).then((result) => {
    console.log(result)
}).catch((e) => { 
    console.log(e)    
})