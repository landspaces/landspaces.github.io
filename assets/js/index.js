import localData from './localData.js';
// 入口 加载图片 snow_dom
    $(function(){
      init();
    });
/////////////////////////////////////////////////////////////////
// 注册点击事件
/////////////////////////////////////////////////////////////////
    $('.clickChangeImg').click(()=>{let Imgurl = `${localData.imgArr[Math.floor((Math.random()*localData.imgArr.length))]}`;loadImg(Imgurl);});
    // 注册点击播放音乐(暂时废弃)
    $('.clickMusic').click(()=>{$('.audioPlayer').toggle()});

/////////////////////////////////////////////////////////////////
// 注册各种方法
/////////////////////////////////////////////////////////////////
// 首次加载方法
    function init() {
      // 首加载的背景
      let defaultImg = './assets/imgs/img/qBrF1yu5Wys.jpg'
      // let defaultImg = localData.imgArr[Math.floor((Math.random()*localData.imgArr.length))];
      loadImg(defaultImg);

      // 创造雪花
      let Fragment = document.createDocumentFragment();
      for (let i = 0; i <= 500; i++) {Fragment.appendChild($("<div></div>").addClass('snow')[0])};
      $('#snowbox').append(Fragment);

      // 音乐播放器开关
      // $('.audioPlayer').hide();
    }
// 加载图片方法
    function loadImg(url) {
      $('.loading').show();$('.clickChangeImg').disabled = true;
      let imgbox = new Image();// 图片监测
      imgbox.src=url;
      imgbox.onload = ()=>{
        $('body').css('background',`url(${imgbox.src})`).css('background-size',`cover`);
        $('.loading').hide();$('.clickChangeImg').disabled = true;
      };
    }