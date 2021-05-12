import localData from './imgurl.js';
// 入口 加载图片 snow_dom
    $(function(){
      // 首加载的背景
      let defaultImg = './assets/imgs/img/qBrF1yu5Wys.jpg'
      // let defaultImg = localData.imgArr[Math.floor((Math.random()*localData.imgArr.length))];
      loadImg(defaultImg);
      // 创造雪花
      let Fragment = document.createDocumentFragment();
      for (let i = 0; i <= 500; i++) {Fragment.appendChild($("<div></div>").addClass('snow')[0])};
      $('#snowbox').append(Fragment);
      $('.audioPlayer').hide();
    });
/////////////////////////////////////////////////////////////////
// 注册点击事件
/////////////////////////////////////////////////////////////////
    $('.clickChangeImg').click(()=>{let Imgurl = `${localData.imgArr[Math.floor((Math.random()*localData.imgArr.length))]}`;loadImg(Imgurl);});
    // 注册点击播放音乐(暂时废弃)
    $('.clickMusic').click(()=>{$('.audioPlayer').toggle()});

/////////////////////////////////////////////////////////////////
// 鼠标字体事件
/////////////////////////////////////////////////////////////////
    let arrIndex = 0;
    $("body").click(function (e) {
      let arrfont = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
      let arrcolor = new Array("#70f3ff", "#ff461f", "#fff143", "#3b2e7e", "#ffb3a7", "#f20c00", "#00e500", "#801dae", "#ffb61e", "#ff0097", "#f05654", "#faff72");
      let $i = $("<span/>").text(arrfont[arrIndex]);
      arrIndex = (arrIndex + 1) % arrfont.length;
      let x = e.pageX,y = e.pageY;
      $i.css({
        "z-index": 5,
        "top": y - 10,
        "left": x,
        "position": "absolute",
        'font-size':'15px',
        "font-weight": "bold",
        "color": `${arrcolor[arrIndex]}`
      });
      $("body").append($i);
      $i.animate({
        "top": y - 50,
        "opacity": 0
      },500,function () {
          $i.remove();
      });
    });
    $(".buryit").removeAttr("onclick");
/////////////////////////////////////////////////////////////////
// 各种方法
/////////////////////////////////////////////////////////////////
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