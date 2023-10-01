import express from "express";
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from "../controllers/tourController.js";

const router = express.Router()

//create tour 
router.post('/', createTour)

//update tour 
router.put('/:id', updateTour)

//delete tour 
router.delete('/:id', deleteTour)

//get single tour
router.get('/:id', getSingleTour)

//get all tour
router.get('/', getAllTour)

export default router