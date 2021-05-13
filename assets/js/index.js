import localData from './localData.js';
// 入口 加载图片 snow_dom
    $(function(){
      init();
    });
/////////////////////////////////////////////////////////////////
// 注册点击事件
/////////////////////////////////////////////////////////////////
    $('.clickChangeImg').click(()=>{let Imgurl = `${localData.imgArr[Math.floor((Math.random()*localData.imgArr.length))]}`;loadImg(Imgurl,'img');});
    $('.clickChangeRepeat').click(()=>{let Imgurl = `${localData.repeatimgArr[Math.floor((Math.random()*localData.repeatimgArr.length))]}`;loadImg(Imgurl,'repeat');});
    // 注册点击播放音乐(暂时废弃)
    $('.clickMusic').click(()=>{$('.audioPlayer').toggle()});
    $('.controllMusic .front').click(()=>{$('meting-js')[0].aplayer.skipBack()})
    $('.controllMusic .next').click(()=>{$('meting-js')[0].aplayer.skipForward()})
    $('.controllMusic .normal').click(()=>{$('meting-js')[0].aplayer.setMode('normal');$('.controllMusic .normal').hide();$('.controllMusic .mini').show()})
    $('.controllMusic .mini').click(()=>{$('meting-js')[0].aplayer.setMode('mini');$('.controllMusic .mini').hide();$('.controllMusic .normal').show()})
/////////////////////////////////////////////////////////////////
// 注册各种方法
/////////////////////////////////////////////////////////////////
// 首次加载方法
    function init() {
      $('.controllMusic .mini').hide();
      // 首加载的图片
      // let defaultImg = localData.imgArr[Math.floor((Math.random()*localData.imgArr.length))];
      // loadImg(defaultImg,'img');
      
      // 首加载的平铺
      let defaultImg = localData.repeatimgArr[Math.floor((Math.random()*localData.repeatimgArr.length))];
      loadImg(defaultImg,'repeat');

      // 创造雪花
      let Fragment = document.createDocumentFragment();
      for (let i = 0; i <= 500; i++) {Fragment.appendChild($("<div></div>").addClass('snow')[0])};
      $('#snowbox').append(Fragment);

      // 音乐播放器开关
      // $('.audioPlayer').hide();
    }
// 加载图片方法
    function loadImg(url,type) {
      $('.loading').show();$('.clickChangeImg').disabled = true;
      let imgbox = new Image();// 图片监测
      imgbox.src=url;
      imgbox.onload = ()=>{
        type === 'img' ?
        $('body').css('background',`url(${imgbox.src})`).css('background-size',`cover`):
        $('body').css('background',`url(${imgbox.src})`)
        $('.loading').hide();$('.clickChangeImg').disabled = true;
      };
    }