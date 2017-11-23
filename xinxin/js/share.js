/**
 * Created by hywwb on 2017/10/7.
 */
//header_brand
//$().hover()函数是mouse enter 和 mouse leave的简写形式
$(".brand_header_right>ul>li").hover((e)=>{
  $(e.target).css({"color":"#77cb4d","border-bottom":"2px solid #77cd4d"});
},(e)=>{
  $(e.target).css({"color":"#6e6e6e","border-bottom":"0"});
});

//top_menu即nav 的定位实现
//$(window).scrollTop()  获取当前滚动条到页面顶端的距离
$(window).scroll(()=>{
  // const height = $(".top_menu").offset().top;   此方法是动态获取top_menu到页面顶部的实时位置，而本方法只想获取其初始位置
  if($(window).scrollTop() > 614){     //问题1：值614写死；问题2：一旦在页面滚动后刷新，top_menu失效，只有滚动事件被触发，top_menu才会再次出现   此处存在问题！！！
    $(".top_menu").addClass("fixed_nav");
  }else{
    $(".top_menu").removeClass("fixed_nav");
  }
});

/**
 * 函数名：nav_bg_position
 * 作用：为符合条件的目标li
 * @param li 目标li
 * 注意：未完成.....................................
 */
function nav_bg_position(li){
  if(li.hasClass("icon_pic2")){
    li.children().css("backgroundPosition","-148px");
  }else if(li.hasClass("icon_pic3")){
    li.children(":first-child").css("backgroundPosition","-296px");
  }else if(li.hasClass("icon_pic4")){
    li.css("backgroundPosition","-444px");
  }else if(li.hasClass("icon_pic5")){
    li.css("backgroundPosition","-592px");
  }else if(li.hasClass("icon_pic6")){
    li.css("backgroundPosition","-740px");
  }else if(li.hasClass("icon_pic7")){
    li.css("backgroundPosition","-888px");
  }else if(li.hasClass("icon_pic8")){
    li.css("backgroundPosition","-1036px");
  }
}
$(function(){
  $(".top_menu ul>li:nth-child(2)").children(":first-child").css("backgroundPosition","-148px");
  $(".top_menu ul>li:nth-child(3)").children(":first-child").css("backgroundPosition","-296px");
  $(".top_menu ul>li:nth-child(4)").children(":first-child").css("backgroundPosition","-444px");
  $(".top_menu ul>li:nth-child(5)").children(":first-child").css("backgroundPosition","-592px");
  $(".top_menu ul>li:nth-child(6)").children(":first-child").css("backgroundPosition","-740px");
  $(".top_menu ul>li:nth-child(7)").children(":first-child").css("backgroundPosition","-888px");
  $(".top_menu ul>li:nth-child(8)").children(":first-child").css("backgroundPosition","-1036px");
  console.log($(".anchor .anchor_title:eq(1)"));
  $(".anchor>.anchor_title:eq(1)").children(":first-child").css("backgroundPosition","-148px");
  $(".anchor>.anchor_title:eq(2)").children(":first-child").css("backgroundPosition","-296px");
  $(".anchor>.anchor_title:eq(3)").children(":first-child").css("backgroundPosition","-444px");
  $(".anchor>.anchor_title:eq(4)").children(":first-child").css("backgroundPosition","-592px");
  $(".anchor>.anchor_title:eq(5)").children(":first-child").css("backgroundPosition","-740px");
  $(".anchor>.anchor_title:eq(6)").children(":first-child").css("backgroundPosition","-888px");
  $(".anchor>.anchor_title:eq(7)").children(":first-child").css("backgroundPosition","-1036px");
});
/**
 * 函数名：nav_bg_img
 * 作用：top_menu 的导航背景变化
 * @param target 目标元素(li)
 * @param className 要添加的类名（on/on_light）
 */
function nav_bg_img(target,className){
  if(target.is(".top_menu ul>li:first-child")){
    target.addClass(className);
  }else if(target.is(".top_menu ul>li:nth-child(2)")){
    target.addClass(className).children(":first-child").css("backgroundPosition","-148px");
  }else if(target.is(".top_menu ul>li:nth-child(3)")){
    target.addClass(className).children(":first-child").css("backgroundPosition","-296px");
  }else if(target.is(".top_menu ul>li:nth-child(4)")){
    target.addClass(className).children(":first-child").css("backgroundPosition","-444px");
  }else if(target.is(".top_menu ul>li:nth-child(5)")){
    target.addClass(className).children(":first-child").css("backgroundPosition","-592px");
  }else if(target.is(".top_menu ul>li:nth-child(6)")){
    target.addClass(className).children(":first-child").css("backgroundPosition","-740px");
  }else if(target.is(".top_menu ul>li:nth-child(7)")){
    target.addClass(className).children(":first-child").css("backgroundPosition","-888px");
  }else if(target.is(".top_menu ul>li:last-child")){
    target.addClass(className).children(":first-child").css("backgroundPosition","-1036px");
  }
}
/***
 * 函数名：jumpToAnchor
 * 功能：跳转到目标元素的锚点上
 * @param target  目标元素(li)
 * 注意："235" 是指 110（anchor_title的上边距）+ 125（top_menu的高度）
 * 注意："360" 是指 110（anchor_title的上边距）+ 125（top_menu的高度）* 2
 */
function jumpToAnchor(target){
  if($(window).scrollTop() > 614){
    if(target.is(".top_menu ul>li:first-child")){
      $(window).scrollTop($("div.anchor_title:eq(0)").offset().top-110);
    }else if(target.is(".top_menu ul>li:nth-child(2)")){
      $(window).scrollTop($("div.anchor_title:eq(1)").offset().top-235);
    }else if(target.is(".top_menu ul>li:nth-child(3)")){
      $(window).scrollTop($("div.anchor_title:eq(2)").offset().top-235);
    }else if(target.is(".top_menu ul>li:nth-child(4)")){
      $(window).scrollTop($("div.anchor_title:eq(3)").offset().top-235);
    }else if(target.is(".top_menu ul>li:nth-child(5)")){
      $(window).scrollTop($("div.anchor_title:eq(4)").offset().top-235);
    }else if(target.is(".top_menu ul>li:nth-child(6)")){
      $(window).scrollTop($("div.anchor_title:eq(5)").offset().top-235);
    }else if(target.is(".top_menu ul>li:nth-child(7)")){
      $(window).scrollTop($("div.anchor_title:eq(6)").offset().top-235);
    }else if(target.is(".top_menu ul>li:last-child")){
      $(window).scrollTop($("div.anchor_title:eq(7)").offset().top-235);
    }
  }else{
    if(target.is(".top_menu ul>li:first-child")){
      $(window).scrollTop($("div.anchor_title:eq(0)").offset().top-235);
    }else if(target.is(".top_menu ul>li:nth-child(2)")){
      $(window).scrollTop($("div.anchor_title:eq(1)").offset().top-360);
    }else if(target.is(".top_menu ul>li:nth-child(3)")){
      $(window).scrollTop($("div.anchor_title:eq(2)").offset().top-360);
    }else if(target.is(".top_menu ul>li:nth-child(4)")){
      $(window).scrollTop($("div.anchor_title:eq(3)").offset().top-360);
    }else if(target.is(".top_menu ul>li:nth-child(5)")){
      $(window).scrollTop($("div.anchor_title:eq(4)").offset().top-360);
    }else if(target.is(".top_menu ul>li:nth-child(6)")){
      $(window).scrollTop($("div.anchor_title:eq(5)").offset().top-360);
    }else if(target.is(".top_menu ul>li:nth-child(7)")){
      $(window).scrollTop($("div.anchor_title:eq(6)").offset().top-360);
    }else if(target.is(".top_menu ul>li:last-child")){
      $(window).scrollTop($("div.anchor_title:eq(7)").offset().top-360);
    }
  }
}
//nav 的背景图片
// $(".top_menu ul>li>i").css()
//top_menu的鼠标移入移出、单击时的效果
$(".top_menu ul>li").mouseover(function(){
  let li_hover = $(this);
  nav_bg_img(li_hover,"on");
}).mouseout(function(){
  $(this).removeClass("on");
}).click(function(){
  let target = $(this);
  nav_bg_img(target,"on_light");
  target.siblings().removeClass("on_light");
  jumpToAnchor(target);
});


/**
 * 楼层滚动的监听
 * 思路：循环当前楼层，让超出屏幕一半的楼层全部点亮，再让当前的楼层的前面的楼层全部熄灭
 */
$(window).scroll(function(){
  let floors = $("div.anchor_title");
  let li = $(".top_menu ul>li");
  for(let i=0;i<floors.length;i++){
     //如果 floors滚出指定的距离
     if( $(window).height()+$(window).scrollTop()-$(floors[i]).offset().top > $(window).height()/2 ){
        //则使其点亮（但它点亮的是最近li之前的所有的li）
        nav_bg_img(li,"on_light");
        //将最近的li（当前能循环到的li-->该li下标为i）的之前的所有li“手动熄灭”
        li.eq(i).siblings().removeClass("on_light");
     }
  }
});

//旅游顾问

/***
 * 函数名：show_dialog
 * 功能：显示dialog
 * @param selector
 */
function show_dialog(selector){
  $(selector).css({"opacity":"1","bottom":"100px"});
}
/***
 * 函数名：hidden_dialog
 * 功能：隐藏dialog
 * @param selector
 */
function hidden_dialog(selector){
  $(selector).css({"opacity":"0","bottom":"30px"});
}

//显示与隐藏目标dialog
$(".dialog .dialog_1").hover(()=>{
  show_dialog("div.dialog_style_1_show");
},()=>{
  hidden_dialog("div.dialog_style_1_show");
});
$(".dialog .dialog_2").hover(()=>{
  show_dialog("div.dialog_style_2_show");
},()=>{
  hidden_dialog("div.dialog_style_2_show");
});
$(".dialog .dialog_3").hover(()=>{
  show_dialog("div.dialog_style_3_show");
},()=>{
  hidden_dialog("div.dialog_style_3_show");
});
$(".dialog .dialog_4").hover(()=>{
  show_dialog("div.dialog_style_4_show");
},()=>{
  hidden_dialog("div.dialog_style_4_show");
});
$(".dialog .dialog_5").hover(()=>{
  show_dialog("div.dialog_style_5_show");
},()=>{
  hidden_dialog("div.dialog_style_5_show");
});
$(".dialog .dialog_6").hover(()=>{
  show_dialog("div.dialog_style_6_show");
},()=>{
  hidden_dialog("div.dialog_style_6_show");
});
$(".dialog .dialog_7").hover(()=>{
  show_dialog("div.dialog_style_7_show");
},()=>{
  hidden_dialog("div.dialog_style_7_show");
});
$(".dialog .dialog_8").hover(()=>{
  show_dialog("div.dialog_style_8_show");
},()=>{
  hidden_dialog("div.dialog_style_8_show");
});
$(".dialog .dialog_9").hover(()=>{
  show_dialog("div.dialog_style_9_show");
},()=>{
  hidden_dialog("div.dialog_style_9_show");
});
$(".dialog .dialog_10").hover(()=>{
  show_dialog("div.dialog_style_10_show");
},()=>{
  hidden_dialog("div.dialog_style_10_show");
});
$(".dialog .dialog_11").hover(()=>{
  show_dialog("div.dialog_style_11_show");
},()=>{
  hidden_dialog("div.dialog_style_11_show");
});
