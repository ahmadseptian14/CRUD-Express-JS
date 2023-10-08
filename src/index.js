require('dotenv').config()
const express = require('express');
const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./niddleware/logs');
const PORT = process.env.PORT;

const app = express();


// Middleware
app.use(middlewareLogRequest);
app.use(express.json());

// Routes
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server berhasil dirunnig di port ${PORT}`);
})
