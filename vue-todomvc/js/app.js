;(function (window) {
  'use strict'

  Vue.directive('focus', {
    inserted: function (el) {
      el.focus()
    },
  })

  Vue.directive('todo-focus', {
    update: function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    },
  })

  window.app = new Vue({
    el: '#app',

    data: {
      todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
      currentEditing: null,
      filterText: 'all',
    },

    computed: {
      remainingCount: {
        get() {
          return this.todos.filter((todo) => !todo.completed).length
        },
      },

      toggleAllStat: {
        get() {
          return this.todos.every((todo) => todo.completed)
        },
        set() {
          const checked = !this.toggleAllStat
          this.todos.forEach((item) => {
            item.completed = checked
          })
        },
      },

      filterTodos() {
        switch (this.filterText) {
          case 'active':
            return this.todos.filter((todo) => !todo.completed)
            break
          case 'completed':
            return this.todos.filter((todo) => todo.completed)
            break
          default:
            return this.todos
            break
        }
      },
    },

    watch: {
      todos: {
        handler() {
          window.localStorage.setItem('todos', JSON.stringify(this.todos))
        },
        deep: true,
      },
    },

    methods: {
      handleNewTodoKeyDown(e) {
        const todoText = e.target.value.trim()
        if (!todoText.length) {
          return
        }
        const _todos = this.todos
        _todos.push({
          id: _todos.length ? _todos[_todos.length - 1].id + 1 : 1,
          title: todoText,
          completed: false,
        })
        e.target.value = ''
      },

      handleRemoveTodoClick(index, e) {
        this.todos.splice(index, 1)
      },

      handleGetEditingDblclick(item) {
        this.currentEditing = item
      },

      handleEditedTodoKeyDown(index, e) {
        const editedTodo = e.target.value.trim()
        if (!editedTodo) {
          this.todos.splice(index, 1)
          return
        }
        this.todos[index].title = editedTodo
        this.currentEditing = null
      },

      handleCancelEditTodoEsc() {
        this.currentEditing = null
      },

      handleCompletedTodoClick() {
        const _todos = this.todos
        for (let i = _todos.length - 1; i >= 0; i--) {
          if (_todos[i].completed) {
            _todos.splice(i, 1)
          }
        }
        //filter实现
        //this.todos = this.todos.filter((todo) => !todo.completed)
      },
    },
  })

  handleHashChange()

  window.onhashchange = handleHashChange

  function handleHashChange() {
    app.filterText = window.location.hash.substr(2)
  }
})(window)
