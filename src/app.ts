import express, { Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Route handlers
const issue = require('./controllers/api/v1/issue.controller');


// Mount routes
app.use('/api/v1/issues', issue);

app.get('/', (req: Request, res: Response) => {
	res.send('Welcome to sitemate issues')
})

app.listen(PORT, () => {
	console.log(`Application running on port ${PORT}`);
})