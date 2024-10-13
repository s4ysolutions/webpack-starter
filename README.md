# webpack-starter

## What it contais

The starter template for all my React front-end repos. 

 - Webpack [configuraiton for typescript](https://github.com/s4ysolutions/webpack-starter/blob/238c84dd753e141c37e98f9d3db92bfe9b3367d1/webpack.config-common.cjs#L56C1-L76C51) translator;
 - Webpack configurations with the [common library](https://github.com/s4ysolutions/webpack-starter/blob/main/webpack.config-common.cjs) and [development](https://github.com/s4ysolutions/webpack-starter/blob/main/webpack.config-dev.cjs) and [production](https://github.com/s4ysolutions/webpack-starter/blob/main/webpack.config-prod.cjs) targets;
 - package.json with the scripts commands [dev/prod/stats/lint/test](https://github.com/s4ysolutions/webpack-starter/blob/238c84dd753e141c37e98f9d3db92bfe9b3367d1/package.json#L8C1-L15C5)
 - [tsconfig.json](https://github.com/s4ysolutions/webpack-starter/blob/main/tsconfig.json) carefully tailored to work flowlessly with typescript transpiling of .ts, .tsx source files and
   and mocha/jest tests usint ES6 modules;
- [.mocharc.json](https://github.com/s4ysolutions/webpack-starter/blob/main/.mocharc.json) with the setting allowing to write .ts tests with ES6 modules;
- [eslint.config.js](https://github.com/s4ysolutions/webpack-starter/blob/main/eslint.config.js) with the ts/tsx coding standards i follow in my projects
- [.editorconfig](https://github.com/s4ysolutions/webpack-starter/blob/main/.editorconfig) to share the coding standard setting across each IDE 

## Using
```shell
git clone https://github.com/s4ysolutions/webpack-starter
rm -rf .github
```
... make the changes
```shell
git init
git remote add ...
git push
```

## Included features

### Modules

`package.json` has `"type": "module"` and the project by default supports `import` directive
(ES6 modules).
This the reason while commonjs files must have `.cjs` extension.
