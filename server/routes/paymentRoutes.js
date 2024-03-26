// const express = require('express');
// const router = express.Router();
// const stripe = require('stripe')(process.env.PAYMENT_SECRET);
// // const verifyJWT = require('../middlewares/verifyJWT');
// // const { ObjectId } = require('mongoose').Types;
// const Classes = require('../models/classModel');
// const Enrolled = require('../models/enrolledModel');
// const Payment = require('../models/paymentModel');
// const CartItem = require('../models/cartItemModel');

// // CREATE PAYMENT INTENT
// router.post('/create-payment-intent', verifyJWT, async (req, res) => {
//     try {
//         const { price } = req.body;
//         const amount = parseInt(price) * 100;
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amount,
//             currency: 'usd',
//             payment_method_types: ['card']
//         });
//         res.send({
//             clientSecret: paymentIntent.client_secret
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // POST PAYMENT INFO 
// router.post('/payment-info', verifyJWT, async (req, res) => {
//     try {
//         const paymentInfo = req.body;
//         const classesId = paymentInfo.classesId;
//         const userEmail = paymentInfo.userEmail;
//         const singleClassId = req.query.classId;
//         let query;
//         if (singleClassId) {
//             query = { classId: singleClassId, userMail: userEmail };
//         } else {
//             query = { classId: { $in: classesId } };
//         }
//         const classesQuery = { _id: { $in: classesId.map(id => new ObjectId(id)) } };
//         const classes = await Classes.find(classesQuery);
        
//         const newEnrolledData = {
//             userEmail: userEmail,
//             classesId: classesId.map(id => new ObjectId(id)),
//             transactionId: paymentInfo.transactionId,
//         };

//         const updatedDoc = {
//             $inc: {
//                 totalEnrolled: 1,
//                 availableSeats: -1,
//             }
//         };

//         const updatedResult = await Classes.updateMany(classesQuery, updatedDoc);
//         const enrolledResult = await Enrolled.create(newEnrolledData);
//         const deletedResult = await CartItem.deleteMany(query);
//         const paymentResult = await Payment.create(paymentInfo);

//         res.send({ paymentResult, deletedResult, enrolledResult, updatedResult });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // GET PAYMENT HISTORY BY USER EMAIL
// router.get('/payment-history/:email', async (req, res) => {
//     try {
//         const email = req.params.email;
//         const query = { userEmail: email };
//         const result = await Payment.find(query).sort({ date: -1 });
//         res.send(result);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // GET PAYMENT HISTORY LENGTH BY USER EMAIL
// router.get('/payment-history-length/:email', async (req, res) => {
//     try {
//         const email = req.params.email;
//         const query = { userEmail: email };
//         const total = await Payment.countDocuments(query);
//         res.send({ total });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;