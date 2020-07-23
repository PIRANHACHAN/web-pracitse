;(function () {
  const template = `
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?"
    @keydown.enter="handleNewTodoKeydown"
    autofocus
    />
  </header>
  `
  window.todoHeader = {
    template,
    methods: {
      handleNewTodoKeydown(e) {
        let titleText = e.target.value.trim()
        if (!titleText.length) {
          return
        }
        this.$emit('addTodo', titleText)
        e.target.value = ''
      },
    },
  }
})()
