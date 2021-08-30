const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


mongoose.connect('mongodb+srv://thalita:nT131116@cluster0.l8ayu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});
app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('rodando na porta 5000');
});