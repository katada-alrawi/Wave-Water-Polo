const user = require('../models/userModel')

//REGISTER  new User
//post :api/users/register

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body;
        if (!name || !email || !password || !password2) {
            return next(new HttpError("Fill in all fields", 422));
        }
        
        const newEmail = email.toLowerCase()
        const emailExist = await UserActivation.findOne({ email: email })


        res.json({ message: "register user" });
    } catch (error) {
        return next(new HttpError("User registration failed", 422));
    }
};





//LOGIN A REGISTER user{ message:
//post :api/users/login 

const loginUser =async (req, res, next )=> {
    res.json({ message: "Login User" })
}


 




//USER PROFILE
//post :api/users/:id

const getUser =async (req, res, next )=> {
    res.json({message:"User Profile"})
}







//change user avatar (profile image)
//post :api/users/change-avatar
//PROTECTED
const changeAvatar = async(req, res, next )=> {
    res.json({message:"Change User Avatar"})
}








//edit user Details
//post :api/users/change-avatar
//PROTECTED
const editUser = async(req, res, next )=> {
    res.json({message:"Edit user details"})
}








//edit user Details
//post :api/users/change-avatar
//PROTECTED
const getAuthors =async (req, res, next )=> {
    res.json({message:"Get all users/authors"})
}

module.exports = {registerUser, loginUser, getUser,changeAvatar, editUser, getAuthors}