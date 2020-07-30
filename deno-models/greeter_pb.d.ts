// package: greeter
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "https://dev.jspm.io/google-protobuf";
import * as google_protobuf_wrappers_pb from "https://dev.jspm.io/google-protobuf/google/protobuf/wrappers_pb.js";

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloRequest;


    hasNickname(): boolean;
    clearNickname(): void;
    getNickname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setNickname(value?: google_protobuf_wrappers_pb.StringValue): HelloRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
        nickname?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class HelloResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloResponse;


    hasNickname(): boolean;
    clearNickname(): void;
    getNickname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setNickname(value?: google_protobuf_wrappers_pb.StringValue): HelloResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloResponse;
    static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
    export type AsObject = {
        message: string,
        nickname?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}
