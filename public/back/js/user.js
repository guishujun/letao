/**
 * Created by 种蘑菇的小莫 on 2018/3/5.
 */
$(function(){
//    发送ajax请求 获取用户数据 渲染到页面中
    var page = 1;
    var pageSize = 5;

    function render(){
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
                //console.log(info);
                //第一个参数是模板ID 第二个是参数
                var html =  template('tpl',info);
                //console.log(html);
                //   5 渲染数据
                $('tbody').html(html);
                $('#paginator').bootstrapPaginator({
                    // 如果使用了bootstarp 必须指定
                    bootstrapMajorVersion:3,
                    totalPages:Math.ceil(info.total/info.size),  //设置总页数
                    numberOfPages:5, //设置显示多少页 默认显示5
                    currentPage:page, //设置当前页
                    //当页码被点击的时候触发
                    onPageClicked:function(a,b,c,p){
                        //修改page的值 然后重新渲染
                        page = p;
                        //重新渲染
                        render();
                    }
                });
            }
        });
    }

    render();


//    启用 禁用用户
    $('tbody').on('click','.btn',function(){
        //显示模态框
        $('#userModal').modal('show');
        //获取到点击的按钮所在的用户的ID
        var id=$(this).parent().data("id");
        var isDelete = $(this).hasClass("btn-success")?'1':'0';
        console.log(id, isDelete);

        //给确定按钮添加点击事件
        $('.btn_confirm').off().on("click",function(){

            // 发送ajax请求
            $.ajax({
                type:"post",
                url:"/user/updateUser",
                data:{
                    id:id,
                    isDelete:isDelete
                },
                success:function(info){
                    if(info.success){
                        //关闭模态框
                        $('#userModal').modal('hide');
                        //重新渲染
                       render();
                    }
                }

            });
        });
    });




});