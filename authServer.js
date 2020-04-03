require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());


app.post('/login', (req, res) => {
    //Authenticate User
    
    const username = req.body.username;
    const user = {name: username};


    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken});
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Auth Server listening on port ${port}...`));

