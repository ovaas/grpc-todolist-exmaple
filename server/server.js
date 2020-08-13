const todoProtoPath = '../proto/todo.proto';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { v4: uuidv4 } = require('uuid');

const packageDefinition = protoLoader.loadSync(
  todoProtoPath,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  },
);
const todoProto = grpc.loadPackageDefinition(packageDefinition).todo;

const Todos = [];

const addTodo = (call, callback) => {
  const todoObject = {
    id: uuidv4(),
    task: call.request.task,
  };
  Todos.push(todoObject);
  console.log(`Todo: ${todoObject.id} added!`);
  callback(null, todoObject);
};

const getTodos = (call, callback) => {
  console.log('Get tasks');
  callback(null, { Todos });
};

const deleteTodo = (call, callback) => {
  Todos.filter((todo) => todo.id !== call.request.id);
  console.log(`Todo: ${call.request.id} deleted`);
  callback(null, { message: 'Success' });
};

const main = () => {
  const server = new grpc.Server();
  server.addService(todoProto.todoService.service,
    { addTodo, getTodos, deleteTodo });
  server.bind('0.0.0.0:9090', grpc.ServerCredentials.createInsecure());
  server.start();
};

main();
