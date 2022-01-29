import fs from 'fs'
import { promisify } from 'util'
const readFile = promisify(fs.readFile)

// GET http://localhost:3000/companies
export async function getCompanies(req, res) {
    const data = await readFile('./data.json')
    res.header('Content-Type', 'application/json')
    res.send(data)
    res.end()
}
