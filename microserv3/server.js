const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const routes = require('../microserv3/api/routes');

routes(app);


app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
//