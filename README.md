# as-repro
Reproduces an issue with WASM crashing due to calling `assemblyscript-json`'s stringify method

Possibly related to a GC bug https://github.com/AssemblyScript/assemblyscript/issues/2178

To reproduce:
Run `yarn` to install dependencies
Run `yarn start`
