import express from "express";
import { createReview } from "../controllers/reviewController";

const router = express.Router()

//create tour 
router.post('/:tourId', createReview)


export default router