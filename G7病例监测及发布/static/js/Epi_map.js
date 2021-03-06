var ec_center = echarts.init(document.getElementById("Epi_map"));
//dummy data
var dummy_data=[{'name':'上海','value':'1'},{'name':'重庆','value':'23'},{'name':'北京','value':'323'},
{'name':'海南','value':'1123'},{'name':'西藏','value':'523'},{'name':'台湾','value':'42113'}];
var dummy_data2=[{'name':'上海','value':'1'},{'name':'重庆','value':'23'},{'name':'北京','value':'3'},
{'name':'海南','value':'13'},{'name':'西藏','value':'3'},{'name':'台湾','value':'42'}];

var choice=dummy_data;
var ec_center_option = {
    backgroundColor:'',
    title: {
        text: '',
        subtext: '',
        x: 'left'
    },
    tooltip: {
        trigger: 'item'
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{
            start: 1,
            end: 9
        },
            {
                start: 10,
                end: 99
            },
            {
                start: 100,
                end: 999
            },
            {
                start: 1000,
                end: 9999
            },
            {
                start: 10000
            },
        ],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
    //配置属性
    series: [{
        name: '累计确诊人数',
        type: 'map',
        mapType: 'china',
        roam: false, //拖动和缩放
        // background:'#ff00ff',
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data: choice //数据
    }]
};
ec_center.setOption(ec_center_option);
//实现点击按钮切换地图类型
$("#changeMap").click(function (){
    if (choice==dummy_data)
    {
        choice=dummy_data2;
        $("#changeMap").html('切换累积确诊地图');
    }
    else{
        choice=dummy_data;
        $("#changeMap").html('切换现存确诊地图')
    }
    ec_center.setOption({
    series:[{
            data:choice
    }]
    })


    
})


