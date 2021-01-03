# Stats project

## Understanding the package.json scripts

Here are the scripts we are going to use

```
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

The first one, `"stat:build"`, runs the tsc compiler in watchmode with the `-w` flag.
The second one, `"start:run"`, runs nodemon so it runs the index.js file when a change is detected.
The last one is to run both of the above commands concurrently, that is, in the same time.
