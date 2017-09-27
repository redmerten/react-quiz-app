const express = require('express');

//this creates a new express app.  There can be many apps in a project.
//but most only use one.
//app sets up config to listen for routing requests
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(5000);
