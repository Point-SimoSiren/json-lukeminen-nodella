const path = require('path')
const express = require('express')

const app = express()

const namit = require('./herkut.json')

//GET ALL etsitään kaikki namit jsonista
app.get('/api/herkut', (req, res) => {
    res.json(namit)
    })


// Tehdään polkumääritys public kansioon 
const polku = path.join(__dirname, './public')

// Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http requestin
app.use(express.static(polku))

app.listen(3300, () => {
    console.log('Server is up on port 3300.')
})