import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'Olá Dev' })
})

app.listen(port, () => console.log(`Server started on port: ${port}`))
