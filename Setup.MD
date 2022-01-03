# install required package

npm i express dotenv

npm i module-alias

npm i mongoose compression cors morgan helmet

# package to validate environment variables

npm i envalid

# install the validation package

npm i joi

# install dependencies package

npm i -D typescript tsc-watch eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node @types/express @types/compression @types/cors @types/morgan

# create typescript config file and update base url and add to path section

npx tsc --init

```Json
  "baseUrl": "./src" /* Specify the base directory to resolve non-relative module names. */,
    "paths": {
      "@/resources/*": ["resources/*"],
      "@/utils/*": ["utils/*"],
      "@/middleware/*": ["middleware/*"]
    } /* Specify a set of entries that re-map imports to additional lookup locations. */,
```

# create ESLint config file

touch .eslintrc.js

# create prettier config file

touch .prettierrc.js

# add module alias to package.json file

```json
    "_moduleAlias": {
        "@/resources": "dist/resources",
        "@/utils": "dist/utils/",
        "@/middleware": "dist/middleware/"
    }
```
