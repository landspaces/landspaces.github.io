/*
  npm init  用来初始化生成一个新的package.json文件。
  帮助
    npm -l    用于查看各个命令的简单用法
    npm -h    查看npm命令的帮助信息
  查看
    npm ls    查看npm已安装的包信息
    npm ls -g --depth=0 查看全局安装的包,仅查看第一层级
    npm -v    查看npm版本信息
    npm info <pkg> version    查看某个模块最新发布版本信息，如npm info underscore version
    npm search <keyword>      查找与keyword匹配的模块信息
    npm view <pkg> version    查看一个包的最新发布版本
  安装和更新
    npm i 安装当前目录package.json里面的所有包
    npm i [name][@version][-后缀]
    npm update <pkg> 更新指定模块
        版本
            @xxx 精确版本号
            @~   只兼容补丁更新的版本号。安装到 x.y.z 中 z 的最新的版本
            @^   兼容补丁和小版本更新的版本号。安装到 x.y.z 中 y 和 z 都为最新版本
        后缀
            留空不写  下载到项目，不写入依赖
            -g全局   不会在项目中保存模块包
            -save-dev/-D 仅开发环境有效(devDependencies)
            --save/-S 开发生产都有效(dependencies)
            --save-optional    安装包的同时自动更新package.json的可选版本依赖
            --save-exact   安装包并写入确切版本依赖，而不是一个可选的版本范围.
  换源
    安装
      npm install -g nrm
    查看
      nrm ls 
    添加新的源
      nrm add taobao https://registry.npm.taobao.org/
    切换源
      nrm use taobao
    删除源
      nrm del taobao
    测试速度
      nrm test
*/