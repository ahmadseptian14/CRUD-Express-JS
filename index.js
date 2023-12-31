require('dotenv').config()
const express = require('express');
const authRoutes = require('./routes/authRouter');
const legalEntityRoutes = require('./routes/legalentitiesRouter');
const durationRoutes = require('./routes/durationsRouter');
const middlewareLogRequest = require('./middleware/logs');
const bodyParser = require('body-parser')
const { verifyToken } = require('./middleware/authorization')
// const upload = require('./middleware/multer');


const PORT = process.env.PORT;

const app = express();


// Middleware
app.use(middlewareLogRequest);
app.use(express.json());
app.use(bodyParser.json());
app.use('/assets', express.static('public/images'));

// Routes
app.use('/api/v1', authRoutes);
app.use('/api/v1/legalentities', verifyToken, legalEntityRoutes);
app.use('/api/v1/durations', durationRoutes);
// app.post('/upload', upload.single('photo'), (req, res) => {
//     res.json({
//         message: "Success upload image"
//     });
// });

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil dirunnig di port ${PORT}`);
})
