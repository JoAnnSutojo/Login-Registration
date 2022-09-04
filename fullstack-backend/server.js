import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// Routes
import UserRouter from './routes/index.js'

// Constants
const PORT = 4000

const app = express()

app.use(cors())

app.use(express.json())

app.use('/', UserRouter)

app.listen(PORT, () => console.log(`Port listening on: ${PORT}`))


