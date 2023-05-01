import express from 'express';
import dotenv  from 'dotenv';
import router from './router/weatherRouther.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded ({ extended : true }));
dotenv.config();

app.use('/', router);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});

