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

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Success create user',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const {id} = req.params;
    console.log("id:", id);
    res.json({
        message: "Success update user",
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    res.json({
        message: "Success delete user",
        data: {
            id: id,
            name: "Ahmad Septian",
            mobile: "0895349203286",
            email: "ahmadseptian576@gmail.com"
        }
    })
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}
