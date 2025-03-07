import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'healthy', message: 'Server is running' });
});

app.get('/api/data', (req: Request, res: Response) => {
  res.status(200).json({ 
    message: 'Data fetched successfully', 
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ] 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
