const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.static("./lessons"))

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html")
})
app.get("/load", (req, res) => {
    let data = {}
    folders = fs.readdirSync('./lessons')

    folders.map((folder) => {
        files = fs.readdirSync('./lessons/' + folder)

        data[folder] = files

    })
    console.log(data);
    res.json(data)
})

app.listen(3000)