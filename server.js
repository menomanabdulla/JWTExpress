const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//MONGOOSE CONNECTION
//mongoose.connect('mongodb://localhost/contactApi');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://menomanabdulla:noman123321BAPPY@ds121861.mlab.com:21861/rest-mvc')
  .then(res => console.log(`DB Connected`))
  .catch(err=>console.log(err))

//DATABASE CONNECTING CHECK
/*const db = mongoose.connection;
db.on('error', err => {
    console.log('Database Connection error'+ err);
});
db.once('open', () => console.log('Database Connected'));
*/

//IMPORT ROUTE
const contactRouter = require('./api/route/contactRoute');
const userRouter = require('./api/route/userRoute');

//PORT
const PORT = process.env.PORT || 3030;

//MIDDLEwARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/contacts', contactRouter);

app.use('/api/users', userRouter);

//ROOT ROUTE
app.get('/', (req, res) => {
    res.json({
        message: 'Everythong is oke!'
    });
});


app.listen(PORT, () => {
    console.log('Im listening on port '+PORT);
});
