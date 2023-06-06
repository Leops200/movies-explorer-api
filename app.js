require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const validationErrs = require('celebrate').errors;
const cookieParser = require('cookie-parser');
const router = require('./routes/index');
const errProcess = require('./middlewares/errorsProcess');
const cors = require('./middlewares/cors');
const { errLog, reqLog } = require('./middlewares/logger');

// =====================================================

const PORT = process.env.PORT || 3001;
const DATA_BASE = process.env.DATA_BASE || 'mongodb://127.0.0.1/mestodb';

const app = express();

mongoose.connect(DATA_BASE);

app.use(cors);
app.use(express.json());
app.use(cookieParser());
app.use(reqLog);
app.use('/', router);
app.use(errLog);
app.use(validationErrs());
app.use(errProcess);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
