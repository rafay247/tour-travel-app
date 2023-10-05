import express from "express";
import { createBooking, getAllBooking, getSingleBooking } from "../controllers/bookingController";
import { verifyUser } from "../middleware/verifyToken";

const router = express.Router()

router.post('/', verifyUser, createBooking)
router.get('/:id', verifyUser, getSingleBooking)
router.get('/', verifyUser, getAllBooking)


export default router