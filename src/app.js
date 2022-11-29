const express = require('express')

const app = express()

const port = require('../config').api.port


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})



app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
