import app, { httpServer, httpsServer } from './app'

httpServer.listen(3334)
httpsServer.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`)
})

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on PORT ${process.env.PORT}`)
// })
