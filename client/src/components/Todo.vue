<template>
  <div class="w-1/4 mx-auto pt-20 text-center">
    <h1 class="text-2xl text-center font-bold">Todo List gRPC Client</h1>
    <div class="mt-10">
      <input type="text" v-model="inputField" class="appearance-none border rounded py-2 px-3 text-black mb-3 leading-tight outline-none bg-gray-400">
      <button class="btn ml-4" @click="addTodo(inputField)" @keyup.enter="addTodo(inputField)" :disabled="!inputField">Add Todo</button>
    </div>
    <ul class="flex flex-col mt-6 rounded-lg border divide-y divide-gray-400">
      <li class="block p-4 border-grey flex items-stretch" v-for="todo in todos" :key="todo.id">
        <p class="flex-1">{{todo.task}}</p>
        <div class="flex-none h-6 w-6 flex items-center justify-center hover:text-gray-600" @click="deleteTodo(todo)">
          <CloseIcon />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getTodoParams, addTodoParams, deleteTodoParams } from "../todo_pb.js";
import { todoServiceClient } from "../todo_grpc_web_pb.js";
import CloseIcon from './CloseIcon'
export default {
  components:{ CloseIcon },
  setup() {
    const todos = ref([])
    const inputField = ref('')

    const client = new todoServiceClient("http://localhost:8080", null, null);

    const getTodos = () => {
      let getRequest = new getTodoParams();
      client.getTodos(getRequest, {}, (err, response) => {
        if (err) console.log(err);
        console.log(response.toObject());
        todos.value = response.toObject().todosList;
      });
    }

    getTodos()

    const addTodo = () => {
      let addRequest = new addTodoParams();
      addRequest.setTask(inputField.value);
      client.addTodo(addRequest, {}, (err) => {
        if (err) console.log(err);
        inputField.value = "";
        getTodos();
      });
    }
    const deleteTodo = (todo) => {
      let deleteRequest = new deleteTodoParams();
      deleteRequest.setId(todo.id);
      client.deleteTodo(deleteRequest, {}, (err, response) => {
        if (err) console.log(err);
        if (response.getMessage() === "Success") {
          getTodos();
        }
      });
    }

    return {
      todos,
      inputField,
      addTodo,
      deleteTodo
    }
  }
}
</script>
