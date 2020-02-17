const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o BD
mongoose.connect('mongodb+srv://jonas:147258@cluster0-9q0pm.mongodb.net/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: "http://www.github.com/facebook/react-native"
    });

    return res.send("Hello World!");
})

app.listen(3001);