proto-client:
	protoc -I proto todo.proto \
	--js_out=import_style=commonjs,binary:client/src \
	--grpc-web_out=import_style=commonjs,mode=grpcwebtext:client/src