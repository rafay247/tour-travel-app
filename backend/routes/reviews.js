import express from "express";
import { createReview } from "../controllers/reviewController";
import { verifyUser } from "../middleware/verifyToken";

const router = express.Router()

//create tour 
router.post('/:tourId', verifyUser, createReview)


export default router