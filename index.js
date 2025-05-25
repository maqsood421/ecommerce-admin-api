const express = require('express');
const { json } = require('body-parser');

const app = express();
app.use(json());


app.listen(4000, ()=> {
    console.log("Listening on 4000");
});