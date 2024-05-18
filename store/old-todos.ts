import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {

  state: () => ({
    todos: [] as any,
  }),

  actions: {
    async fetchTodos() {
      // const { data }: any = await useFetch('https://jsonplaceholder.typicode.com/todos');
      const { data }: any = await useFetch('http://localhost:8000/todos');
      if(data.value) {
        console.log(data.value.todos)
        this.todos = data.value.todos
      }
    },
    async addTodo(newTodo: { id: number; title: string; completed: boolean }) {
      try {
        const { data }: any = await useFetch('http://localhost:8000/todos', {
          method: 'POST',
          body: JSON.stringify(newTodo),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (data.value) {
          this.todos.push(data.value.todo);
        }
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    },
  },
})

