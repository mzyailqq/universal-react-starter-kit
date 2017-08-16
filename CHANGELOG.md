# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.1.0"></a>
# [1.1.0](https://github.com/zhongzhi107/universal-react-starter-kit/compare/v1.0.0...v1.1.0) (2017-06-09)


### Bug Fixes

* Fix miss .env error if .env not exists ([020432c](https://github.com/zhongzhi107/universal-react-starter-kit/commit/020432c))
* Fix unknown plugin "react-hot-loader/babel" ([ccc8ec5](https://github.com/zhongzhi107/universal-react-starter-kit/commit/ccc8ec5))
* Fixed New Deprecation Warnings where react version >= 15.5 ([c53a97f](https://github.com/zhongzhi107/universal-react-starter-kit/commit/c53a97f))
* Fixed not found favicon_16.png ([5945b4d](https://github.com/zhongzhi107/universal-react-starter-kit/commit/5945b4d))
* Move NODE_PATH from .env to package.json ([baa6f87](https://github.com/zhongzhi107/universal-react-starter-kit/commit/baa6f87))


### Features

* Add socket support ([7624515](https://github.com/zhongzhi107/universal-react-starter-kit/commit/7624515))
* Added all bootstrap styles into web page header,  it can smoothen the initial style flash on page load in development mode ([965dfcc](https://github.com/zhongzhi107/universal-react-starter-kit/commit/965dfcc))
* Added config option  `__DISABLE_HMR__`, which can disable hot-module-replace ([0448eb3](https://github.com/zhongzhi107/universal-react-starter-kit/commit/0448eb3))
* Added fontOutputDirectory build option ([ccdf5bf](https://github.com/zhongzhi107/universal-react-starter-kit/commit/ccdf5bf))
* Compress middleware for Koa ([4a891e3](https://github.com/zhongzhi107/universal-react-starter-kit/commit/4a891e3))
* Disabled file-loader date-url function ([5d901c1](https://github.com/zhongzhi107/universal-react-starter-kit/commit/5d901c1))
* Disabled source map ([5cb6fd9](https://github.com/zhongzhi107/universal-react-starter-kit/commit/5cb6fd9))
* react-hot-loader ([b5cd749](https://github.com/zhongzhi107/universal-react-starter-kit/commit/b5cd749))
* **i18n:** Added react-intl to dependencies, which support ([d3eff91](https://github.com/zhongzhi107/universal-react-starter-kit/commit/d3eff91))
* **styleLint:** Ignore Pseudo Classes : global which uses by CSS Module ([96e1cae](https://github.com/zhongzhi107/universal-react-starter-kit/commit/96e1cae))
* Replaced webpack-hot-middleware & webpack-dev-middleware with koa-webpack, which has better compatibility ([38c9cf6](https://github.com/zhongzhi107/universal-react-starter-kit/commit/38c9cf6))
* Rule.query only exists for compatibility reasons. Use Rule.options instead. ([661a1dc](https://github.com/zhongzhi107/universal-react-starter-kit/commit/661a1dc))
* Updated manifest.json when it's content be changed ([ca7a63a](https://github.com/zhongzhi107/universal-react-starter-kit/commit/ca7a63a))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/zhongzhi107/universal-react-starter-kit/compare/v0.6.0...v1.0.0) (2017-03-08)


### Bug Fixes

* **build:** Fix chunk file name output path ([145e039](https://github.com/zhongzhi107/universal-react-starter-kit/commit/145e039))
* **build:** os.hostname syntax error ([89193dd](https://github.com/zhongzhi107/universal-react-starter-kit/commit/89193dd))
* Enable dll plugin and check manifest file when yarn run serve ([07cf0aa](https://github.com/zhongzhi107/universal-react-starter-kit/commit/07cf0aa))
* NPM install ([535c45a](https://github.com/zhongzhi107/universal-react-starter-kit/commit/535c45a))
* Remove OfflinePlugin warning ([56ad7ce](https://github.com/zhongzhi107/universal-react-starter-kit/commit/56ad7ce))
* Skip `npm run dll` on APPVYR-WIN ([1190d82](https://github.com/zhongzhi107/universal-react-starter-kit/commit/1190d82))
* syntax error ([b44ae49](https://github.com/zhongzhi107/universal-react-starter-kit/commit/b44ae49))


### Features

* **build:** Add CDN_root environment variables for front-end and back-end resource deployment ([297b6c5](https://github.com/zhongzhi107/universal-react-starter-kit/commit/297b6c5))
* Loads environment variables from .env for nodejs projects ([3abde65](https://github.com/zhongzhi107/universal-react-starter-kit/commit/3abde65))
* Set proxy rules in config files ([0851a16](https://github.com/zhongzhi107/universal-react-starter-kit/commit/0851a16))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/zhongzhi107/universal-react-starter-kit/compare/v0.5.1...v0.6.0) (2017-02-22)


### Bug Fixes

* **build:** Fixed path error when copy static files to dist directory ([478fbfe](https://github.com/zhongzhi107/universal-react-starter-kit/commit/478fbfe))


### Features

* **eslint:** Enable require-jsdoc option to make sure that the comments conform to the JSDoc specification ([d73854a](https://github.com/zhongzhi107/universal-react-starter-kit/commit/d73854a))


### Performance Improvements

* **build:** Using DllPlugin to improve compiler performance ([ba0b4f8](https://github.com/zhongzhi107/universal-react-starter-kit/commit/ba0b4f8))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/zhongzhi107/universal-react-starter-kit/compare/v0.5.0...v0.5.1) (2017-02-22)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/zhongzhi107/universal-react-starter-kit/compare/v0.4.1...v0.5.0) (2017-02-21)


### Bug Fixes

* **config:** Enable CSS Modules when webpack build ([9cda8ad](https://github.com/zhongzhi107/universal-react-starter-kit/commit/9cda8ad))


### Features

* **logs:** Morgan the HTTP request logger for server side debugging ([9d64a75](https://github.com/zhongzhi107/universal-react-starter-kit/commit/9d64a75))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/zhongzhi107/universal-react-starter-kit/compare/v0.4.0...v0.4.1) (2017-02-20)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/zhongzhi107/universal-react-starter-kit/compare/v0.3.0...v0.4.0) (2017-02-16)


### Features

* Add manifest.json from PWA ([d202a5c](https://github.com/zhongzhi107/universal-react-starter-kit/commit/d202a5c))
* Add some meta elements for PWA ([e029810](https://github.com/zhongzhi107/universal-react-starter-kit/commit/e029810))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/zhongzhi107/universal-react-starter-kit/compare/v0.2.0...v0.3.0) (2017-02-09)


### Features

* StyleLint to maintain a consistent css/less code style ([d3acb35](https://github.com/zhongzhi107/universal-react-starter-kit/commit/d3acb35))
* Use koa-favicon for serving a favicon ([93f2f57](https://github.com/zhongzhi107/universal-react-starter-kit/commit/93f2f57))


### Performance Improvements

* Added koa-json to make response more concise ([77a2ae9](https://github.com/zhongzhi107/universal-react-starter-kit/commit/77a2ae9))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/zhongzhi107/universal-react-starter-kit/compare/v0.1.2...v0.2.0) (2017-02-07)


### Features

* Replace express with koa2 ([d8707a0](https://github.com/zhongzhi107/universal-react-starter-kit/commit/d8707a0))
* Replace express with koa2 ([0d4c73d](https://github.com/zhongzhi107/universal-react-starter-kit/commit/0d4c73d))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/zhongzhi107/react-universal-starter-kit/compare/v0.1.1...v0.1.2) (2017-02-06)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/zhongzhi107/react-universal-starter-kit/compare/v0.1.0...v0.1.1) (2017-02-06)



<a name="0.1.0"></a>
# [0.1.0](https://github.com/zhongzhi107/react-universal-starter-kit/compare/v0.0.2...v0.1.0) (2017-02-06)


### Bug Fixes

* Each child in an array or iterator should have a unique "key" prop ([95e0d29](https://github.com/zhongzhi107/react-universal-starter-kit/commit/95e0d29))
* titleTemplate ([9bc24df](https://github.com/zhongzhi107/react-universal-starter-kit/commit/9bc24df))


### Features

* Add urlStrictEqual parameter to set url match type ([d5b9787](https://github.com/zhongzhi107/react-universal-starter-kit/commit/d5b9787))
* auto open Chrome window when service start ([ab8afa1](https://github.com/zhongzhi107/react-universal-starter-kit/commit/ab8afa1))
* Config files support ES6 syntax ([edf7685](https://github.com/zhongzhi107/react-universal-starter-kit/commit/edf7685))
* Optimize image with image-webpack-loader ([16decde](https://github.com/zhongzhi107/react-universal-starter-kit/commit/16decde))
* PWA support ([54edfe5](https://github.com/zhongzhi107/react-universal-starter-kit/commit/54edfe5))
* Replace Expressjs with Koajs in watch-client script ([04cb378](https://github.com/zhongzhi107/react-universal-starter-kit/commit/04cb378))
* Split vendor's libraries from client bundle ([905d6c1](https://github.com/zhongzhi107/react-universal-starter-kit/commit/905d6c1))


### Performance Improvements

* Update import order ([7d2bb01](https://github.com/zhongzhi107/react-universal-starter-kit/commit/7d2bb01))
