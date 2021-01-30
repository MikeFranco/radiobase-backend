require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//routes
const tables = require('./routes/radioBaseRoute');
/* const auth = require('./routes/authRoutes.js');
const devices = require('./routes/devicesRoutes');

const SESSION_SECRET = process.env.SECRET; */
const port = process.env.PORT || 5000;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    credentials: true
  })
);

mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  (err, res) => {
    console.log('conectado a la BD');
  }
);

app.use(cookieParser());

app.use('/', tables);

app.listen(port, () => {
  console.log(`corriendo en el puerto ${port}`);
});
