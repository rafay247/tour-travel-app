import Jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../models/User"


export const register = async (req, res) => {
    try {

        //hasing password
        const salt = bcrypt.genSalt(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo,
        })
        await newUser.save()
        res.status(200)
            .json({
                success: true,
                message: "Successfull",
            })

    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: "Failed, try again",
            })
    }
}

export const login = async (req, res) => {

    const email = req.body.email
    try {

        const user = await User.findOne({ email })
        if (!user) {
            res.status(404).json({ success: false, message: "user not found" })
        }
        const checkPassword = await bcrypt.compare(req.body.password, user.password)
        if (!checkPassword) {
            res.status(401).json({ success: false, message: "password incorrect" })
        }

        const { password, role, ...rest } = user._doc

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" })

        res.cookie("accessToken", token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200)
            .json({
                success: true,
                message: "login successfully",
                data: { ...rest },
                role
            })

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to login" })
    }
}