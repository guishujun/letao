$(function(){
  // 禁用进度环
  NProgress.configure({showSpinner:false});
  $(document).ajaxStart(function(){
      //进度条加载效果
      NProgress.start(); 
  });
  $(document).ajaxStop(function(){
      setTimeout(function(){

      },500);
    NProgress.done();   
  });


 
});