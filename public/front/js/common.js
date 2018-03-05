/**
 * Created by 种蘑菇的小莫 on 2018/3/5.
 */
mui(".mui-scroll-wrapper").scroll({
    //scrollY:false  写了这句话 就不滚动了
//    indicators:false  这个写了就不要滚动条了
});

//初始化轮播图
 mui('.mui-slider').slider({
     interval:1500//自动轮播周期，若为0则不自动播放，默认为0；
 });

