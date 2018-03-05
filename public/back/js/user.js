/**
 * Created by 种蘑菇的小莫 on 2018/3/5.
 */
$(function(){
//    发送ajax请求 获取用户数据 渲染到页面中
    var page = 1;
    var pageSize = 5;
    $.ajax({
        type:"get",
        url:"/user/queryUser",
        data:{
            page:page,
            pageSize:pageSize
        },
        success:function(info){

            //3准备数据 在info中获取数据
            //4 模板 + 数据 = HTML结构 绑定模板与数据
            console.log(info);
        }
    });

});