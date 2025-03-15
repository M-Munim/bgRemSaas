import 'dotenv/config'
import express from 'express'
import cors from 'cors'

// App config
const app = express()
const port = process.env.PORT || 5000
 
// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World!s')
})

// Listener
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// 15120