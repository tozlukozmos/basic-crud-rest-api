const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require("dotenv").config();

const userRoutes = require('./api/v1/routes/user');

const app = express();
app.use(express.json());
app.use(helmet());

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://192.168.2.112:3000'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    maxAge: 600,
    preflightContinue: false
}
app.use(cors(corsOptions));

app.use('/users', userRoutes);
app.use((req, res, next) => {
    res.status(404).send({error: '404 Not Found'})
    next();
})

const PORT = process.env.PORT || 2022;
app.listen(PORT, () => {console.log('server is running on ' + PORT)})