const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Docker')
})

app.get('/seinfo', (req, res) => {
    res.send("hello seinfo 2018")
})

app.listen(80, () => {
    console.log("App is running")
})