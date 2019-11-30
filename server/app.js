if(process.env.NODE_ENV==='development')
{
    require('dotenv').config()
}


const express = require('express')
const cors = require('cors')


const port = process.env.PORT || 7000
console.log("TCL: port", port)

const app = express()




app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})