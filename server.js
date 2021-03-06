const express = require('express');
const dotenv = require('dotenv');

//load env files
dotenv.config({path:'./config/config.env'})

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running in Port ${PORT}`)
})