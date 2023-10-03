import express from "express";
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../middleware/verifyToken.js";


const router = express.Router()

//create User 
router.post('/', verifyUser, createUser)

//update User 
router.put('/:id', verifyUser, updateUser)

//delete User 
router.delete('/:id', verifyUser, deleteUser)

//get single User
router.get('/:id', verifyUser, getSingleUser)

//get all User
router.get('/', verifyAdmin, getAllUser)

export default router