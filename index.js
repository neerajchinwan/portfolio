require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');




app.use(express.static(process.env.PUBLIC_DIR))

app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})



app.listen(process.env.PORT, (err) => {
    if(!err){
        console.log(`server is listen to the port ${process.env.PORT}`)
    }
})