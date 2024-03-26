const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongoose').Types;
const verifyJWT = require('../middlewares/verifyJWT');
const User = require('../models/userModel');
const Enrolled = require('../models/enrolledModel');
const Classes = require('../models/classModel');

// GET ALL INSTRUCTORS
router.get('/instructors', async (req, res) => {
    try {
        const result = await User.find({ role: 'instructor' });
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET ENROLLED CLASSES BY USER EMAIL
router.get('/enrolled-classes/:email', verifyJWT, async (req, res) => {
    try {
        const email = req.params.email;
        const query = { userEmail: email };
        const pipeline = [
            { $match: query },
            {
                $lookup: {
                    from: "classes",
                    localField: "classesId",
                    foreignField: "_id",
                    as: "classes"
                }
            },
            { $unwind: "$classes" },
            {
                $lookup: {
                    from: "users",
                    localField: "classes.instructorEmail",
                    foreignField: "email",
                    as: "instructor"
                }
            },
            {
                $project: {
                    _id: 0,
                    classes: 1,
                    instructor: { $arrayElemAt: ["$instructor", 0] }
                }
            }
        ];
        const result = await Enrolled.aggregate(pipeline);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
