;(function () {
  const template = `
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li v-for="item in todos">
          <div class="view">
            <input class="toggle" type="checkbox">
            <label>{{ item.title }}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Rule the web">
        </li>
      </ul>
    </section>
    `
  window.todoList = {
    template,
    props: ['todos'],
    data() {
      return {
        //
      }
    },
  }
})()
