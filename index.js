const PORT = 8000

const express = require("express")
const cors = require("cors")
// require('dotenv').config()
const app = express()
app.use(cors())

let words = require("./words.json")
const wordArray = words['words']


app.get('/word', (req, res) => {
    //generate random number
    let randIndex = Math.floor(Math.random() * wordArray.length) //# of words in json
    console.log("randIndex: ", randIndex)
    //grab that index from word array
    let ranWord = wordArray[randIndex]
    console.log("ranWord: ", ranWord)
    res.json(ranWord)
})



app.listen(PORT, () => { 
    console.log('Server running on port ' + PORT)
})