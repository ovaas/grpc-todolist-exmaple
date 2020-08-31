/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.todo = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.todoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.todoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.addTodoParams,
 *   !proto.todo.todoObject>}
 */
const methodDescriptor_todoService_addTodo = new grpc.web.MethodDescriptor(
  '/todo.todoService/addTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.addTodoParams,
  proto.todo.todoObject,
  /**
   * @param {!proto.todo.addTodoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.todoObject.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.addTodoParams,
 *   !proto.todo.todoObject>}
 */
const methodInfo_todoService_addTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.todoObject,
  /**
   * @param {!proto.todo.addTodoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.todoObject.deserializeBinary
);


/**
 * @param {!proto.todo.addTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.todoObject)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.todoObject>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.todoServiceClient.prototype.addTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.todoService/addTodo',
      request,
      metadata || {},
      methodDescriptor_todoService_addTodo,
      callback);
};


/**
 * @param {!proto.todo.addTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.todoObject>}
 *     A native promise that resolves to the response
 */
proto.todo.todoServicePromiseClient.prototype.addTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.todoService/addTodo',
      request,
      metadata || {},
      methodDescriptor_todoService_addTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.deleteTodoParams,
 *   !proto.todo.deleteResponse>}
 */
const methodDescriptor_todoService_deleteTodo = new grpc.web.MethodDescriptor(
  '/todo.todoService/deleteTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.deleteTodoParams,
  proto.todo.deleteResponse,
  /**
   * @param {!proto.todo.deleteTodoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.deleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.deleteTodoParams,
 *   !proto.todo.deleteResponse>}
 */
const methodInfo_todoService_deleteTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.deleteResponse,
  /**
   * @param {!proto.todo.deleteTodoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.deleteResponse.deserializeBinary
);


/**
 * @param {!proto.todo.deleteTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.deleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.deleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.todoServiceClient.prototype.deleteTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.todoService/deleteTodo',
      request,
      metadata || {},
      methodDescriptor_todoService_deleteTodo,
      callback);
};


/**
 * @param {!proto.todo.deleteTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.deleteResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.todoServicePromiseClient.prototype.deleteTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.todoService/deleteTodo',
      request,
      metadata || {},
      methodDescriptor_todoService_deleteTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.getTodoParams,
 *   !proto.todo.todoResponse>}
 */
const methodDescriptor_todoService_getTodos = new grpc.web.MethodDescriptor(
  '/todo.todoService/getTodos',
  grpc.web.MethodType.UNARY,
  proto.todo.getTodoParams,
  proto.todo.todoResponse,
  /**
   * @param {!proto.todo.getTodoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.todoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.getTodoParams,
 *   !proto.todo.todoResponse>}
 */
const methodInfo_todoService_getTodos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.todoResponse,
  /**
   * @param {!proto.todo.getTodoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.todoResponse.deserializeBinary
);


/**
 * @param {!proto.todo.getTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.todoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.todoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.todoServiceClient.prototype.getTodos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.todoService/getTodos',
      request,
      metadata || {},
      methodDescriptor_todoService_getTodos,
      callback);
};


/**
 * @param {!proto.todo.getTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.todoResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.todoServicePromiseClient.prototype.getTodos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.todoService/getTodos',
      request,
      metadata || {},
      methodDescriptor_todoService_getTodos);
};


module.exports = proto.todo;

