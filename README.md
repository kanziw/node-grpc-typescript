# node-grpc-typescript
Node.js gRPC Structure for TypeScript Example

### Installation
```sh
$ npm i
```

### Build
```sh
$ npm run build:proto # *.proto
$ npm run build # *.ts
```

### Server Start
```sh
$ node dist/server
# OR
$ npm start
```

### Client Test
```sh
# 1. Request
$ npm run client #= node dist/client
# 2. with Parameter
$ npm run client name [nickname]
# 3. Error
$ npm run client error
# 4. Health Check
$ npm run health
```

#### node_modules
[package.json](package.json)

##### Documentation
* [Node.js gRPC](https://grpc.io/grpc/node/grpc.html)
* [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/proto3?hl=ko#json)
* [TypeScript d.ts plugin for gRPC Tools](https://github.com/agreatfool/grpc_tools_node_protoc_ts)


## Deno implements

### Installation
```sh
$ brew install deno
```

### Build and Start

```sh
$ make build
$ make start
error: Uncaught Error: Node.js fs module is not supported by jspm core. Deno support here is tracking in https://github.com/jspm/jspm-core/issues/4, +1's are appreciated!
    at unimplemented (https://dev.jspm.io/npm:@jspm/core@1.1.1/nodelibs/fs.js:1:32)
    at Object.exports.find (https://dev.jspm.io/npm:node-pre-gyp@0.15.0/lib/pre-binding.dew.js:31:10)
    at dew (https://dev.jspm.io/npm:grpc@1.24.3/src/grpc_extension.dew.js:19:29)
    at dew (https://dev.jspm.io/npm:grpc@1.24.3/src/client_interceptors.dew.js:13:14)
    at dew (https://dev.jspm.io/npm:grpc@1.24.3/src/client.dew.js:16:29)
    at dew (https://dev.jspm.io/npm:grpc@1.24.3/index.dew.js:24:16)
    at https://dev.jspm.io/grpc:2:16
```
