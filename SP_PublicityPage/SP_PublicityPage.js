$(function(){
    setInterval(FunFontCarousel, 1000)
    function FunFontCarousel() {
       //codeBlockDescribe:添加动画效果
       //codeBlockDescribe:动态移动
       //类名为ul
       $(".xbm_1 .xb_lunbo ul").animate({
          "margin-top": "-0.39rem"
       }, function() {
          $(".xbm_1 .xb_lunbo ul li:eq(0)").appendTo($(".xbm_1 .xb_lunbo ul"))
          $(".xbm_1 .xb_lunbo ul").css({
             "margin-top": "0rem"
          })
       })
    }
    //xb:codeBlockDescribe:添加客户信息
    XBFunDynamicInfor();
    function XBFunDynamicInfor(){
       //姓氏变量
       var xb_surName='李王张刘陈杨赵黄周吴徐孙胡朱高林何郭马罗梁宋郑谢韩唐冯于董萧程曹袁邓许傅沈曾彭吕苏卢蒋蔡贾丁魏薛叶阎余潘杜戴夏钟汪田任姜范方石姚谭廖邹熊金陆郝孔白崔康毛邱秦江史顾侯邵孟龙万段漕钱汤尹黎易常武乔贺赖龚文';
       //尊称
       var xb_nickName=['先生','女士'];
       //手机号码
       var iphoneNum='34578'
       //随机数 Math.floor(Math.random()*10+1)
       function xbsuiji(num1,num2){return Math.floor(Math.random()*num1+num2);}
       //以下部分为添加html内容
       var xbi=0
       while (xbi<30){
       $('.xbm_1 .xb_lunbo ul').append("<li>"+xb_surName[xbsuiji(100,0)]+""+xb_nickName[xbsuiji(2,0)]+"  1"+iphoneNum[xbsuiji(5,0)]+""+xbsuiji(10,0)+"XXXX"+xbsuiji(8999,1000)+"  已报名  "+xbsuiji(59,1)+"秒前</li>");
       xbi++;
       }
       
    }
    //xb:codeBlockDescribe:延时动画
    $(".xbm_banner img:nth-of-type(2)").animate({top:'0.4rem'},500);
    //xb:codeBlockDescribe:根据下拉判断加载动画
    //2.全屋整装  拎包入住
    $('body').on('touchmove',function(){
        console.log($(window).scrollTop())
        if($(window).scrollTop()>='166'&&$(window).scrollTop()<='622'){
          $(".xbm_2 img:nth-of-type(2)").animate({left:'1.61rem'},100,function(){
          $(".xbm_2 img:nth-of-type(3)").animate({left:'4.21rem'},100,    function(){
          $(".xbm_2 img:nth-of-type(4)").animate({left:'0.32rem'},100,    function(){
          $(".xbm_2 img:nth-of-type(5)").animate({left:'5.31rem'},100,    function(){
          $(".xbm_2 img:nth-of-type(6)").animate({left:'0.4rem'},100,    function(){
          $(".xbm_2 img:nth-of-type(7)").animate({left:'4.92rem'},100,    function(){
          $(".xbm_2 img:nth-of-type(8)").animate({left:'0.921rem'},100,    function(){
          $(".xbm_2 img:nth-of-type(9)").animate({left:'3.68rem'},100,    function(){
          })})})})})})})})
        }
        //8大费用全免  一省省到底
        if($(window).scrollTop()>='1155'&&$(window).scrollTop()<='1772'){
            $(".xbm_5 img:nth-of-type(1)").animate({top:'1.3rem'},400,function(){
            $(".xbm_5 img:nth-of-type(2)").animate({left:'0.53rem'},400)
            $(".xbm_5 img:nth-of-type(3)").animate({left:'0.1rem'},400)
            $(".xbm_5 img:nth-of-type(4)").animate({left:'0.3rem'},400)
            $(".xbm_5 img:nth-of-type(5)").animate({left:'0.16rem'},400,function(){
            $(".xbm_5 img:nth-of-type(6)").animate({right:'0.32rem'},400)
            $(".xbm_5 img:nth-of-type(7)").animate({right:'0.15rem'},400)
            $(".xbm_5 img:nth-of-type(8)").animate({right:'0.54rem'},400)
            $(".xbm_5 img:nth-of-type(9)").animate({right:'0.32rem'},400)
            })
            })
        }
        //一线国际大牌  假一赔十
        if($(window).scrollTop()>='1425'&&$(window).scrollTop()<='2071'){
            $(".xbm_6 img:nth-of-type(2)").animate({left:'0.29rem'},500,function(){
            $(".xbm_6 img:nth-of-type(3)").animate({right:'0.29rem'},500)})
        }
    })
    //5.8大费用全免  一省省到底
})