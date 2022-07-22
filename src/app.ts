import express, {Request, Response} from 'express'
import {initRoutes, routesMap} from './routes/v1/Routes'

const app = express()
app.use(express.json())

initRoutes()

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`)
})