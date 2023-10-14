const {LegalEntity} = require('../models');
const {validationResult} = require('express-validator');


const getAllLegalEntity = async (req, res) => {
  try {
    const data = await LegalEntity.findAll()
    // Jika sukses dan data kosong
    if (!data || data.length === 0) {
        return res.status(200).json({
          code: "RES_LEG_101",
          message: 'No legal entity data found',
        });
      }

    // Jika berhasil get data
    res.status(200).json({
        code: "RES_LGE_102",
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

const getLegalEntityById = async (req, res) => {
   try {
    const {id} = req.params
    const data = await LegalEntity.findByPk(id)

    if (!data) {
        return res.status(404).json({
            code: "ERR_LGE_202",
            message: "Data Not Found"
        })
    }

    res.status(200).json({
        code: "RES_LGE_203",
        message: "Successfully get legal entity data",
        data: data
    })
   } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMassage: error
        })
   }
}

const createNewLegalEntity = async (req, res) => {
    try {
        const {body} = req;
        const errors = validationResult(req);
        const errorValidate = errors.array().map(error => error.msg)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                code: "ERR_LGE_302",
                message: "Invalid data",
                error: errorValidate
            });
        }

        const newLegalEntity = await LegalEntity.create(body)

        res.status(200).json({
            code: "RES_LGE_303",
            message: "Successfully create legal entity",
            data: newLegalEntity
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMassage: error
        })
    }
}

const updateLegalEntity = async (req,res) => {
    try {
        const { id } = req.params
        const { body } = req

        if(!id) {
            return res.status(400).json({
                code: "ERR_LGE_401",
                message: "ID not found for update"
            })
        }

        const data = await LegalEntity.findByPk(id)
        if(!data) {
            return res.status(404).json({
                code: "ERR_LGE_402",
                message: "ID not found for update"
            })
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorValidate = errors.array().map(error => error.msg)
            return res.status(400).json({
                code: "ERR_LGE_403",
                message: "Invalid data",
                error: errorValidate
            });
        }

        await LegalEntity.update(body, {where: {id: id} })
        res.status(200).json({
            code: "RES_LGE_405",
            message: "Successfully update legal entity data",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
}

const deleteLegalEntity = async (req, res) => {
  try {
    const { id } = req.params

    if(!id) {
        return res.status(400).json({
            code: "ERR_LGE_501",
            message: "ID is required for delete"
        })
    }

    const data = await LegalEntity.findByPk(id)
    if(!data) {
        return res.status(404).json({
            code: "ERR_LGE_502",
            message: "ID not found for update"
        })
    }

    await data.destroy()

    res.status(200).json({
        code: "RES_LGE_503",
        message: "successfully delete legal entity data"
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
    getLegalEntityById,
    createNewLegalEntity,
    updateLegalEntity,
    deleteLegalEntity
}
