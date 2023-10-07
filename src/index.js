const express = require('express');
const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./niddleware/logs');

const app = express();


// Middleware
app.use(middlewareLogRequest);
app.use(express.json());

// Routes
app.use('/users', usersRoutes);

app.listen(4000, () => {
    console.log('Server berhasil dirunnig di port 4000');
})
