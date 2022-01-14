export default {
  data() {
    return {
    names: ['Vlad', 'Max', 'Elena', 'Slava'],
    searchName: ''
    }
  },
    computed: {
      filteredNames() {
        return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
}