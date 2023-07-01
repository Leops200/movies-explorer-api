require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const validationErrs = require('celebrate').errors;
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const router = require('./routes/index');
const errProcess = require('./middlewares/errorsProcess');
const cors = require('./middlewares/cors');
const { errLog, reqLog } = require('./middlewares/logger');
const rateLimiter = require('./middlewares/rateLimiter');

// =====================================================

const PORT = process.env.PORT || 3001;
const DATA_BASE = process.env.DATA_BASE || 'mongodb://127.0.0.1/mestodb';

const app = express();

mongoose.connect(DATA_BASE);

app.use(cors);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(reqLog);
app.use(rateLimiter);
app.use('/', router);
app.use(errLog);
app.use(validationErrs());
app.use(errProcess);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
