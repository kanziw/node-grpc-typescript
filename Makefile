.PHONY: build
build:
	mkdir -p deno-models && node bin/deno-proto

.PHONY: start
start:
	deno run denoServer.ts
