import Booking from "../models/Booking"

export const createBooking = async (req, res) => {

    try {
        const newBooking = new Booking(req.body)
        const savedBooking = await newBooking.save()

        res.status(200)
            .json({
                success: true,
                message: "tour is booked",
                data: savedBooking
            })

    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: "server error",
            })

    }
}

export const getSingleBooking = async (req, res) => {
    const id = req.params.id
    try {
        const booking = await Booking.findById(id)
        res.status(200)
            .json({
                success: true,
                message: "Successfull",
                data: booking
            })

    } catch (error) {
        res.status(404)
            .json({
                success: false,
                message: "Not found",
            })
    }
}

export const getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.find()
        res.status(200)
            .json({
                success: true,
                message: "Successfull",
                data: bookings
            })

    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: "server error",
            })
    }
}