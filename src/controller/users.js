const UserModel = require('../models/users');

const getAllUser = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUser();
    res.json({
        message: 'Success get all user',
        data : data
    })
  } catch (error) {
    res.status(500).json({
        message: 'Server Error',
        serverMessage: error
    })
  }
}

const createNewUser = async (req, res) => {
    const {body} = req;
    try {
        await UserModel.createNewUser(body);
        res.json({
            message: 'Success create user',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Errorrrr',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UserModel.updateUser(body, id);
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

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await UserModel.deleteUser(id);
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
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}
