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
    <div class="flex justify-center">
      <Button 
        class="mt-4 flex-2" 
        label="New Todo" 
        @click="addTodo" 
      />
      <Textarea 
        class="mt-4 ml-4 px-2 flex-1 bg-zinc-200 dark:bg-zinc-700 border-none" 
        v-model="newTodoTitle"
        @keyup.enter="addTodo"
        placeholder="Enter new task..."
      />
    </div>
  </div>
</template>

<script setup>
  import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';

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

  const updateCompleted = (updatedTodo) => {
    const index = todos.value.findIndex(todo => todo.id === updatedTodo.id)
    if (index !== -1) {
      todos.value[index].completed = updatedTodo.completed
    }
  }

  const deleteTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  const newTodoTitle = ref('')
  const addTodo = () => {
    todos.value.push({
      id: Date.now(),
      title: newTodoTitle.value,
      completed: false
    })
    newTodoTitle.value = ''
  }
</script>

<style>
  @import url("~/assets/css/base.css");
</style>