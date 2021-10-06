// Environment Variables
import cors from 'cors';
import apiRoutes from "../routes/api";
import {Request, Response} from "express";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const path = require('path');
const morgan = require('morgan');
const express = require('express');

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req: Request, res: Response) => res.sendFile(path.resolve('./resources/views/index.html')));
app.use('/api', apiRoutes);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server on port ${process.env.PORT || 8000}`);
});