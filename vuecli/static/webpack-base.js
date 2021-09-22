const path = require('path');
// 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
// 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
// 注意版本问题（ TypeError: Cannot read property 'tap' of undefined at HtmlWebpackPlugin）
const htmlWebpackplugin = require('html-webpack-plugin');
// 配合vue-loader使用. https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// -----------------------------------start-----------------------------------------------------
// 通过 Plugin 将注入 bundle.js 文件里的css 提取到单独的文件中，
// extract-text-webpack-plugin(默认v3.0.2)还不能支持webpack4.0.0以上的版本
// const ExtractTextPlugin = require ('extract-text-webpack-plugin') ;
// webpack4.0.0以上使用mini-css-extract-plugin,
// 文档地址：https://webpack.docschina.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// ------------------------------------end----------------------------------------------------

module.exports = {
  // 你可以启用相应模式下的 webpack 内置的优化
  mode: 'production', // mode/development/production
  // 设置webpack启动时的工作目录，默认是项目根目录，必须是绝对路径的字符串
  context: path.resolve(__dirname, ''),
  // ---------------------------------entry start ------------------------------
  // chunk: webpack会为每个生成的chunk取名，chunk名称和entry有关
  // entry为string、Array，chunk的名字是main,如果为Object，名字为key
  //1个入口，一个入口文件
  entry: './src/main.js',
  //只有1个入口，入口只有2个文件
  entry:['./src/entry1', './src/entry2'],
  //有两个入口
  entry:{
    a: './src/entry-a',
    b: ['./src/entry-b1', './app/entry-b2']
  },
  // 动态配置：假如要动态的为每个页面的入口配置一个entry,这些页面的数量会动态增加
  entry: ()=>{// 同步
    //........
    return {
      a: './pages/a',
      b: './pages/b'
    }
  },
  entry: ()=>{// 异步
    // .........
    return new Promise((resolve)=>{
      resolve({
        a: './pages/a',
        b: './pages/b'
      })
    })
  },
  // ---------------------------------entry end ------------------------------
  performance: {
    hints: "warning", // 枚举
    hints: "error", // 性能提示中抛出错误
    hints: false, // 关闭性能提示
    maxAssetSize: 200000, // 整数类型（以字节为单位）
    maxEntrypointSize: 400000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  //-----------------------output start------------------------------------
  output: {
    // 只有一个输出文件，将所有依赖的模块合并输出到一个 bundle.js 文件中
    filename: 'bundle.js',
    // 多个chunk：// webpack为chunk生成的名字（内置变量：id、hash、name、chunkhash,hash、chunkhash可以指定长度，默认20位）
    filename: `[name]_[chunkhash:8].js`,
    // 将输出文件都放到 dist 目录下
    // chunkFilename: '',// 无入口的chunk在输出时的文件名称，
    path: path.resolve(__dirname, './dist'),//绝对路径
    // 线上的文件访问：<script src="https//cdn.example.com／a_12345678.js"></script>
    // 配置发布到线上资源的url前缀，相对路径
    publicPath: 'https//cdn.example.com／',
    // 导出库的名称为string 类型,不填它时，默认的输出格式是匿名的立即执行函数
    library:'MyLibrary',
    // 导出库的类型，为枚举类型，默认是 var
    // 可以是 umd umd2 commonjs2 commonjs amd this var assign window global jsonp
    libraryTarget: 'umd',
    // 以下为高级配置
    //是否包含有用的文件路径信息到生成的代码里 ，为 boolean 类型
    // webpack 在 bundle 中引入「所包含模块信息」的相关注释
    pathinfo: true,
    // 配置异步插入的js文件的crossorigin // 通常用来获取异步加载脚本时的详细错误信息
        // - anonymous[默认加载此脚本不带用户的cookies]
        // - use-credentials[带用户cookies]
    crossOriginLoading: '',
  },
  //-----------------------output end------------------------------------
  // 查找模块的规则
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@component": path.resolve("src/component"),
      // "@pages": path.resolve("src/pages"),
      // "@utils": path.resolve("src/utils"),
    },
    // 导入文件没有后缀名，webpack会自动带上后缀尝试访问文件是否存在，extensions就是后缀列表
    // 默认值是[“”, “.webpack.js”, “.web.js”, “.js”]//按照数组顺序
    extensions: ['.vue', '.js', '.json', '.css'],
    // 被导入的文件是否需要带后缀名
    enforceExtension: false,//
    // 只对node_modules有效，因为第三方模块中的导入语句都没有带后缀，如果enforceExtension设置为true,需要设置enforceModuleExtension为false兼容第三方模块
    enforceModuleExtension: false,
    // 去哪些目录下查找第三方模块
    modules: [path.resolve(__dirname, 'src/components'), 'node_modules'],//按照数组顺序
    // 第三方模块的描述文件，默认'package.json'
    descriptionFiles: ['package.json'],
  },
  module: {
    // 只使用这些嵌套规则之一
    oneOf:[],
    // 使用所有这些嵌套规则（合并可用条件
    rules:[],
    // 仅当所有条件都匹配时才匹配
    resource: { and: [ /* 条件 */ ] },
    // 任意条件匹配时匹配（默认为数组）
    resource: { or: [ /* 条件 */ ] },
    resource: [ /* 条件 */ ],
    // 条件不匹配时匹配
    resource: { not: [/* 条件 */]},
    // loader文档：https://webpack.docschina.org/concepts/loaders/#root
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,//不包含
        include: path.resolve(__dirname, 'src'),//只编译src文件夹下的js文件
        loader: 'babel-loader',  //babel-loader:babel和webpack中间的桥梁
        options: {
          // 设置这个预设，会根据浏览器选择插件转化ES5（使用的node版本与它的可使用版本也有关系限制）
          "presets": ["@babel/preset-env"],
          //缓存babel编译结果
          "cacheDirectory": true,
          // 默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果。之后的 webpack 构建将会尝试读取缓存来避免在每次执行时产生的高性能消耗的 Babel 重新编译过程
          // 如果设置了一个空值 (loader: 'babel-loader?cacheDirectory') 或者 true (loader: babel-loader?cacheDirectory=true)，loader 将使用默认的缓存目录 node_modules/.cache/babel-loader
          // 如果在任何根目录下都没有找到 node_modules 目录，将会降级回退到操作系统默认的临时文件目录。
        },
        // 忽略没有使用模块化的文件的递归解析和处理，提高构建性能,被忽略的文件不应该包含import、require、define等模块化语句，否则构建出的代码在浏览器运行报错
          // - post: 强制将该loader执行顺序放到最后
          // - pre: 强制将该loader放到最前面
        enforce: 'post',
        // noParse配置的是哪些文件不被解析
        noParse: /jquery|chartjs|lodash/,//类型 RegExp、[RegExp]、function
        noParse: (content)=> {
          // content代码一个模块的文件路径
          // 返回true或者false
          return /jquery|chartjs/.test(content);    
        },
        // parser配置的是哪些语法可以解析
        parser: {
          amd: false,
          commonjs: false,
          system: false,
          harmony: false,//禁用es6的import、export
          requireInclude: false,
          requireEnsure: false,
          requireContext: false,
          browserify: false,
          requireJs: false,
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        // 1.
        use: ['style-loader', 'css-loader'],
        // 2.配置参数
        use: [
          'style-loader',
          {
              loader: 'css-loader',
              options: {
                  minimize:true,
              }
          }
        ],
        // 3. 
        use: [
          {
            // webpack4以下使用
            loaders: ExtractTextPlugin.extract({
              use: ['css-loader'],//转换 .css 文件需要使用的 Loader
            }),
            // webpack4以上使用
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: "url-loader?limit=8000"    // 有limit需要使用url-loader，没有limit可以使用url-loader或file-loader    limit限制单位为 b
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    //创建一个在内存中生成的html页面的插件
    new htmlWebpackplugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html',
      url: '/',
      title: 'webpack demo'
    }),
    // webpack3使用vue-loader,webpack4配合VueLoaderPlugin使用
    new VueLoaderPlugin(), 
    // // 将css从.js提取到单独的样式文件
    new ExtractTextPlugin({
      //从.js 文件中提取出来的 .css 文件的名称
      //使用contenthash而不使用chunkhash，是因为ExtractTextWebpackPlugin提取出来的是代码内容本身，而不是模块组成的chunk
      filename:`[name]_[contenthash:8].css`,
    }),
    // ----------------------------------------start------------------------------------------------
    // 通常用在production环境，development 通常使用style-loader
    new MiniCssExtractPlugin({
      filename: "css/[name][chunkhash].css",
      //类型：String|Function 默认值：[name].css
      filename: `[name]`.css,
      // 类型：String|Function,将 chunkFilename 设置为 function，仅在 webpack@5 下可用。
      chunkFilename: `[id].css`,
      // 类型：Boolean 默认值：false,忽略有关顺序冲突的警告 ,对于通过使用 scoping 或命名约定来解决 css order 的项目，可以通过将插件的 ignoreOrder 选项设置为 true 来禁用 css order 警告。
      ignoreOrder: 'true',
      // 类型：String|Function 默认值：document.head.appendChild(linkTag);找到 id 为 some-element 的元素，在它之后插入新的 <link> 元素。
      insert: '#some-element',
      insert: function (linkTag) {
        var reference = document.querySelector('#some-element');
        if (reference) {
            reference.parentNode.insertBefore(linkTag, reference);
        }
      },
      //类型：String|Boolean 默认值：text/css,此选项运行使用自定义链接类型加载异步 chunk，例如 <link type="text/css" ...>;false 禁用 link 的 type 属性
      linkType: 'text/css',
      //类型：String|Function 默认值：webpackOptions.output 选项中的 publicPath为 CSS 内的图片、文件等外部资源指定一个自定义的公共路径
      publicPath: '/public/path/to/',
    }),
    // -----------------------------------------end-----------------------------------------------

  ],
  //
  devServer: {
    // 配置 DevServer HTTP 服务器的文件根目录 默认情况下为当前执行目录，通常是项目根目录，所有一般情况下你不必设置它，除非你有额外的文件需要被 DevServer 服务
    // DevServer 服务器通过 HTTP 服务暴露出的文件分为两类：暴露本地文件、暴露 Webpack 构建出的结果，由于构建出的结果交给了 DevServer，所以你在使用了 DevServer 时在本地找不到构建出的文件。
    // contentBase 只能用来配置暴露本地文件的规则，你可以通过 contentBase:false 来关闭暴露本地文件。
    contentBase: path.join(__dirname, 'dist'),
    // 可以在 HTTP 响应中注入一些 HTTP 响应头
    headers: {
      'X-foo': 'bar'
    },
    // 是否为每个静态文件启用 gzip 压缩。 boolean 为类型，默认为 false
    compress: true,
    // 在 DevServer 启动且第一次构建完时自动用你系统上默认的浏览器去打开要开发的网页
    open: {
      app: ['Google Chrome', '--incognito', '--other-flag']  // 如果浏览器配置错误，会有提示信息
      // open: true,// 打开浏览器,
      // -String  'Google Chrome',提供要使用的浏览器名称，浏览器应用程序名称取决于平台。 不要在可重用模块中对其进行硬编码。 例如，'Chrome' 在macOS上是 'Google Chrome' ，在Linux上是 'Google Chrome' 在Windows上是 'Chrome' 。
      // -Object  该对象接受所有 open 选项，app 属性必须是一个数组。 数组中的第一个元素必须是浏览器名称，其他后面的元素是要使用的标志
        // --incognito隐身模式
    },
    // 配置项用于打开指定 URL 的网页。
    openPage: '/layout/page1',//一个页面
    openPage: ['/layout/page1', '/layout/page2'],//多个页面在浏览器中打开

    // 配置 DevServer 服务监听的地址,只有本地可以访问 DevServer 的 HTTP 服务
    host: '127.0.0.1',

    // 配置 DevServer 服务监听的端口，默认使用 8080 端口。 如果 8080 端口已经被其它程序占有就使用 8081，如果 8081 还是被占用就使用 8082，以此类推。
    port: '8081',

    // 配置一个白名单列表，只有 HTTP 请求的 HOST 在列表里才正常返回
    allowedHosts: [
      // 匹配单个域名
      'host.com',
      'sub.host.com',
      // host2.com 和所有的子域名 *.host2.com 都将匹配
      '.host2.com'
    ],

    // 配置是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查
    // DevServer 默认只接受来自本地的请求，关闭后可以接受来自任何 HOST 的请求。 它通常用于搭配 --host 0.0.0.0 使用，因为你想要其它设备访问你本地的服务，但访问时是直接通过 IP 地址访问而不是 HOST 访问，所以需要关闭 HOST 检查
    // 当将此项配置设置为 true 时，将会跳过 host 检查， 这是不推荐的因为不检查host的应用容易受到DNS重新绑定攻击。
    disableHostCheck: false,

    // DevServer 默认使用 HTTP 协议服务，它也能通过 HTTPS 协议服务。 有些情况下你必须使用 HTTPS，例如 HTTP2 和 Service Worker 就必须运行在 HTTPS 之上。 要切换成 HTTPS 服务
    // DevServer 会自动的为你生成一份 HTTPS 证书
    // https: true,
    https: {
      key: fs.readFileSync('path/to/server.key'),
      cert: fs.readFileSync('path/to/server.crt'),
      ca: fs.readFileSync('path/to/ca.pem')
    },

    // 配置在客户端的日志等级
    // 是枚举类型，可取如下之一的值 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'。 默认为 info 级别
    // none 和 warning 以后会弃用
    // devServer.clientLogLevel 可能会导致日志过于冗余，你可以通过将其设置为 'silent' 来关闭日志。
    // 当使用 inline mode 时， DevTools 会输出信息，例如：重新加载之前，出错之前或 Hot Module Replacement 被开启时
    clientLogLevel: 'none',

    // 模块热替换功能，源码被更新以后，通过自动刷新页面来做到实时预览
    hot: true,//只替换修改部分，不刷新整个页面

    // DevServer的实时刷新页面依赖一个注入页面的代理客户端，去接收来自 DevServer命令并负责刷新网页的工作。
    // devServer inline 用于配置是否将这个代理客户端 自动注入将运行在页面中的 chunk 里，默认自动注入。
    // Dev Server 会根据我们是否开启 inlin 来调整它的自动刷新策略。
    // 如果开启 inline ，则 DevServer 会在构建变化后的代码时通过代理客户端控制网页刷新。
    // 如果关闭 inline ，则 DevServer 将无法直接控制要开发的网页 这时它会通过iframe 的方式去运行要开发的网页。
    // 在构建完变化后的代码时，会通过刷新 iframe来实现实时预览，但这时我们需要去 http://localhost:8081/webpack-dev-server／实时预览自己的网页。
    inline: true,// 刷新浏览器

    // 配置多页面
    historyApiFallback: {
      // 使用正则匹配命中路由
      rewrites: [
        // /user 开头的都返回 user.html
        { from: /^\/user/, to: '/user.html' },
        { from: /^\/game/, to: '/game.html' },
        // 其它的都返回 index.html
        { from: /./, to: '/index.html' },
      ]
    },
  },

  // 其他配置项
  // Webpack 构建出针对不同运行环境的代码
  // - 'web'(默认)//针对浏览器 (默认)，所有代码都集中在一个文件里
  // - 'node'
  // - 'async-node'
  // - 'webworker'
  target: 'web',
  
  // 配置 Webpack 如何生成 Source Map，默认值是 false 即不生成 Source Map，
  // 产生一个单独的source-map文件，功能最完全，但会减慢打包速度,会加入一行 特殊语法格式的注释 用于浏览器解析，并去加载这个source-map文件，完成源文件的映射工作
  // 文档： https://webpack.docschina.org/configuration/devtool/
  // https://segmentfault.com/a/1190000019424727
  // http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html
  devtool: 'source-map',

  // 监听文件更新，在文件发生变化时重新编译,webpack 监听模式默认是关闭的, 使用 DevServer 时，监听模式默认是开启的
  watch: true,
  // 监听模式运行时的参数
  watchOptions: {
    // 监听大量文件会导致大量的 CPU 或内存占用, 设置不监听的文件或文件夹，支持正则匹配,
    // 默认为空
    ignored: /node_modules/,// string arrry
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高 默认为 300ms 
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的 默认每秒问 1000 次
    poll: 1000
  },

  // 可以告诉 Webpack JavaScript 运行环境已经内置了那些全局变量，针对这些全局变量不用打包进代码中而是直接使用全局变量
  // string [string] object function RegExp
  externals: {
    jquery: 'jQuery',//非模块化js库；不会被打包到bundle
    // 如果你想将一个符合 CommonJS 模块化规则的类库外部化，你可以提供外联类库的类型以及类库的名称。
    'fs-extra': 'commonjs2 fs-extra',//
  },

  // 告诉 Webpack 如何去寻找 Loader，因为在使用 Loader 时是通过其包名称去引用的，
  // Webpack 需要根据配置的 Loader 包名去找到 Loader 的实际代码，以调用 Loader 去处理源文件。
  // 该配置项常用于加载本地的 Loader。
  resolveLoader: {
    // 去哪个目录下寻找 Loader
    modules: ['node_modules'],
    // 入口文件的后缀
    extensions: ['.js', '.json'],
    // 指明入口文件位置的字段
    mainFields: ['loader', 'main']
  },
  stats: { // 控制台输出日志控制
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,//是否添加关于编译哈希值的信息
  },
  node: {
    // - false: 什么都不提供。
    // - true：提供 polyfill。
    // - "mock"：提供 mock 实现预期接口，但功能很少或没有。
    // - "empty"：提供空对象。
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    console: false,
    global: true,
    process: true,
    __filename: "mock",
    __dirname: "mock",
    Buffer: true,
    setImmediate: true
  }
}





// 配置类型2 ----- function
// const path = require('path');
// const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

// module.exports = function (env = {}, argv) {
//   const plugins = [];

//   const isProduction = env['production'];

//   // 在生成环境才压缩
//   if (isProduction) {
//     plugins.push(
//       // 压缩输出的 JS 代码
//       new UglifyJsPlugin()
//     )
//   }

//   return {
//     plugins: plugins,
//     // 在生成环境不输出 Source Map
//     devtool: isProduction ? undefined : 'source-map',
//   };
// }
// 在运行 Webpack 时，会给这个函数传入2个参数，分别是：

// env：当前运行时的 Webpack 专属环境变量， env 是一个 Object。读取时直接访问 Object 的属性，设置它需要在启动 Webpack 时带上参数。例如启动命令是 webpack --env.production --env.bao=foo时，则 env 的值是 {"production":"true","bao":"foo"}。
// argv：代表在启动 Webpack 时所有通过命令行传入的参数，例如 --config、 --env、 --devtool，可以通过 webpack -h 列出所有 Webpack 支持的命令行参数。




// 配置类型3-------异步promise
// module.exports = function(env = {}, argv) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         // ...
//       })
//     }, 5000)
//   })
// }

// 配置类型4--------导出多个
// module.exports = [
//   // 采用 Object 描述的一份配置
//   {
//     // ...
//   },
//   // 采用函数描述的一份配置
//   function() {
//     return {
//       // ...
//     }
//   },
//   // 采用异步函数描述的一份配置
//   function() {
//     return Promise();
//   }
// ]
// 以上配置会导致 Webpack 针对这三份配置执行三次不同的构建。
// 这特别适合于用 Webpack 构建一个要上传到 Npm 仓库的库，因为库中可能需要包含多种模块化格式的代码，例如 CommonJS、UMD。