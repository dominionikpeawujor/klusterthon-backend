import express, { Application } from 'express';
import { config } from 'dotenv';
import routes from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';

config();

const app: Application = express();
const PORT: number | unknown = process.env.PORT || 3000;

const corsOptions = {
  origin: `*`,
  optionSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server connected at Port: ${PORT}`);
});

export default app;
