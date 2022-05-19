const express = require('express');
const app= express();
const port = process.env.PORT || 5000;

const routes = require('./api/routes');

routes(app);


app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
// http://localhost:5000/distance/35004/36925