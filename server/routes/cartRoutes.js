const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongoose').Types;
const verifyJWT = require('../middlewares/verifyJWT');
const CartItem = require('../models/cartItemModel'); // Import the CartItem model
const Class = require('../models/classModel'); // Import the Class model

// ADD TO CART
router.post('/add-to-cart', verifyJWT, async (req, res) => {
    try {
        const newCartItem = req.body;
        const result = await CartItem.create(newCartItem);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET CART ITEM BY ID
router.get('/cart-item/:id', verifyJWT, async (req, res) => {
    const { id } = req.params;
    const email = req.query.email;
    try {
        const query = { classId: id, userMail: email };
        const projection = { classId: 1 };
        const cartItem = await CartItem.findOne(query, projection);
        res.send(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET CART ITEMS BY USER EMAIL
router.get('/cart/:email', verifyJWT, async (req, res) => {
    const { email } = req.params;
    try {
        // Find cart items for the user
        const carts = await CartItem.find({ userMail: email }, { classId: 1 });
        
        // Extract classIds from cart items
        const classIds = carts.map(cart => new ObjectId(cart.classId));

        // Find classes with matching classIds
        const classes = await Class.find({ _id: { $in: classIds } });

        res.send(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

