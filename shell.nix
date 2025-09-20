{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
      buf
      go
      nodejs
      pnpm
      protoc-gen-js
      protoc-gen-grpc-web
  ];
}

