$(document).ready(function(){
    $(".newsbox dl").eq(2).css("margin-right","0px");
    $(".newscenter .newsbox").eq(1).css("border-bottom","none");
    $(".newscenter .newsbox").eq(1).addClass("title2");
    $(".title2 h2").html("<img src='./images/new_02.png' />网站公告");
    $(".title2 dl").eq(2).css("margin-right","0px");

    //nav-li hover e
    var num;
    $('.nav-main>li[id]').hover(function(){
       /*图标向上旋转*/
        $(this).children().removeClass().addClass('hover-up');
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#box-'+num).slideDown(300);
    },function(){
        /*图标向下旋转*/
        $(this).children().removeClass().addClass('hover-down');
        /*下拉框消失*/
        $('#box-'+num).stop();
        $('#box-'+num).hide();
    });
    //hidden-box hover e
    $('.hidden-box').hover(function(){
        /*保持图标向上*/
        $('#li-'+num).children().removeClass().addClass('hover-up');
        $(this).show();
    },function(){
        $(this).slideUp(200);
        $('#li-'+num).children().removeClass().addClass('hover-down');
    });
});
