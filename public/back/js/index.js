/**
 * Created by 种蘑菇的小莫 on 2018/3/4.
 */
$(function(){
    //1.准备dom
    var myChart = echarts.init(document.querySelector(".charts_1"));
    var myChart2 = echarts.init(document.querySelector(".charts_2"));
    //console.log(myChart);
    // 2.准备数据
    var option = {
        title: {
            text: '2017年注册人数'
        },
        tooltip: {},
        legend: {
            data:['人数']
        },
        xAxis: {
            data: ["1月","2月","3月","4月","5月","6月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [395, 1600, 1900, 888, 1500, 2000]
        }]
    };


   var option2 = {
        title : {
            text: '热门品牌销售',
            subtext: '2017年6月',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耐克','阿迪达斯','newbalance','特步','李宁']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'耐克'},
                    {value:310, name:'阿迪达斯'},
                    {value:234, name:'newbalance'},
                    {value:135, name:'特步'},
                    {value:1548, name:'李宁'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 3.显示数据
    myChart.setOption(option);
    myChart2.setOption(option2);
});