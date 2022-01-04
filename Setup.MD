# install required package

npm i express dotenv

npm i module-alias

npm i mongoose compression cors morgan helmet

# package to validate environment variables

npm i envalid

# install the validation package

npm i joi

#install the package for generating token and hash password

npm i jsonwebtoken bcrypt

# install dependencies package

npm i -D typescript tsc-watch eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node @types/express @types/compression @types/cors @types/morgan @types/jsonwebtoken @types/bcrypt

# create typescript config file and update base url and add to path section

npx tsc --init

```Json
  "outDir": "dist"
  "baseUrl": "./src" /* Specify the base directory to resolve non-relative module names. */,
    "paths": {
      "@/resources/*": ["resources/*"],
      "@/utils/*": ["utils/*"],
      "@/middleware/*": ["middleware/*"]
    } /* Specify a set of entries that re-map imports to additional lookup locations. */,
```

# create ESLint config file

touch .eslintrc.js

```Json
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {},
};

```

# create prettier config file

touch .prettierrc.js

```Json
  module.exports = {
  tabWidth: 4,
  singleQuote: true,
  semi: true,
};

```

# add module alias to package.json file

```json
    "_moduleAlias": {
        "@/resources": "dist/resources",
        "@/utils": "dist/utils/",
        "@/middleware": "dist/middleware/"
    }
```
