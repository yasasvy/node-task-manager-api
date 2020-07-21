require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5efa1d0015f14546c86a1142', {age: 16}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 16})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
} 

updateAgeAndCount('5efa1d0015f14546c86a1142', 21).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})