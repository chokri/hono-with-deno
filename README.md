# Simple Deno using Hono

[![Deno](https://github.com/chokri/hono-with-deno/actions/workflows/deno.yml/badge.svg)](https://github.com/chokri/hono-with-deno/actions/workflows/deno.yml)

This repository contains a simple Deno application that utilizes Hono. Hono is a
lightweight framework for building web servers in Deno. Follow the instructions
below to run, test, and build the application.

## Run

To run the application, execute the following command in your terminal:

```shell
deno task dev --allow-net
```

This command starts the development server and allows network access
(`--allow-net` flag) for the application.

## Test

To run the tests for the application, use the following command:

```shell
deno task test
```

This command executes the test suite and provides feedback on the application's
functionality.

## Build

To build the application, run the following command:

```shell
deno task build
```

The output of the build process is a binary file. To start the server, simply
run the following command:

```shell
./dist/out
```

This command launches the server, making the application accessible.

Feel free to customize and modify this application according to your needs. If
you encounter any issues or have suggestions, please submit an issue or pull
request. Enjoy using Simple Deno with Hono!
