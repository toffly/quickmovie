import express from "express"
import { protectAdmin } from "../middleware/auth"
import { getFavorites, getUserBookings, updateFavorites } from "../controllers/userController"

const userRouter = express.Router()

userRouter.get('/bookings', getUserBookings)
userRouter.post('/update-favorite', updateFavorites)
userRouter.get('/favorites', getFavorites)


export default userRouter