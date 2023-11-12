const path = require('path')
const express = require('express')
const fs = require('fs').promises

const app = express()

const namit = require('./herkut.json')

//GET ALL etsitään kaikki namit jsonista
app.get('/api/herkut', (req, res) => {
    res.json(namit)
    })


 // Pinkoodin lukeminen txt tiedostosta pelvelimelta ja lähettäminen selaimelle   
app.get('/api/getpin', async (req, res) => {
try {
    // Read the content of the text file
    const savedPin = await fs.readFile('./pin.txt', 'utf-8')
    
    // Send the file content as the response
    res.send(savedPin)
} catch (error) {
    console.error('Error reading file:', error)
    res.status(500).send('Internal Server Error')
}
})

// Tehdään polkumääritys public kansioon 
const polku = path.join(__dirname, './public')

// Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http requestin
app.use(express.static(polku))

app.listen(3300, () => {
    console.log('Server is up on port 3300.')
})