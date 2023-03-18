const express = require('express');
const { PORT } = require('./config/serverConfig');
const router = require('./routes/routes');

const serverSetupAndStart = async () => {
    const app = express();
    app.use(express.json());
    app.use('/api/v1',router);

    app.listen(PORT,()=>{
        console.log(`Auth Server is running on ${PORT}`);
    })
} 

serverSetupAndStart();

