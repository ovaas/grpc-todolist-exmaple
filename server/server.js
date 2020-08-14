const todoProtoPath = './todo.proto';

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

let Todos = [];

const addTodo = (call, callback) => {
  const todoObject = {
    id: uuidv4(),
    task: call.request.task,
  };
  console.log(call.request);
  Todos.push(todoObject);
  console.log(`Todo: ${todoObject.id} added!`);
  callback(null, todoObject);
};

const getTodos = (call, callback) => {
  console.log('Get tasks');
  console.log(Todos);
  callback(null, { todos: Todos });
};

const deleteTodo = (call, callback) => {
  Todos = Todos.filter((todo) => todo.id !== call.request.id);
  console.log(`Todo: ${call.request.id} deleted`);
  callback(null, { message: 'Success' });
};

const getServer = () => {
  const server = new grpc.Server();
  server.addService(todoProto.todoService.service,
    { addTodo, getTodos, deleteTodo });
  return server;
};

if (require.main === module) {
  const server = getServer();
  server.bind('0.0.0.0:9090', grpc.ServerCredentials.createInsecure());
  console.log('Server running at port: 9090');
  server.start();
}
