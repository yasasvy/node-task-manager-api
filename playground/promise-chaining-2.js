require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5efaea1692c71109648e3f3c').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5efb3acc2b42c73a8062327e').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})