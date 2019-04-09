require('dotenv').config();
const PORT = process.env.PORT;
const  express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send(`
        <h1>Home Route</h1>
        <p>passport project</p>
    `)
});

app.listen(PORT, () => {
    console.log(`Connected on port: ${PORT}`)
});