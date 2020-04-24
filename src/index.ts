import httpsServer from './app'

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on PORT ${process.env.PORT}`)
// })

// httpServer.listen(3334, () => {
//   console.log(`Server running on PORT ${process.env.PORT}`)
// })
httpsServer.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`)
})
