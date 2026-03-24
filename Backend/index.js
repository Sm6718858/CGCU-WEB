import express from 'express';
import cors from 'cors';
import AuthenticationRoute from './Routes/authentication.js';
import jwt from 'jsonwebtoken'


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());


app.use('/api',AuthenticationRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});