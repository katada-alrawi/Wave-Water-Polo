const { Router } = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors,
} = require("../controllers/userControllers");
 const authMiddleware = require("../middleware/authMiddileware");


const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/change-avatar', authMiddleware, changeAvatar);
router.patch('/edit-user', authMiddleware, editUser);
router.get('/:id', getUser);
router.get('/', getAuthors);

router.get("/", (req, res, next) => {
  res.json("This is user routes");
});

module.exports = router;
