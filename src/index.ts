import express from 'express';
import routes from './routes/index';

const app = express();

// PORT 
const PORT = 4000;

app.use(express.json())
// routes index.ts
app.use('/api', routes);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))