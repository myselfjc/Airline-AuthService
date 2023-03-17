const express = require('express');
const { PORT } = require('./config/serverConfig');

const serverSetupAndStart = async () => {
    const app = express();
    app.use(express.json());

    app.listen(PORT,()=>{
        console.log(`Auth Server is running on ${PORT}`);
    })
} 

serverSetupAndStart();

