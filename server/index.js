require('dotenv').config();
const express = require('express')
const massive = require('massive')

const app = express();

app.use(express.json());

//CONNECTION TO MY SERVER, DATABASE, AND USER SESSION
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db)
    console.log("Database is connected master")
    app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}, Master Kenobi!`))
}).catch(error => console.log(error, 'Could not connect to server Ben. Uh-Oh!'))