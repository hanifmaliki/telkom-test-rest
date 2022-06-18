const { getArray } = require('./function.js')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*'
}));

app.get('/', async (req, res) => {
    res.json({
        message: "Halo gaes, kalo mau hit api nya silahkan ke /api/getArray?param=[n]"
    })
})

app.get('/api/getArray', async (req, res) => {
    let data = getArray(req.query.param);
    res.json(data)
})

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})