//REGISTER  new User
//post :api/users/register

const registerUser = (req, res, next )=> {
    res.json("register user")
}


//LOGIN A REGISTER user
//post :api/users/login 

const loginUser = (req, res, next )=> {
    res.json("Login User")
}


//USER PROFILE
//post :api/users/:id

const getUser = (req, res, next )=> {
    res.json("User Profile")
}

//change user avatar (profile image)
//post :api/users/change-avatar
//PROTECTED
const changeAvatar = (req, res, next )=> {
    res.json("Change User Avatar")
}


//edit user Details
//post :api/users/change-avatar
//PROTECTED
const editUser = (req, res, next )=> {
    res.json("Edit user details")
}


//edit user Details
//post :api/users/change-avatar
//PROTECTED
const getAuthors = (req, res, next )=> {
    res.json("Get all users/authors")
}

module.exports = {registerUser, loginUser, getUser, getAuthors, changeAvatar, editUser, getAuthors}