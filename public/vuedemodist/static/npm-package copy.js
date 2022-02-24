// package.json 是配置和描述如何与程序交互和运行的中心
// npm、yarn用它来识别你的项目并了解如何处理项目的依赖关系
// 它可以使 npm 可以启动项目、运行脚本、安装依赖项、发布到 NPM 注册表以及许多其他有用的任务

let packagejs = {
//////////////////////////////////////////////////////////////////////
// MARKS:基础信息类
//////////////////////////////////////////////////////////////////////
  /*
  // [IMPORTANT]: [必填]： 项目名
  模块名会成为模块 url、命令行中的一个参数或者一个文件夹名称，任何非 url 安全的字符在模块名中都不能使用
    1.语义化模块名
    2.它不能超过214个字符且只能是小写字母，若模块名称中存在一些符号，将符号去除后不得与现有的模块名重复
      例如：由于 react-router-dom 已经存在，react.router.dom、reactrouterdom 都不可以再创建。
    3.name 字段不能与其他模块名重复
      我们可以执行以下命令查看模块名是否已经被使用 npm view <packageName> 如果该模块名从未被使用过，则会抛出 404 错误
      或者我们可以使用 validate-npm-package-name 包来检测模块名是否合法
  */
  "name": "myvue",

  // [IMPORTANT]:[必填]：版本
  // npm 包中的模块版本都需要遵循 SemVer 规范，该规范的标准版本号采用 X.Y.Z 的格式。其中 X、Y 和 Z 均为非负的整数，且禁止在数字前方补零
      // X 是主版本号(major)：修改了不兼容的 API
      // Y 是次版本号(minor)：新增了向下兼容的功能
      // Z 为修订号(patch)：修正了向下兼容的问题
  // 当某个版本改动比较大、并非稳定而且可能无法满足预期的兼容性需求时，我们可能要先发布一个先行版本
  // 先行版本号可以加到主版本号.次版本号.修订号的后面，通过 - 号连接一连串以句点分隔的标识符和版本编译信息
      // 内部版本(alpha)
      // 公测版本(beta)
      // 正式版本的候选版本rc（即 Release candiate）
  // 查看版本
      // npm view <packageName> version # 查看某个模块的最新版本
      // npm view <packageName> versions # 查看某个模块的所有历史版本
  "version": "1.0.0", // 必填 版本

  // 关键字和描述
  // 字段用于给模块添加关键字，使用 npm 检索模块时，会对模块中的 description 字段和 keywords 字段进行匹配
  // 有利于增加我们模块的曝光率。
  "keywords": [],
  "description": "A Vue.js project",

  // author 只供一个人使用，contributors 则可以由多个人组成
  "author": "v_liyadong <v_liyadong@tal.com>", // 作者
  "contributors": [{
    "name": "Amber Matz",
    "email": "example@example.com",
    "url": "https://www.osiolabs.com/#team"
  }],

  // 该模块的主页
  "homepage": "http://ant.design/",
  // 记录项目代码所在的资源库。
    // 该字段是一个对象，用于定义源代码所在的 url 及其使用的版本控制系统的类型。
    // 对于开源项目，可能是以 Git 作为版本控制系统的 GitHub 或 Bitbucket
    // 需要注意的是 URL 字段的本意是指向可从中访问版本控制的位置，而不仅仅是指向已发布的代码库
    "repository": {
      "type": "git",
      "url": "https://github.com/osiolabs/example.git"
    },
  // 对你的模块存在疑问的人可以到这里提出问题
  "bugs": {
    "url": "https://github.com/ant-design/ant-design/issues"
  },

  // 协议
  // MIT：只要用户在项目副本中包含了版权声明和许可声明，他们就可以拿你的代码做任何想做的事情，你也无需承担任何责任。
  // Apache：类似于 MIT，同时还包含了贡献者向用户提供专利授权相关的条款。
  // GPL：修改项目代码的用户再次分发源码或二进制代码时，必须公布他的相关修改。
  // 如果你不想提供协议，或者明确不想授予使用私有或未发布的软件包的权限，则可以将 UNLICENSED 作为协议
  "license": "ISC",

//////////////////////////////////////////////////////////////////////
// MARKS: 依赖配置
//////////////////////////////////////////////////////////////////////
  // 安装项目依赖
  // npm install <package...> --save 写入 dependencies 属性
  // dependencies
      // 指定了项目运行所依赖的模块（生产环境使用），如 antd、 react、 moment等插件库
      // 它们是我们生产环境所需要的依赖项，在把项目作为一个 npm 包的时候，用户安装 npm 包时只会安装 dependencies 里面的依赖。
      "dependencies": { 
        "vue": "^2.5.2",
        "vue-router": "^3.0.1"
      },
      // npm install <package...> --save-dev 写入 devDependencies 属性
      // devDependencies
          // 字段指定了项目开发所需要的模块（开发环境使用），如 webpack、typescript、babel等
          // 在代码打包提交线上时，我们并不需要这些工具，所以我们将它放入 devDependencies 中
      "devDependencies": {
        "autoprefixer": "^7.1.2",
        "babel-core": "^6.22.1",
        "babel-helper-vue-jsx-merge-props": "^2.0.3",
        "babel-loader": "^7.1.1"
      },
      
//////////////////////////////////////////////////////////////////////
// MARKS:配置入口类
//////////////////////////////////////////////////////////////////////
// 用来指定加载的入口文件
// 你的项目是一个 npm 包，当用户安装你的包后，require('my-module') 返回的是 main 字段中所列出文件的 module.exports 属性
// 默认值是模块根目录下面的index.js 文件
// 如何选择看这个链接 https://www.cnblogs.com/qianxiaox/p/14041717.html 
  "main":"src/index.js",
  "module": "lib/index.mjs", // module
  "browser": {// browser 可定义成和 main/module 字段一一对应的映射对象，也可以直接定义为字符串
    "./lib/index.js": "./lib/index.browser.js", // browser+cjs
    "./lib/index.mjs": "./lib/index.browser.mjs"  // browser+mjs
  },

// 钩子脚本在组织脚本流程时非常好用！
//   pre：在一个script执行前执行，比如prebuild，可以在打包前做一些准备工作。
//   post：在一个script执行后执行，比如postbuild，可以在打包后做一些收尾工作。
  "scripts": { // 指定运行脚本命令的 npm 命令行缩写
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js",
    "startRun": 'node node_modules/.bin/my-app-cli'
  },

  // 用来指定各个内部命令对应的可执行文件的位置
  // 为什么安装脚手架可以使用vue create/create-react-app之类的命令?
  // 提供了 bin 字段后，即相当于做了一个命令名和本地文件名的映射
      // 如果是全局安装，npm 将会使用符号链接把这些文件链接到/usr/local/node_modules/.bin/；
      // 如果是本地安装，会链接到./node_modules/.bin/
  // 如果要使用 my-app-cli 作为命令时，可执行文件为 bin 子目录下的 cli.js

  // 在这个包被 install 安装时，如果是全局安装 -g，bin 列出的可执行文件会被添加到 PATH 变量（全局可执行）
  // 如果是局部安装，则会进入到 node_modules/.bin/ 目录下
  // 在开发 npm 包时，要求发布的可执行脚本要以#!/usr/bin/env node开头
  // 是为了用于指明该脚本文件要使用 node 来执行
  "bin": {
    "my-app-cli": "./bin/cli.js"
  },

// 可以在脚本中通过npm_package_config_xxx 的形式引用
  "config": {
    "port": "8080"
  },
  // 用于描述我们使用 npm publish 命令后推送到 npm 服务器的文件列表，如果指定文件夹，则文件夹内的所有内容都会包含进来
  // 比如antd 的 package.json 的files 字段如下，antd 包就是只有这三个目录
  // 我们还可以通过配置一个 .npmignore 文件来排除一些文件， 防止大量的垃圾文件推送到 npm 上
  "files": [
    "dist",
    "lib",
    "es"
  ],

//////////////////////////////////////////////////////////////////////
// MARKS:限制类
//////////////////////////////////////////////////////////////////////
  
  // 一般公司的非开源项目，都会设置 private 属性的值为 true，这是因为 npm 拒绝发布私有模块，通过设置该字段可以防止私有模块被无意间发布出去
  "private": true,

  // 指定模块适用系统
      // 假如我们开发了一个模块，只能跑在 darwin 系统下，我们需要保证 windows 用户不会安装到该模块，从而避免发生不必要的错误。
      // 可以指定模块适用系统的系统，或者指定不能安装的系统黑名单（当在系统黑名单中的系统中安装模块则会报错）
      // Tips：在 node 环境下可以使用 process.platform 来判断操作系统
  "os" : [ "darwin", "linux" ], // 适用系统
  "os" : [ "!win32" ], // 黑名单
  // 指定模块适用 cpu 架构
  // 我们可以用 cpu 字段更精准的限制用户安装环境
  // Tips：在 node 环境下可以使用 process.arch 来判断 cpu 架构。
  "cpu" : [ "x64", "ia32" ], // 适用 cpu
  "cpu" : [ "!arm", "!mips" ], // 黑名单

  // 指定项目 node 版本
  // 也可以指定适用的 npm 版本
  // 需要注意的是，engines属性仅起到一个说明的作用，当用户版本不符合指定值时也不影响依赖的安装。
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
