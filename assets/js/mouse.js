// $(function ($) {
//   let arrIndex = 0;
//   $("body").click(function (e) {
//     let arrfont = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
//     let arrcolor = new Array("#70f3ff", "#ff461f", "#fff143", "#3b2e7e", "#ffb3a7", "#f20c00", "#00e500", "#801dae", "#ffb61e", "#ff0097", "#f05654", "#faff72");
//     let $i = $("<span/>").text(arrfont[arrIndex]);
//     arrIndex = (arrIndex + 1) % arrfont.length;
//     let x = e.pageX,y = e.pageY;
//     $i.css({
//       "z-index": 5,
//       "top": y - 10,
//       "left": x,
//       "position": "absolute",
//       'font-size':'15px',
//       "font-weight": "bold",
//       "color": `${arrcolor[arrIndex]}`
//     });
//     $("body").append($i);
//     $i.animate({
//       "top": y - 50,
//       "opacity": 0
//     },500,function () {
//         $i.remove();
//     });
//   });
//   $(".buryit").removeAttr("onclick");

//   // setTimeout(()=>{
//   //   $(".buryit").removeAttr("onclick");
//   // }, 500);
// });

// function delay() {
  
// }