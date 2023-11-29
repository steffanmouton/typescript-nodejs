import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import applicantRoutes from "./src/routes/applicant.routes";

const app = express();
app.use(applicantRoutes);

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(3000, () => {
    console.log('now listening on port 3000...');
})
