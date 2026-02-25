import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Shivam!');
});

app.get('/shivam',(req, res) => {
    res.send('Welcome to Shivam\'s Backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
