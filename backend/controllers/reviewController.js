import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReview = async (req, res) => {

    console.log(req.body);
    const tourId = req.params.tourId
    const newReview = new Review({ ...req.body })
    
    try {
        const savedReview = await newReview.save()
        //update the reviews array in tour

        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        })
        res.status(200)
            .json({
                success: true,
                message: "Review submitted",
                data: savedReview
            })

    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: error.message,
            })

    }
}