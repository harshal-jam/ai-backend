const express = require('express');
const connectDB = require('./config/db');   
const routes = require('./route/routes');  

const app = express();
app.use(express.json());
connectDB();
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send(' API is running...');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});