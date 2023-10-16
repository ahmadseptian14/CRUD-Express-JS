const { User } = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const authRegister = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const errors = validationResult(req);
    const errorValidate = errors.array().map(error => error.msg)

    try {
        const user = await User.create({ name, email, password: hashedPassword })

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Invalid data",
                error: errorValidate
            });
        }

        res.status(201).json({
            message: "Successfully register user",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
}

const authLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if(!user) {
            return res.status(404).json({
                message: "Email not registered"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid password"
            })
        }

        const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;
        const token = jwt.sign({ id: user.id }, ACCESS_TOKEN );
        res.status(200).json({
            code: "RES_AUT_103",
            message: "Successfully login",
            token: token
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
}

module.exports = { authRegister, authLogin }
