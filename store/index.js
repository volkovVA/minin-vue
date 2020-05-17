export const state = () => ({

})

export const actions = {
  SOCKET_newMessage (ctx, data) {
    // eslint-disable-next-line no-console
    console.log('Message received', data)
  }
}
