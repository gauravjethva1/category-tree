import app from 'app'

import http from 'http'

const server = http.createServer(app)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('* * * * * * * * * * * * * * * * * * * *')
  console.log('*   Server Started')
  console.log(`*   Port     : ${PORT || 3000}`)
  console.log(`*   Listening on http://localhost:${PORT}`)
  console.log('* * * * * * * * * * * * * * * * * * * *\n')
})
