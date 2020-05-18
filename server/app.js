const app = require('express')()
// eslint-disable-next-line import/order
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const users = require('./users')()

const m = (name, text, id) => ({ name, text, id })

io.on('connection', (socket) => {
  socket.on('userJoined', (data, cb) => {
    if (!data.name || !data.room) {
      // eslint-disable-next-line standard/no-callback-literal
      return cb('Данные некорректны')
    }

    socket.join(data.room)

    users.remove(socket.id)
    users.add({
      id: socket.id,
      name: data.name,
      room: data.room
    })

    // eslint-disable-next-line standard/no-callback-literal
    cb({ userId: socket.id })
    socket.emit('newMessage', m('admin', `Добро пожаловать ${data.name}.`))
    socket.broadcast
      .to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашел.`))
  })

  socket.on('createMessage', (data, cb) => {
    if (!data.text) {
      return cb('Текст не может быть пустым')
    }

    const user = users.get(data.id)
    if (user) {
      io.to(user.room).emit('newMessage', m(user.name, data.text, data.id))
    }
    cb()
  })
})

module.exports = {
  app,
  server
}
