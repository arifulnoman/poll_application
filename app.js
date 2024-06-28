const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const pollController = require('./pollController');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/',(req, res) => {
    res.render('home');
});

app.get('/create',pollController.createPollGetController);
app.post('/create',pollController.createPollPostController);
app.get('/polls/:id',pollController.viewPollGetController);
app.post('/polls/:id',pollController.viewPollPostController);
app.get('/polls',pollController.getAllPolls)

mongoose.connect('mongodb://127.0.0.1:27017/PollApplication')
    .then(() => {
        app.listen(4545,() => {
            console.log('Server is running on port 4545');
        });
    })
    .catch((err) => {
        console.log(err);
    }); 