import jwt from 'jsonwebtoken'

export const verifyToken = (req, res) => {
    const token = req.cookie.accessToken

    if (!token) {
        return res.status(401).json({ success: false, message: "You're not authorize" })
    }

    //if token exist verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "token is invalid" })
        }
        req.user = user
        next()
    })
}
export const verifyUser = () => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.role === 'admin') {
            next()
        } else {
            return res.status(401).json({ success: false, message: "you are not authenticated" })

        }
    })
}
export const verifyAdmin = () => {
    verifyToken(req, res, next, () => {
        if (req.user.role === 'admin') {
            next()
        } else {
            return res.status(401).json({ success: false, message: "You're not authorized" })

        }
    })
}