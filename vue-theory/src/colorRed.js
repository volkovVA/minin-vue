export default {
  bind(el, bindings,vnode) {
    console.log('bind')
    el.style.color = 'red'
  },

  inserted(el, bindings, vnode) {
    console.log('inserted')
  },

  update(el, bindings, vnode, oldVnode) {
    console.log('update')
  },

  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log('componentUpdated')
  },

  unbind() {
    console.log('unbind')
  }
}