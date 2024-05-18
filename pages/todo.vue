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

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useTodosStore } from '~/store/todos'

  const store = useTodosStore()

  const { fetchTodos } = store; // have all non reactiave stuff here
  const { todos } = storeToRefs(store); // have all reactive states here

  await fetchTodos();

  const updateCompleted = (updatedTodo) => {
    store.updateTodo(updatedTodo)
  }

  // const deleteTodo = (id) => {
  //   todos.value = todos.value.filter(todo => todo.id !== id)
  // }

  const deleteTodo = (id) => {
    store.deleteTodo(id)
  }

  const newTodoTitle = ref('')
  const addTodo = async () => {
    if (newTodoTitle.value.trim()) {
      await store.addTodo({
        id: Date.now(),
        title: newTodoTitle.value,
        completed: false
      })

      newTodoTitle.value = ''
    }
  }
</script>

<style>
  @import url("~/assets/css/base.css");
</style>