import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodosStore = defineStore(
  'todos-store',
  () => {
    // -------------- //
    //     STATES     //
    // -------------- //
    const todos = ref([])

    // --------------- //
    //     ACTIONS     //
    // --------------- //

    // Fetch todos // Use the API to get all the todos
    const fetchTodos = async () => {
      try {
        const { data }: any = await useFetch('http://localhost:8000/todos')
        if (data.value) {
          // if we got the data back, store it in our state
          todos.value = data.value.todos
        }
      } catch (error) {
        // TODO: Need to surface this to the user
        console.error('Error fetching todos:', error)
      }
    }

    // Add todo // Use the API to add a new todo
    const addTodo = async (newTodo: { id: number; title: string; completed: boolean }) => {
      try {
        // NOTE: $fetch returns data differently from useFetch
        const  data : any = await $fetch('http://localhost:8000/todos', {
          method: 'POST',
          body: JSON.stringify( newTodo ),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      
        if (data) {
          // If the post is suscessful API will return the todo just added
          // We will add it to our state also
          todos.value.push(data.todo)
        }
        
      } catch (error) {
        console.error('Error adding todo:', error)
      }
    }

    // Update todo
    const updateTodo = async (todo: { id: number; title: string; completed: boolean }) => {
      try {
        // NOTE: $fetch returns data differently from useFetch
        const data: any = await $fetch(`http://localhost:8000/todos/${todo.id}`, {
          method: 'PUT',
          body: JSON.stringify( todo ),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (data) {
          const index = todos.value.findIndex((t: any) => t.id === todo.id)
          if (index !== -1) {
            todos.value[index] = data.todo
          }
        }
      } catch (error) {
        console.error('Error updating todo:', error)
      }
    }

    // Delete todo
    const deleteTodo = async (todoId: number) => {
      try {
        await $fetch(`http://localhost:8000/todos/${todoId}`, {
          method: 'DELETE',
        })
        todos.value = todos.value.filter((todo: any) => todo.id !== todoId)
      } catch (error) {
        console.error('Error deleting todo:', error)
      }
    }

    // --------------- //
    //     RETURNS     //
    // --------------- //
    return {
      todos,
      fetchTodos,
      addTodo,
      updateTodo,
      deleteTodo,
    }
  }
)