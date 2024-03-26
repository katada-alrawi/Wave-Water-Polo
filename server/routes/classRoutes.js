import express from 'express';
const router = express.Router();
import { ObjectId } from 'mongoose';
import verifyJWT from '../middlewares/verifyJWT';
import verifyAdmin from '../middlewares/verifyAdmin';
import verifyInstructor from '../middlewares/verifyInstructor';
import Class from '../models/classModel';
import User from '../models/userModel';

// CREATE A NEW CLASS
router.post('/new-class', verifyJWT, verifyInstructor, async (req, res) => {
    try {
        const newClass = req.body;
        newClass.availableSeats = parseInt(newClass.availableSeats);
        const result = await Class.create(newClass);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET ALL CLASSES ADDED BY INSTRUCTOR
router.get('/classes/:email', verifyJWT, verifyInstructor, async (req, res) => {
    const { email } = req.params;
    try {
        const classes = await Class.find({ instructorEmail: email });
        res.send(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET ALL CLASSES
router.get('/classes', async (req, res) => {
    try {
        const classes = await Class.find({ status: 'approved' });
        res.send(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET ALL CLASSES FOR MANAGEMENT
router.get('/classes-manage', async (req, res) => {
    try {
        const classes = await Class.find();
        res.send(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CHANGE STATUS OF A CLASS
router.put('/change-status/:id', verifyJWT, verifyAdmin, async (req, res) => {
    const { id } = req.params;
    const { status, reason } = req.body;
    try {
        const updatedClass = await Class.findByIdAndUpdate(id, { status, reason }, { new: true });
        res.send(updatedClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET APPROVED CLASSES
router.get('/approved-classes', async (req, res) => {
    try {
        const classes = await Class.find({ status: 'approved' });
        res.send(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET ALL INSTRUCTORS
router.get('/instructors', async (req, res) => {
    try {
        const instructors = await User.find({ role: 'instructor' });
        res.send(instructors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE A CLASS
router.put('/update-class/:id', verifyJWT, verifyInstructor, async (req, res) => {
    const { id } = req.params;
    const updatedClassData = req.body;
    try {
        const updatedClass = await Class.findByIdAndUpdate(id, updatedClassData, { new: true });
        res.send(updatedClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET SINGLE CLASS BY ID
router.get('/class/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const singleClass = await Class.findById(id);
        res.send(singleClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
