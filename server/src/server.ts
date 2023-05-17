import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.get('/', async () => {
  return [
    ' ----------------  < NLW >  ----------------',
    ' |                                         |',
    ' |                SpaceTime                |',
    ' |                                         |',
    ' ----------- < Trilha Node.js > -----------',
    ' |                                         |',
    ' |                  API                    |',
    ' |                                         |',
    ' ------------- < BORA CODAR > -------------',
    '                                           ',
    'Nome: Alisson de Andrade Araújo',
    'Formação: Análise e Desenvolvimento de Sistemas',
    'Descrição: Desenvolvedor Back-end, Front-end e Mobile',
    'Site: http://alissondeandradearaujo.000webhostapp.com/',
    'Currículo Lattes: http://lattes.cnpq.br/7594653859194302/',
    'Github: https://github.com/alissonandrade2020',
    'Rocketseat: https://app.rocketseat.com.br/me/alissondeandradearaujo',
    'Linkedin: https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190/',
  ]
})

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })
