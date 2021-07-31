# Code Challenge

## Project setup

```
npm install
```

## Create your `.env.local` file

Create a `.env` file in the root of your project and insert
your key/value pairs in the following format of `KEY=VALUE`. Remember that your key should start with `VUE_APP_`:
NODE_ENV indicates that the .env is run with development mode.

```sh
NODE_ENV=development
VUE_APP_I18N_LOCALE=en
VUE_APP_I18N_FALLBACK_LOCALE=en
VUE_APP_API_BASE_URL=https://testing-json-server.herokuapp.com/
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
