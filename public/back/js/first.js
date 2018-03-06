/**
 * Created by 种蘑菇的小莫 on 2018/3/6.
 */
$(function () {
    //渲染列表与分页
    var page = 1;
    var pageSize = 2;
    var flag = true;
    //渲染函数
    function render() {
        $.ajax({
            type: "get",
            url: "/category/queryTopCategoryPaging",
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function (info) {
                //console.log(info);
                var html = template('tpl', info);
                $('tbody').html(html);
                //渲染分页
                if (flag) {

                    flag = false;
                    $('#paginator').bootstrapPaginator({
                        bootstrapMajorVersion: 3,
                        currentPage: page,
                        totalPages: Math.ceil(info.total / info.size),
                        onPageClicked: function (a, b, c, p) {
                            //设置当前
                            page = p;
                            //重新渲染
                            render();
                        }
                    });
                }
            }
        });
    }

    render();


//    添加分类功能
    $('.btn_add').on('click', function () {
        $('#firstModal').modal('show');
    });

//     初始化表单校验
    var $form = $('form');
    $form.bootstrapValidator({
        // 配置小图标，成功 事变 校验中
        feedbackIcons: {
            valid: 'glyphicon glyphicon-heart',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

    //    校验规则
        fields:{
           categoryName:{
               validators:{
                   notEmpty:{
                       message:"一级分类名称不能为空"
                   }
               }
           }
        }
    });

//    给表单注册校验成功的事件
    $form.on('success.form.bv',function(e){
        e.preventDefault();

        $.ajax({
            type:"post",
            url:"/category/addTopCategory",
            data:$form.serialize(),
            success:function(info){
                //console.log(info);
                if(info.success){
                    //关闭模态框
                    $('#firstModal').modal("hide");
                //    重置表单的样式和内容
                    $form.data("bootstrapValidator").resetForm(true);
                    page = 1;
                //    重新渲染
                    render();
                }

            }
        });
    });

});