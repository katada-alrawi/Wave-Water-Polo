const { Router } = require("express");

const {
  registerUser,
  loginUser,
  getUser,
  getAuthors,
  changeAvatar,
  editUser,
} = require("../controllers/userControllers");

const router = Router();
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/id', getUser)
router.get('/', getAuthors)
router.post('/change-avatar', changeAvatar)
router.patch('/edit-user', editUser)

router.get("/", (req, res, next) => {
  res.json("this is user routes");
});

module.exports = router;
