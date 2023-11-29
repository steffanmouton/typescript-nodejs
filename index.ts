import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(3000, () => {
    console.log('now listening on port 3000...');
})
