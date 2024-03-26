const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongoose').Types;
const verifyJWT = require('../middlewares/verifyJWT');
const Classes = require('../models/classModel');
const Users = require('../models/userModel');

// GET POPULAR CLASSES
router.get('/popular_classes', async (req, res) => {
    try {
        const result = await Classes.find().sort({ totalEnrolled: -1 }).limit(6);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET POPULAR INSTRUCTORS
router.get('/popular-instructors', async (req, res) => {
    try {
        const pipeline = [
            {
                $group: {
                    _id: "$instructorEmail",
                    totalEnrolled: { $sum: "$totalEnrolled" },
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "email",
                    as: "instructor"
                }
            },
            {
                $project: {
                    _id: 0,
                    instructor: {
                        $arrayElemAt: ["$instructor", 0]
                    },
                    totalEnrolled: 1
                }
            },
            {
                $sort: {
                    totalEnrolled: -1
                }
            },
            {
                $limit: 6
            }
        ];
        const result = await Classes.aggregate(pipeline);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET ADMIN STATS
router.get('/admin-stats', verifyJWT, async (req, res) => {
    try {
        const approvedClasses = await Classes.countDocuments({ status: 'approved' });
        const pendingClasses = await Classes.countDocuments({ status: 'pending' });
        const instructors = await Users.countDocuments({ role: 'instructor' });
        const totalClasses = await Classes.countDocuments();
        const totalEnrolled = await Enrolled.countDocuments();
        const result = {
            approvedClasses,
            pendingClasses,
            instructors,
            totalClasses,
            totalEnrolled
        };
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
