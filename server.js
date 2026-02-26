import express from 'express';
import connectDB from './config/db.js';
import routes from './route/routes.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  })
);

connectDB();
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});