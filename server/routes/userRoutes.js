const { Router } = require("express");

const {
registerUser,
loginUser,
getUser,
changeAvatar,
editUser,
getAuthors,
} = require("../controllers/userControllers");

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/change-avatar', changeAvatar);
router.get('/:id', getUser); 
router.get('/', getAuthors);
router.patch('/edit-user', editUser);

router.get("/", (req, res, next) => {
res.json("this is user routes");
});

module.exports = router;