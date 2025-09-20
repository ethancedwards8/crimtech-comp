# CrimTech Comp Fall 2025

This repository is Ethan's submission for the CrimTech Fall 2025
Comp and is not meant for public use. Copyright 2025 and all rights reserved.

# Go server

Relied on: https://connectrpc.com/docs/go/getting-started/

# Takeaways

As someone who had no experience in go/protobuf/grpc, this was a
new challenge for me. Thankfully, having a systems background,
most of the concepts in Go were familiar to me and I just had to
learn the (somewhat weird, imo) syntax. The protobuf/grpc stuff
was much harder. I had issues with the tooling and had to follow the
guide linked above with buf. Once I figured it out, I was set.

Svelte was similar. I have lots of js experience and generally consider
myself proficient, but I have never used svelte specifically. Most of
my experience is with react/next. I had the help of Claude to figure
out the specifics of loading the .proto file and creating the connection.

The point of this exercise was to expose ourselves to these technologies.
For that reason, the UI is fairly barebones.

I did want to point out that the shell.nix in the repo's root is part of
the NixOS/Nix/Nixpkgs ecosystem and allows for declarative dependency
management. My internship this summer was with the NixOS Foundation
and I did work on it. I'm a big proponent of it (and I would be more than
happy to discuss it further).

# Testing

To run/test the project, first start the server:

```bash
cd server
go run cmd/server/main.go
```

Then, start the client:

```bash
pnpm run dev
```

Then navigate to `http://localhost:5173/` in a browser. From there,
you should be able to increment the count with the button :).
