const app = require('express')()
// eslint-disable-next-line import/order
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  // eslint-disable-next-line no-console
  console.log('IO Connected')

  socket.on('createMessage', (data) => {
    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text + ' SERVER'
      })
    }, 1000)
  })
})

module.exports = {
  app, server
}
