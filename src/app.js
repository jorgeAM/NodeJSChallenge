import cors from 'cors'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import routes from './routes'
import swaggerOption from '../swagger.json'

const app = express()

const options = {
  explorer: true,
  swaggerOptions: {
    authAction: {
      JWT: {
        name: 'JWT',
        schema: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: ''
        },
        value: 'Bearer <my own JWT token>'
      }
    }
  }
}

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/v1', routes)
app.use(
  '/documentation',
  swaggerUi.serve,
  swaggerUi.setup(swaggerOption, options)
)

export default app
