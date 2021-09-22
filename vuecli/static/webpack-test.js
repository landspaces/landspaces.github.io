/**
*各个webpack版本之间存在一定差异，经常报一些莫名错误，本次配置基于webpack@4+ webpack-cli@3+
*/
//path模块是node.js中处理路径的核心模块。可以方便的处理关于文件路径的问题。
//path路径参数   参考文档https://www.cnblogs.com/jkko123/p/10234362.html
const path = require('path')

//解析和转换.vue文件，提取出其中的逻辑代码script，样式代码style以及HTML模板template，再分别将它们交给对应的loader去处理。
//使用vue-loader@15以上都需要使用vueloaderplugin这个插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//html-webpack-plugin插件 生成的内存中的页面已帮我们创建并正确引用了打包编译生成的js及css文件
const htmlWebpackPlugin = require('html-webpack-plugin');

//帮我们清除 打包之后 输出 目录下的其他多余或者无用的代码  每次生成代码之前先将输出的打包文件夹目录清空
//因为我们之前可能生成过其他的代码如果不清楚的话可能多个代码掺杂在一起容易把我们搞混乱了clean-webpack-plugin插件就是这样由来的
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//mini-css-extract-plugin 插件是 webpack4+ 版本的，可以直接安装使用。这里只能把所有样式包括css、less都打包到一个css文件，然后再 link 进页面。
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//webpack编译的进度条插件
const WebpackBar = require('webpackbar');

//打包的时候开启gzip可以很大程度减少包的大小，非常适合于上线部署。更小的体积对于用户体验来说就意味着更快的加载速度以及更好的用户体验。
const CompressionPlugin = require("compression-webpack-plugin");

//由于运行在 Node.js 之上的 Webpack 是单线程模型的，所以Webpack 需要处理的事情需要一件一件的做，不能多件事一起做。
//我们需要Webpack 能同一时间处理多个任务，发挥多核 CPU 电脑的威力，HappyPack 就能让 Webpack 做到这点，它把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。
// 由于 JavaScript 是单线程模型，要想发挥多核 CPU 的能力，只能通过多进程去实现，而无法通过多线程实现。
//  const HappyPack = require('happypack');
 const os = require('os'); //os 模块提供了与操作系统相关的实用方法和属性。 使用方法参考http://nodejs.cn/api/os.html#os_os
//  const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

//性能分析页面工具
const BundleAnalyzerPlugins = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//webpack自动集成了Terser如果你想更改、添加压缩工具，又或者是想对Terser进行配置，使用下面的webpack配置即可。
const TerserPlugin = require('terser-webpack-plugin');

// 压缩css
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const webpack = require("webpack");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

module.exports = {
    //entry: 配置入口文件，以入口文件为起点，查找模块间的引用关系，递归的处理文件 (从哪个文件开始打包)
    entry: './src/main.js',
    //output: 配置输出 (打包到哪去)
    output: {
        // 打包输出的目录 (必须是绝对路径)
        path: path.join(__dirname, 'dist'),
        // 打包生成的文件名
        //hash 只要项目里有文件更改，整个项目构建的hash值都会更改，并且全部文件都共用相同的hash值只要有一个模块发生变化，产出所有文件的hash也会变
        //chunkhash chunkhash和hash不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。通常情况下一个入口对应一个chunk,我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。
        filename: 'bundle.[hash:8].js', //id、hash、name、chunkhash
        //chunkFilename 指未被列在 entry 中，却又需要被打包出来的 chunk 文件的名称。一般来说，这个 chunk 文件指的就是要懒加载的代码。
        chunkFilename:'[name].js'
    },
    // 查找模块的规则,别名
    resolve: {
        alias: {
            "@": path.resolve("src"),
            "@component": path.resolve("src/component"),
            // "@pages": path.resolve("src/pages"),
            // "@utils": path.resolve("src/utils"),
        },
        //在导入语句没带文件后缀时，webpack会自动带上后缀去尝试访问文件是否存在。resolve.extensions用于配置在尝试过程中用到的后缀列表，默认是：　["", ".webpack.js", ".web.js", ".js"]
        extensions: ['.vue','.js','.css','json']
    },
    // 模块加载
    module: {
        noParse: /lodash/,//不去解析属性值代表的库的依赖
        // loader的规则
        rules: [{
                // 配置 js文件
                test: /\.js$/,
                // exclude: /node_modules/,//排除node_modules 目录下的文件
                include: path.resolve(__dirname, 'src'), //编译src文件夹下的js文件
                use: [
                    //为loader开启缓存 将loader的解析结果保存下来，让后续的解析直接使用缓存的结果
                    //  {
                    //      loader: "cache-loader",
                    //      options: {
                    //          cacheDirectory: "./cache" //缓存的目录
                    //      }
                    //  },
                    /*
                        thread-loader会对其后面的loader（这里是babel-loader）开启多进程打包。
                        进程启动大概为600ms，进程通信也有开销。(启动的开销比较昂贵，不要滥用) 只有工作消耗时间比较长，才需要多进程打包
                        thread-loader必须最后执行，再次说明loader是从下往上，从右往左的执行顺序,所以想要使用thread-loader优化某项的打包速度，必须放在其后执行
                        */
                    //  {
                    //      loader:"thread-loader"
                    //  },
                    {
                        //把对.js 的文件处理交给id为babel 的HappyPack 的实例执行
                        //  loader: 'happypack/loader?id=babel',
                        //Babel是一个JavaScript编译器，能够让我们放心的使用新一代JS语法 ,会编译成浏览器可识别的ES5语法。
                        loader: 'babel-loader',
                        options: {
                            "presets": ["@babel/preset-env"], // 用于处理高版本 js语法 的兼容性
                        }
                    }
                ]
            }, {
                // 正则表达式，用于匹配所有的css文件
                test: /\.css$/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader, //把css分割成单独的文件
                    //     options: {
                    //         publicPath: ''
                    //     }
                    // },
                    'style-loader',//style-loader是将css-loader打包好的css代码以style的形式插入到文件中。
                   'css-loader', // 先用 css-loader 让webpack能够识别 css 文件的内容
                ]
            },
            //图片默认转成 base64 字符串了,
            // 好处就是浏览器不用发请求了，直接可以读取
            // 坏处就是如果图片太大，再转base64就会让图片的体积增大 30% 左右, 得不偿失所以需要通过 options 配置选项进行配置 limit, 可以设置一个临界值, 大于这个值会整个文件直接打包到目录中, ,如果小于这个值, 就会转成 base64, 节约请求的次数
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 超过 8k 就不转 base64, 小于 8k 才转
                        limit: 8 * 1024
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'] //webpack是无法识别vue文件的，要使用render渲染，必需要使用vue-loader来处理vue文件
            }
        ],
    },
    //优化
    // optimization: {
    //     splitChunks: {
    //         分包策略
    //         默认是async：只提取异步加载的模块出来打包到一个文件中。异步加载的模块：通过import('xxx')或require(['xxx'],() =>{})加载的模块。
    //         initial：提取同步加载和异步加载模块，如果xxx在项目中异步加载了，也同步加载了，那么xxx这个模块会被提取两次，分别打包到不同的文件中。同步加载的模块：通过 import xxx或require('xxx')加载的模块。
    //         all：不管异步加载还是同步加载的模块都提取出来，打包到一个文件中。
            // chunks: 'all',
            // name: true,
            // 超过指定大小进行模块分包 默认为0，表示不限制大小。
            // maxSize:50,
            // cacheGroups: {//核心重点，配置提取模块的方案
            //     vendors: { //自定义打包模块
            //         name: "chunk-vendors",
            //         test: /[\\/]node_modules[\\/]/, //用来匹配要提取的模块的资源路径或名称。值是正则或函数。
            //         priority: 0, //方案的优先级，值越大表示提取模块时优先采用此方案。默认值为0。
            //         chunks: "initial" // 只打包初始时依赖的第三方
            //     },
            //     elementUI: {
            //         name: "chunk-elementUI", // 单独将 elementUI 拆包
            //         priority: 20, // 权重要大于 vendors 不然会被打包进 vendors
            //         test: /[\\/]node_modules[\\/]element-ui[\\/]/
            //     }
            //     ,
            //     lodash: {
            //         name: "chunk-lodash", // 单独将 lodash 拆包
            //         priority: 20, // 权重要大于 vendors 不然会被打包进 vendors
            //         test: /[\\/]node_modules[\\/]lodash[\\/]/
            //     }
            // }
            // },
            //js压缩 仅适用于source-map，inline-source-map，hidden-source-map和nosources-source-map值的devtool选项
            //为什么？eval包装模块，eval("string")最小化器不处理字符串。cheap 没有列信息，并且最小化器仅生成单行，仅留下单个映射。
        //      minimize: true, // 是否要启用压缩，默认情况下，生产环境会自动开启
        //      minimizer: [ // 压缩时使用的插件，可以有多个
        //          new TerserPlugin({
        //              parallel: os.cpus().length - 1,//开启几个进程来处理压缩，默认是 os.cpus().length - 1
        //              cache: true, // 是否缓存
        //              test: /\.js(\?.*)?$/i, //匹配需要压缩的文件
        //              terserOptions: {
        //                  mangle:true, // 混淆，默认也是开的，mangle也是可以配置很多选项的，具体看后面的链接
        //                  parrlel: true,// 多线程处理
        //                      compress: {
        //                          drop_console: false,//传true就是干掉所有的console.*这些函数的调用.
        //                          drop_debugger: true, //干掉那些debugger;
        //                          pure_funcs: ['console.log'] // 如果你要干掉特定的函数比如console.info ，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
        //                      }
        //                  },
        //             //是否将注释剥离到单独的文件中 默认情况下 剥离
        //             // /^\**!|@preserve|@license|@cc_on/i 正则表达式匹配的注释，其余注释会删除。
        //             // 如果原始文件名为 bundle.js ，则注释将存储到 bundle.js.LICENSE.txt 。
        //             extractComments: true
        //          }),
                //压缩css
                // new optimizeCss({
                //     cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
                //     cssProcessorOptions: {
                //         discardComments: { removeAll: true } //删除注释
                //     },
                //     canPrint: false //是否将插件信息打印到控制台
                // }),
        //      ],
    // },
    /**
     * source-map //外部 错误代码准确信息 和源代码位置
     * inline-source-map //只会生成一个内联source-map 错误代码准确信息 和源代码位置
     * hidden-source-map //外部 错误代码错误原因，没有位置，不能追踪源代码错误，只能看到构建后的错误
     * eval-source-map //每个文件都生成对应的source-map都在eval 错误代码准确信息 和源代码位置
     * nosources-source-map //外部 错误代码准确信息 没有源代码信息
     * cheap-source-map //外部 错误代码准确信息 没有源代码信息,只能精确到行
     * cheap-module-source-map //外部 错误代码准确信息 没有源代码信息
     * 内联和外部的区别 1.外部会生成文件 ，内联没有 2.内联构建速度更快  https://juejin.cn/post/6844903450644316174
     * 开发环境推荐：cheap-module-eval-source-map   生产环境推荐：cheap-module-source-map
     */
    //  devtool:'source-map',
    // 打包模式 production 压缩/development 不压缩  https://blog.csdn.net/m0_37938910/article/details/91044549
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({ //创建一个在内存中生成html页面的插件
            title: "测试webpack",
            template: path.join(__dirname, './public/index.html'), //指定模板页面
            //将来会根据此页面生成内存中的页面
            filename: 'index.html', //指定生成页面的名称，index.html浏览器才会默认直接打开
            minify:{ //压缩HTML文件
                removeComments:true,  //移除HTML中的注释
                collapseWhitespace:true  //删除空白符与换行符
            }
        }),
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        //引入清除插件
        new CleanWebpackPlugin({}),
 
        //webpack编译时的进度条
        new WebpackBar({
            "color": "yellow"
        }),
        //把css处理成单独的文件
        // new MiniCssExtractPlugin({
        //     filename: "[hash:8].css"
        // }),
        //开启gzip压缩
        //  new CompressionPlugin({
        //      filename: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
        //         algorithm: 'gzip',//算法
        //         test: new RegExp(
        //           '\\.(js|css)$'  //压缩 js 与 css
        //         ),
        //         threshold: 10240,//只处理比这个值大的资源。按字节计算
        //         minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
        //      }),
        //开启性能分析插件，当首次编译打包后会自动谈起分析页面
        new BundleAnalyzerPlugins({
            //  可以是`server`，`static`或`disabled`。
            //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
            //  在“静态”模式下，会生成带有报告的单个HTML文件。
            analyzerMode: 'server',
            //  将在“服务器”模式下使用的主机启动HTTP服务器。
            analyzerHost: '127.0.0.1',
            //  将在“服务器”模式下使用的端口启动HTTP服务器。
            analyzerPort: 8888,
            //  相对于捆绑输出目录。`static`模式下生成的报告文件。
            reportFilename: 'report.html',
            //  模块大小默认显示在报告中。`stat`，`parsed`或者`gzip`中的一个。
            defaultSizes: 'parsed',
            //  在默认浏览器中自动打开报告
            openAnalyzer: true,
            //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
            generateStatsFile: false,
            //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
            //  相对于捆绑输出目录。
            statsFilename: 'stats.json',
            //  stats.toJson（）方法的选项。
            //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
            statsOptions: null,
            logLevel: 'error'
        }),
        //    new HappyPack({
        //          /*
        //           * 必须配置
        //           */
        //          // id 标识符，要和 rules 中指定的 id 对应起来
        //          id: 'babel',
        //          // 需要使用的 loader，用法和 rules 中 Loader 配置一样
        //          // 可以直接是字符串，也可以是对象形式
        //          loaders: ['babel-loader'],
        //          //threadPool: HappyThreadPool对象，代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多
        //          threadPool: happyThreadPool
        //     })
        //告诉webpack哪些库不参与打包
        // new webpack.DllReferencePlugin({
        //     manifest:path.resolve(__dirname,'dll/manifest.json'),//dll打包生成的manifest.json文件路径 该文件描述dll打包路径信息
        // }),
        // // //将某个文件打包输出去,并在html中自动引入改资源
        // new AddAssetHtmlWebpackPlugin({
        //     filepath:path.resolve(__dirname,'dll/lodash.js')
        // })
    ],
    //DevServer 是webpack开发服务器。
    devServer: {
        //告诉服务器,从哪个文件夹中获取内容
        contentBase: path.join(__dirname, 'dist'),
        // 配置 DevServer 服务监听的地址,只有本地可以访问 DevServer 的 HTTP 服务
        host: 'localhost',
        // 配置请求的端口号,默认为8080
        port: '3000',
        //当开启服务器时,自动打开页面
        open: false,
 
        inline:true,
        // 启用HRM热更新
        hot: true,
        // //即使hot没有生效，浏览器也不自动刷新
        // hotOnly:true,
         
        // 如果使用webpack-dev-server，需要设为true，禁止显示devServer的console信息
        quiet: true,
 
        proxy: {
            '/weather': {
              target: 'http://api.k780.com/',
              changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
              pathRewrite: { '^/weather': ''}
            }
        }
    }
}