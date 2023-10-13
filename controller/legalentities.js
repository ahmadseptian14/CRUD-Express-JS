const {LegalEntity} = require('../models');
const {validationResult} = require('express-validator');


const getAllLegalEntity = async (req, res) => {
  try {
    const [data] = await LegalEntity.findAll()
    // Jika sukses dan data kosong
    if (!data || data.length === 0) {
        return res.status(200).json({
          code: "RES_LEG_101",
          message: 'No legal entity data found',
        });
      }

    // Jika berhasil get data
    res.json({
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

    if (data === undefined) {
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

// const createNewLegalEntity = async (req, res) => {
//     const {body} = req;
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             // Pengecekan jika format email salah
//             const emailError = errors.array().find(error => error.param === 'pic_email');
//             if (emailError) {
//                 return res.status(400).json({
//                     code: "ERR_LGE_302",
//                     message: "Invalid field format",
//                     error: emailError.msg
//                 });
//             }
//         }

//         //   Jika data kosong
//           const errorEmptyField = errors.array().find(error => error);
//           return res.status(400).json({
//               code: "ERR_LGE_301",
//               message: "Data cannot be empty",
//               error: errorEmptyField.msg
//           });

//         // Jika berhasil create data
//         await LegalEntityModel.createNewLegalEntity(body);
//         res.status(201).json({
//             code: "RES_LEG_303",
//             message: "Successfully create new legal entity data",
//             data: body
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server Error',
//             serverMessage: error
//         })
//     }
// }

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
    getLegalEntityById,
    createNewLegalEntity,
    updateLegalEntity,
    deleteLegalEntity
}
