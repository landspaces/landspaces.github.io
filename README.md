welcome to my blog!
看板娘
  <script src="https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js"></script>
    <script>
    var jsonModel = [
      // "https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json", // 初音
      "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json", // 萌娘
      "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json", // 小可爱（女）
      // "https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json", // 小可爱（男）
      // "https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json", // 小帅哥
    ];
    L2Dwidget.init({
      "model": {
        "jsonPath": jsonModel[Math.floor(Math.random() * (jsonModel.length - 1))],
        "scale": 1
      },
      "display": {
        "position": "right", // 位置left、right
        "width": 120, // 宽度
        "height": 150, // 高度
        "hOffset": 10, // 横向边距
        "vOffset": 5 // 众向边距
      },
      "mobile": {
        "show": false // 手机是否显示
      },
    });
  </script>
播放器插件
  安装
  <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
  歌单id
      <!-- //我喜欢的 125102396 -->
      <!-- //苏联 2005412605 -->
  配置
      <!-- 
        *id
          song id / playlist id / album id / search keyword
        *server	
          平台: netease, tencent, kugou, xiami, baidu
        *type
          song, playlist, album, search, artist
        auto
        fixed	默认false	
        mini	默认false	
        autoplay 默认false
        theme	默认2980b9
        loop 默认'all'
          'all', 'one', 'none'
        order	默认list
          'list', 'random'
        preload	预加载.默认auto
          'none', 'metadata', 'auto'
        volume	默认0.7
        mutex	true 互斥锁
        lrc-type	默认0	歌词类型
        list-folded	默认false 列表折叠
        list-max-height	默认340px
        storage-name	metingjs
      -->
