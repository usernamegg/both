$(function(){
//选项卡
$('.ios_content ul li').click(function(){
		a();
		var index = $(this).index();
		$(this).parents('ul').siblings('.requirement').hide();
		$(this).parents('ul').siblings('.requirement').eq(index).show();
		$(this).children('img').attr('src','img/ios_ico' + (index+1) +'_active.png');
	});
	
	function a(){
		var img = $(".ios_content").find("img");
		for(var i = 0;i<img.length;i++){
			img.eq(i).attr('src','img/ios_ico' + (i+1) +'.png');
		};
	};



//北京地区
	var chart_area = echarts.init(document.getElementById('chart1'));
	option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['需求','供给'],
		bottom: '0px',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7','8','9']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'需求',
            type:'line',
			itemStyle: {normal: {
				borderColor: '#97e589',
			},
			emphasis: {
				borderColor: '#97e589',
			},
			},
			lineStyle: {normal: {
				color: '#97e589',
			}},
            areaStyle: {normal: {
				color: '#97e589',
			}},
            data:[4500, 5800,6600,4000,5800,7100,7150,7100,7200]
        },
        {
            name:'供给',
            type:'line',
			itemStyle: {normal: {
				borderColor: '#f4c022',
			},
			emphasis: {
				borderColor: '#f4c022',
			},
			},
			lineStyle: {normal: {
				color: '#f4c022',
			}},
            areaStyle: {normal: {
				color: '#f4c022',
			}},
            data:[3800, 4000,5900,6000,5800,5840,5900,5950,5900]
        },
    ]
};
//使用刚指定的配置项和数据显示图表。
   chart_area.setOption(option);
   
//上海地区
	var chart_area = echarts.init(document.getElementById('chart2'));
	option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['需求','供给'],
		bottom: '0px',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7','8','9']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'需求',
            type:'line',
			itemStyle: {normal: {
				borderColor: '#97e589',
			},
			emphasis: {
				borderColor: '#97e589',
			},
			},
			lineStyle: {normal: {
				color: '#97e589',
			}},
            areaStyle: {normal: {
				color: '#97e589',
			}},
            data:[2000, 4000,4350,3600,5700,2500,2850,2400,2900]
        },
        {
            name:'供给',
            type:'line',
			itemStyle: {normal: {
				borderColor: '#f4c022',
			},
			emphasis: {
				borderColor: '#f4c022',
			},
			},
			lineStyle: {normal: {
				color: '#f4c022',
			}},
            areaStyle: {normal: {
				color: '#f4c022',
			}},
            data:[1800, 4300,4450,3500,5900,8000,7800,7650,7500]
        },
    ]
};
//使用刚指定的配置项和数据显示图表。
   chart_area.setOption(option);
   
//深圳地区
	var chart_area = echarts.init(document.getElementById('chart3'));
	option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['需求','供给'],
		bottom: '0px',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7','8','9']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'需求',
            type:'line',
			itemStyle: {normal: {
				borderColor: '#97e589',
			},
			emphasis: {
				borderColor: '#97e589',
			},
			},
			lineStyle: {normal: {
				color: '#97e589',
			}},
            areaStyle: {normal: {
				color: '#97e589',
			}},
            data:[2000, 2300,2700,2600,2800,3000,2950,2800,2900]
        },
        {
            name:'供给',
            type:'line',
			itemStyle: {normal: {
				borderColor: '#f4c022',
			},
			emphasis: {
				borderColor: '#f4c022',
			},
			},
			lineStyle: {normal: {
				color: '#f4c022',
			}},
            areaStyle: {normal: {
				color: '#f4c022',
			}},
            data:[1500, 3500,3700,3000,3200,4700,4800,5250,4600]
        },
    ]
};
//使用刚指定的配置项和数据显示图表。
   chart_area.setOption(option);

//就业薪资 
var chart_area = echarts.init(document.getElementById('chart4'));
	option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};


//使用刚指定的配置项和数据显示图表。
   chart_area.setOption(option);	
	

	
});