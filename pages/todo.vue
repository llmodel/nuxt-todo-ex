<template>
  <div class="min-h-screen dark:text-gray-300 dark:bg-zinc-600">
    <h2 class="text-3xl">To Do</h2>
    
    <TodoCard
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @update:completed="updateCompleted"
      @delete="deleteTodo"
    />
    <div>
      <Checkbox :checked="checked" :binary="true" class="mr-2"/>
      <span>Test</span>
    </div>
  </div>
</template>

<script setup>
  import Checkbox from 'primevue/checkbox';

  const checked = ref(false);

  const todos = ref([
    {
      id: 1,
      title: 'Learn Nuxt 3',
      completed: true
    },
    {
      id: 2,
      title: 'Learn Pinia on Nuxt 3',
      completed: false
    }
  ]);

  // const updateCompleted = (id) => {
  //   console.log("Toggling todo with id: " + id)
    // toggle todo.completed value of the todo with id
    // todos.value = todos.value.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  // }

  const updateCompleted = (updatedTodo) => {
    const index = todos.value.findIndex(todo => todo.id === updatedTodo.id)
    if (index !== -1) {
      todos.value[index].completed = updatedTodo.completed
    }
  }

  const deleteTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }
</script>

<style>
  @import url("~/assets/css/base.css");
</style>