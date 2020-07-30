const path = require('path')
const shell = require('shelljs')
const rimraf = require('rimraf')

process.env.PATH += (path.delimiter + path.join(process.cwd(), 'node_modules', '.bin'))

const PROTO_DIR = path.join(__dirname, '../protos')
const MODEL_DIR = path.join(__dirname, '../deno-models')
const PROTOC_GEN_TS_PATH = path.join(__dirname, '../node_modules/.bin/protoc-gen-ts')

rimraf.sync(`${MODEL_DIR}/*`)

shell.exec('grpc_tools_node_protoc '
  + `--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" `
  + `--grpc_out="${MODEL_DIR}" `
  + `--js_out="import_style=commonjs,binary:${MODEL_DIR}" `
  + `--ts_out="${MODEL_DIR}" `
  + `--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto`)

shell.exec(`find ${MODEL_DIR} -name "*.ts" -exec sed -i '' s,'"'grpc'"','"'https://dev.jspm.io/grpc'"', {} +`)
shell.exec(`find ${MODEL_DIR} -name "*.ts" -exec sed -i '' s,'"'google-protobuf/google/protobuf/wrappers_pb'"','"'https://dev.jspm.io/google-protobuf/google/protobuf/wrappers_pb.js'"', {} +`)
shell.exec(`find ${MODEL_DIR} -name "*.ts" -exec sed -i '' s,'"'google-protobuf'"','"'https://dev.jspm.io/google-protobuf'"', {} +`)
shell.exec(`find ${MODEL_DIR} -name "*.ts" -exec sed -i '' s,pb'"',pb.d.ts'"', {} +`)
