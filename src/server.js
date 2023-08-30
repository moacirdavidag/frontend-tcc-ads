const express = require('express');

const { resolve } = require('path');

const app = express();

app.use('/', express.static(resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(process.env.PORT || 3000);