AlgoCode Evaluator Service is a service which leverages Express Framework and TypeScript

- TypeScript is wrapper over JavaScript and provides type safety features, similar to how C++/Java have types for variables

## How to setup a new TypeScript Express project


1. ```npm init -y```



2. ```npm i -D typescript```


3. ```npx tsc --init```

4. ```npm i concurrently```

5. Modify the `tsconfig.json` file to edit the rules

6. Add the following scripts in package.json

```
{
    "watch": "npx tsc -w",
    "start": "npx nodemon dist/index.js",
    "dev": "npx concurrently --kill-others \"npm run watch\" \"npm start\" "
}
```

7. ```npm run dev```