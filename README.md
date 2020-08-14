# gRPC API TodoList Example

## Build

### Build Docker Image
```
docker-compose build
```

### Rebuild Specific Docker Image

Service names:
front-end: web
proxy: proxy
back-end:server

```
docker-compose build --no-cache [service name]
```

### Run All Service
```
docker-compose up
```

### Run All Service in Background
```
docker-compose up -d
```
