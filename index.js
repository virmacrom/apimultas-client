const express = require ('express');
const bodyParser = require ('body-parser');
const MultasResource = require ('./multasResource');

const port = (process.env.PORT || 16778);
const baseAPI = "/v1";

const app= express();

app.use(bodyParser.json());

app.get(baseAPI + "/persons", (req, response) => {
    console.log("GET /persons");

    MultasResource.getAllMultas()
        .then((body) => {
            response.send(body);
        })
        .catch ((error) => {
            console.log("error: " + error);
            response.sendStatus(500);
        })
});

app.listen(port, () =>{
    console.log("Server (client) app and running");
});





