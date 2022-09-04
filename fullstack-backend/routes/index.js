import express from "express";

// Schema
import { User } from "../models/index.js";

const router = express.Router()

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email, password })
    res.send(user)
})

router.post('/register', async (req, res) => {
    const { userName, email, password } = req.body

    const user = new User({ userName, email, password })
    await user.save()
    res.send(user)
})



export default router