;(function () {
  const template = `
  <div>
    <section class="todoapp">
      <todoHeader v-on:addTodo="addTodo"></todoHeader>
      <todoList v-bind:todos="todos"></todoList>
      <todoFooter></todoFooter>
    </section>
    <appFooter></appFooter>
  </div>
  `
  const todos = [
    {
      id: 1,
      title: '吃饭',
      completed: true,
    },
    {
      id: 2,
      title: '睡觉',
      completed: true,
    },
    {
      id: 3,
      title: '打游戏',
      completed: false,
    },
  ]

  window.app = {
    template,
    components: {
      todoHeader,
      todoList,
      todoFooter,
      appFooter,
    },
    data() {
      return {
        todos,
      }
    },
    methods: {
      addTodo(titleText) {
        titleText = titleText.trim()
        if (!titleText.length) {
          return
        }
        const _todos = this.todos
        _todos.push({
          id: _todos.length ? _todos[_todos.length - 1].id + 1 : 1,
          title: titleText,
          completed: false,
        })
      },
    },
  }
})()
