//等待页面加载完成
// 防止全局变量污染
$(function(){
  // 校验表单
  $('form').bootstrapValidator(
    {
         // 要求用户名不能为空 
  // 密码不能为空 密码的长度在6-12位 
  // 配合校验规则
  fields: {
    // 对应了form中的name属性
    username:{
      // 给username配置校验规则
      validators:{
        // 非空原则
          notEmpty:{
              message:'用户名不能为空'
          },
          stringLength:{
            min:2,
            max:6,
            message:'长度应该为2-6位'
          }
      }
    },

    password:{
      validators:{
        notEmpty:{
          message:'密码不能为空'
      },
      stringLength:{
        min:6,
        max:12,
        message:'密码长度应该为6-12位'
      }
      }
    }
  },
  // 配置小图标，成功 事变 校验中
  feedbackIcons: {
    valid: 'glyphicon glyphicon-heart',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
    }
  );
 
});