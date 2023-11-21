import express, { Application } from "express";
import { config } from 'dotenv'
import routes from './routes';

config();

const app: Application = express();
const PORT: number | unknown = process.env.PORT || 3000;

app.use((req,_,next) => {
    // req.headers['custom-header'] = process.env.secret;
    next();
});
app.use('/api', routes );

app.listen(PORT, () => {
    console.log(`Server connected at Port: ${PORT}`);
})