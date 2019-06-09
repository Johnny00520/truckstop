const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./routes/movieList')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will server up production assets like main.css or main.js
    app.use(express.static('client/build'));

    const path = require('path');
    // Express serves up index.html if it doesn't recognize the route
    app.get('*', (req, res) => { // Catch the rest
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT)