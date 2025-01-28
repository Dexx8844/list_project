//import express framework
const express = require('express');

const sequelize = require('./database/sequelize');
//import sequelize instance from database

const PORT = 3540;
const listRouter = require('./router/listRouter');
const app = express();
 
app.use(express.json());
// app.use(userRouter);

app.use(listRouter);
app.get('/', (req, res) => {
    res.send('Welcome To My  list');
})
const server = async () => {
try {
    await sequelize.authenticate();
    console.log('connection to database has been established successfully.');
} catch (error) {
    console.error('unable to connect to the database:',error.message);
}
};

//invoke the server function
server();
//listen to PORT
app.listen(PORT,()=>{
    console.log(`App is listening to PORT:${PORT}`)
});