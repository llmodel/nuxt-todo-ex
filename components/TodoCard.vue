<template>
  <div class="todo-card p-4 mb-4 bg-zinc-200 dark:bg-zinc-700 rounded-lg shadow-md">
    <div class="flex items-center">
      <checkbox
        :binary="true"
        v-model="checkedState"
        @change="toggleComplete"
        class="mr-2"
      ></checkbox>
      <span :class="{ 'line-through': todo.completed }">{{ todo.title }}</span>
    </div>
    <button
      @click="deleteTodo"
      class="mt-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
    >
      Delete
    </button>
  </div>
</template>

<script setup>
  const props = defineProps({
    todo: {
      type: Object,
      required: true,
    },
  })

  const emit = defineEmits(['update:completed', 'delete'])

  // Make an reactive copy of the props.todo.completed property
  const checkedState = ref(props.todo.completed)

  const toggleComplete = () => {
    // the spread operator (...) allows us to make a copy of the todo object
    // Then toggles the completed property of the todo object with (!)
    // and emit an event with the updated todo object to the parent component
    emit('update:completed', { ...props.todo, completed: !props.todo.completed })
  }

  const deleteTodo = () => {
    // emit a 'delete' event, and pass back the id of the todo object to delete
    emit('delete', props.todo.id)
  }
  </script>

  <style scoped>
  .line-through {
    text-decoration: line-through;
  }
</style>
