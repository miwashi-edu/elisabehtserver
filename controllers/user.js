exports.get_user = (req, res) => {
    res.send("NOT YET IMPLEMENTED")
}

exports.get_all_users = (req, res) => {
    res.send("NOT YET IMPLEMENTED")
}

exports.put_user = (req, res) => {
    res.send("NOT YET IMPLEMENTED")
}

exports.post_user = (req, res) => {
    res.send("NOT YET IMPLEMENTED")
}

exports.delete_user = (req, res) => {
    res.send("NOT YET IMPLEMENTED")
}

const users = []

const saveUser = (user) => {
    users.push(user)
    return user
}