import cors from 'cors'
import express from 'express'
import { getCompanies } from './handlers/companies/index.js'
import { getLogo } from './handlers/img/logo.js'

const app = express()
app.use(express.json())
// TODO set cors only for needed domain
app.use(cors())

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

app.listen(3030)
