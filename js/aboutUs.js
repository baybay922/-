"use strict";
var FullPageScl = function (box,isFinish) {
  this.isFinish = isFinish;
  this.addBar = function () {
    var bar = $("<p>").addClass('l_barBox').appendTo(box.parent());
    box.children('li').each(function(index, el) {
      var dot = $("<span>").appendTo(bar);
    });
    $(".l_barBox span").first().addClass('l_focus');
    box.css("height",$(".l_barBox span").length*100+"%").children('li').css("height",1/$(".l_barBox span").length*100+"%");
  };
  this.wheelBind = function (e) {
    var scrollFunc = function(e){

            if(isFinish){
                    e = e || window.event;
                if((e.wheelDelta<0|| e.detail>0)  ){
                    isFinish = false;
                    sclfun(true);
                }else if((e.wheelDelta>0 || e.detail<0) ){
                    isFinish = false;
                    sclfun(false);
                }
            }
    };

    if(navigator.userAgent.indexOf("Firefox")>0){
        if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
        }
    }else{
        document.onmousewheel = scrollFunc;
    };
  };
  function sclfun(upSide) {
   var dotIdx = $(".l_focus").index(),
       isLast = $(".l_barBox span").last().hasClass('l_focus'),
       isFirst = $(".l_barBox span").first().hasClass('l_focus');
   if (!isLast && upSide) {
     $(".l_focus").removeClass().next().addClass('l_focus');
   }else if (!isFirst && !upSide) {
     $(".l_focus").removeClass().prev().addClass('l_focus');
   }

   box.animate({"top":-$(".l_focus").index()*100+'%'},800,"swing",function(){
       isFinish = true;
   });
 };
};

$(function(){
 var fullPageScl = new FullPageScl($(".l_containerBox"),true);
 fullPageScl.addBar();
 fullPageScl.wheelBind(window.event);

$(".l_barBox span").on("click",function () {
  $(this).addClass('l_focus').siblings().removeClass('l_focus');
  $(".l_containerBox").animate({"top":-$(".l_focus").index()*100+'%'},800,"swing");
})

$(".l_team a").hover(function() {
  $("#l_photo").attr('data-clickCls', $("#l_photo").attr("class")).removeClass().addClass($(this).attr("data-cls"));
  $(".l_personInfo").removeClass('l_show');
  $("#"+$(this).attr("data-cls")).addClass('l_show');
}, function() {
  $("#l_photo").removeClass().addClass($("#l_photo").attr('data-clickCls'));
  $(".l_personInfo").removeClass('l_show');
  $("#"+$("#l_photo").attr('data-clickCls')).addClass('l_show');
}, function() {
}).on('click', function() {
  $("#l_photo").addClass($(this).attr("data-cls")).attr('data-clickCls', $(this).attr("data-cls"));
  $(".l_personInfo").removeClass('l_show');
  $("#"+$("#l_photo").attr('data-clickCls')).addClass('l_show');
});

  var url = window.location.href;
  function GetQueryString(name)
  {
       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null)return  unescape(r[2]); return null;
  }
  $(".l_barBox span").eq(GetQueryString("news_list")).click();
      

});
