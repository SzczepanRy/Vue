const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.static("./lessons"))


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html")
})

const delData = {
    produkty: [
        "pr1",
        "pr2",
        "pr3",
        "pr4",
        "pr5",
        "pr6",
        "pr7",
    ],
    delivery: [
        { name: 'inpost', src: 'gfx/inpost.png' },
        { name: 'dhl', src: 'gfx/dhl.png' },
        { name: 'dpd', src: 'gfx/dpd.png' },
    ],
    payment: [
        { name: 'visa', src: 'gfx/visa.png' },
        { name: 'mastercard', src: 'gfx/master.png' },
        { name: 'blik', src: 'gfx/blik.png' },
    ]
}

app.get("/data", (req, res) => {

    res.json(delData)
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