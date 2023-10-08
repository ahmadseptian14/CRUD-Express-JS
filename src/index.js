require('dotenv').config()
const express = require('express');
const legalEntityRoutes = require('./routes/legalentities');
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');

const PORT = process.env.PORT;

const app = express();


// Middleware
app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'));

// Routes
app.use('/legalentities', legalEntityRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: "Success upload image"
    });
});

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil dirunnig di port ${PORT}`);
})
