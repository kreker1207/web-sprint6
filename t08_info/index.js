
   
const express = require('express')
const path = require('path')
const ip = require('ip')
const os = require('os')

const PORT = 5500

const app = express()

app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}...`)
})
app.get('/', (req, res) => {
    
        console.log(`a name of file of the executed script: ${path.basename(__filename)}\n`)
        console.log(`arguments passed to the script: ${process.argv.slice(2)}\n`)
        console.log(`IP address of the server ${ip.address()}\n`)
        console.log(`a name of host that invokes the current script: ${os.hostname()}\n`)
        console.log(`a name and a version of the information protocol: ${req.protocol}\n`) 
        console.log(`a query method: ${req.method}\n`)+
        console.log(`User-Agent information: ${req.get('user-agent')}\n`) 
        console.log(`IP address of the client: ${ip.address()}\n`)
        console.log(`a list of parameters passed by URL: ${req.url.slice(1)}`)

})