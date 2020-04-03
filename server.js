require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');



const posts = [
    {
        username: 'Bob',
        title: 'Post 1'
    },
    {
        username: 'Sue',
        title: 'Post 2'
    },
]


app.use(express.json());

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
});


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next();
    })

    next();
}


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Post Server listening on port ${port}...`));