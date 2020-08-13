<template>
  <h1>Todo List gRPC Client</h1>
  <div>
    <input type="text">
    <button>Add Todo</button>
  </div>
  <ul class=" list-reset flex flex-col">
    <li class=" rounded-t relative -mb-px block border p-4 border-grey">Cras justo odio</li>
	</ul>
  {{ todos }}
</template>

<script>
import { ref } from 'vue'
import { getTodoParams, addTodoParams, deleteTodoParams } from "../todo_pb.js";
import { todoServiceClient } from "../todo_grpc_web_pb.js";
export default {
  setup() {
    const todos = ref([])
    const inputField = ref('')

    const client = new todoServiceClient("http://localhost:8080", null, null);

    const getTodos = () => {
      let getRequest = new getTodoParams();
      client.getTodos(getRequest, {}, (err, response) => {
        if (err) console.log(err);
        todos.value = response.toObject().todosList;
      });
    }

    getTodos()

    const addTodo = () => {
      let addRequest = new addTodoParams();
      addRequest.setTask(inputField);
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
