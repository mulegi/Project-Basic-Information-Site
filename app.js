const express = require('express');

// express app
const app = express();

//listen for requests
app.listen(8080);

app.get('/', (req, res) => {
    
    res.sendFile('/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    
    res.sendFile('/about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
    
    res.sendFile('/contact-me.html', { root: __dirname });
});

app.use((req, res) => {

    res.sendFile('./404.html', { root: __dirname });
});
