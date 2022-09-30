const { v4: uuidv4 } = require('uuid');

const users = []


exports.get_all_users = (req, res) => {
    res.send(users)
}


exports.get_user = (req, res) => {
    const singleUser = users.filter((user)=> user.id === req.params.id)
    res.send(singleUser)
  
}
exports.post_user = (req, res) => {
    const user = req.body 

    users.push({...user, id: uuidv4()})
    res.send('User added')
  
}

exports.put_user = (req, res) => {
    const user = users.find((user)=> user.id === req.params.id)

    user.name = req.body.name
    user.email = req.body.email
    user.contact = req.body.contact 
  
    res.send('Updated')
    
}



exports.delete_user = (req, res) => {
    users = users.filter((user)=> user.id !== req.params.id)//returnerar all userid som inte matchar
    res.send('user deleted')
}

/*const user = []

const saveUser = (user) => {
    users.push(user)
    return user
}*/