const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');

routes(app);


app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});


//http://localhost:3000/info/99501