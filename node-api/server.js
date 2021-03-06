const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o BD

// Web Mongo Atlas
// mongoose.connect('mongodb+srv://jonas:147258@cluster0-9q0pm.mongodb.net/nodeapi', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// Docker
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/models');

// Rotas
app.use('/api',require('./src/routes'));

app.listen(3001);