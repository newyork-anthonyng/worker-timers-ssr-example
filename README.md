This is an example showing how to use [worker-timers](https://github.com/chrisguttandin/worker-timers) on server-side rendered code. This example uses webpack, express and React.

See this [issue](https://github.com/chrisguttandin/worker-timers/issues/134) for more context.

# Getting started
```
npm install

npm run build

npm start
```

# Explanation
`worker-timers` uses `Blob`, which is unavailable in a `Node` environment.

To fix this, we will use the [`NormalModuleReplacementPlugin`](https://webpack.js.org/plugins/normal-module-replacement-plugin/) like so:

```js
// webpack.server.config.js

// ...
plugins: [
  new webpack.NormalModuleReplacementPlugin(
    /worker-timers$/,
    "./mock-worker-timers.js"
  )
]
```

This replaces any instances of `import workerTimers from "worker-timers"` with `import workerTimers from "./mock-worker-timers.js"`. Now on your server, your `mock-worker-timers` is used instead of the actual `worker-timers` module.