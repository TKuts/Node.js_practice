
const authUser = (users,user) => {
    return users.find(item => item.email == user.email && item.password == user.password)
}

module.exports = authUser