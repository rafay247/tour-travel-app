import express from "express";
import {createReview} from '../controllers/reviewController.js'
import { verifyUser } from "../middleware/verifyToken.js";

const router = express.Router()

//create tour 
router.post('/:tourId', verifyUser, createReview)


export default router