const { Duration } = require('../models');

const getAllDuration = async (req, res) => {
    try {
        const data = await Duration.findAll()

        if(!data || data.length === 0){
            return res.status(200).json({
                code: "RES_DRT_101",
                message: "Empty of duration data",
                data: []
            })
        }

        res.status(200).json({
            code: "RES_DRT_102",
            message: "Successfully get all legal entities",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
         })
    }
}

module.exports = { getAllDuration }
