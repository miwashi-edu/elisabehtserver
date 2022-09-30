const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/users', require('./routes/users.js'))

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})