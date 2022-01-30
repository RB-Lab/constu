import cors from 'cors'
import express from 'express'
import { getCompanies } from './handlers/companies/index.js'
import { getLogo } from './handlers/img/logo.js'

const app = express()
app.use(express.json())
app.use(cors({ origin: process.env.UI_ORIGIN }))

app.get('/api/companies', getCompanies)
app.get('/img/logo/:filename', getLogo)

/** handle not found routes */
app.use((req, res) => {
    res.status(404).send({
        status: 404,
        error: true,
        message: `Resource ${req.url} not found`,
    })
})

/** handle other uncaught errors */
app.use((error, _req, res, _next) => {
    console.error(error)
    res.status(500).send({
        status: 500,
        error: true,
        message: 'Internal server error',
    })
})

app.listen(process.env.API_PORT, () => {
    console.log(`Started api on port ${process.env.API_PORT}`)
})
