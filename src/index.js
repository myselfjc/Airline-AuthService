const express = require('express');
const { PORT } = require('./config/serverConfig');
const router = require('./routes/routes');

const db = require('./models/index');

const serverSetupAndStart = async () => {
    const app = express();
    app.use(express.json());
    app.use('/api/v1/user',router);

    app.listen(PORT,()=>{
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        } 
        console.log(`Auth Server is running on ${PORT}`);
    })
} 

serverSetupAndStart();

