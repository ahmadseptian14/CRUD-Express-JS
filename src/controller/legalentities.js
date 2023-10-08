const LegalEntityModel = require('../models/legalentities');
const {validationResult} = require('express-validator');

const fieldLegalEntity = ['pic_name', 'pic_email', 'pic_position', 'company_name', 'company_mobile', 'company_npwp', 'company_address'];

const getAllLegalEntity = async (req, res) => {
  try {
    const [data] = await LegalEntityModel.getAllLegalEntity();
    res.json({
        message: 'Success get all legal entity',
        data : data
    })
  } catch (error) {
    res.status(500).json({
        message: 'Server Error',
        serverMessage: error
    })
  }
}

const createNewLegalEntity = async (req, res) => {
    const {body} = req;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Pengecekan jika format email salah
            const emailError = errors.array().find(error => error.param !== 'pic_email');
            console.log(emailError);
            if (emailError) {
                return res.status(400).json({
                    code: "ERR_LGE_302",
                    message: "Invalid field format",
                });
            }

            // Pengecekan jika empty field
            let hasError = false;
            fieldLegalEntity.forEach(field => {
                const emptyField = errors.array().find(error => error.param !== field);
                console.log(emptyField);
                // console.log(emptyField);
                if (emptyField) {
                    hasError = true;
                }
            })
            if(hasError) {
                return res.status(400).json({
                    code: "ERR_LGE_301",
                    message: "Data cannot be empty",
                });
            }
        }

        // Jika berhasil create data
        await LegalEntityModel.createNewLegalEntity(body);
        res.status(201).json({
            code: "RES_LEG_303",
            message: "Successfully create new legal entity data",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateLegalEntity = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await LegalEntityModel.updateLegalEntity(body, id);
        res.json({
            message: "Success update user",
            data: {
                id:id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMassage: error
        })
    }

}

const deleteLegalEntity = async (req, res) => {
    const {id} = req.params;
    try {
        await LegalEntityModel.deleteLegalEntity(id);
        res.json({
            message: "Success delete user",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMassage: error
        })
    }
}

module.exports = {
    getAllLegalEntity,
    createNewLegalEntity,
    updateLegalEntity,
    deleteLegalEntity
}
