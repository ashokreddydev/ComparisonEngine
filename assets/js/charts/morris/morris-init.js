var gridbordercolor = "#eee";

var tax_data = [
                 { "period": "2011 Q3", "licensed": 3407, "sorned": 660 },
                 { "period": "2011 Q2", "licensed": 3351, "sorned": 629 },
                 { "period": "2011 Q1", "licensed": 3269, "sorned": 618 },
                 { "period": "2010 Q4", "licensed": 3246, "sorned": 661 },
                 { "period": "2009 Q4", "licensed": 3171, "sorned": 676 },
                 { "period": "2008 Q4", "licensed": 3155, "sorned": 681 },
                 { "period": "2007 Q4", "licensed": 3226, "sorned": 620 },
                 { "period": "2006 Q4", "licensed": 3245, "sorned": null },
                 { "period": "2005 Q4", "licensed": 3289, "sorned": null }
];

var InitiateAreaChart = function () {
    return {
        init: function () {
            Morris.Area({
                element: 'area-chart',
                data: [
                  { period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647 },
                  { period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441 },
                  { period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501 },
                  { period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689 },
                  { period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293 },
                  { period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881 },
                  { period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588 },
                  { period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175 },
                  { period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028 },
                  { period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791 }
                ],
                xkey: 'period',
                ykeys: ['iphone', 'ipad', 'itouch'],
                labels: ['iPhone', 'iPad', 'iPod Touch'],
                pointSize: 2,
                hideHover: 'auto',
                lineColors: [themethirdcolor, themesecondary, themeprimary]
            });
        }
    };
}();

var InitiateBarChart = function () {
    return {
        init: function () {
            Morris.Bar({
				
				barSizeRatio:0.45,
                element: 'bar-chart',
                data: [
                  { Month: 'Jan', a: 18, },
                  { Month: 'Feb', a: 24, },
                  { Month: 'Mar', a: 27, },
                  { Month: 'Apr', a: 30, },
                  { Month: 'May', a: 29, },
                  { Month: 'Jun', a: 27, },
                  { Month: 'Jul', a: 33,},
				  { Month: 'Aug', a: 36,},
				  { Month: 'Sep', a: 39,},
				  { Month: 'Oct', a: 32,},
				  { Month: 'Nov', a: 31,},
				  { Month: 'Dec', a: 26,},
                ],
                xkey: 'Month',
                ykeys: ['a'],
				ymax:40,
                labels: ['Total Companies'],
				xLabelMargin: 10,
                hideHover: 'true',
                barColors: [themeprimary]
            });
        }
    };
}();
var InitiateBarChart3 = function () {
    return {
        init: function () {
            Morris.Bar({
				
				barSizeRatio:0.45,
                element: 'bar-chart-3',
                data: [
                  { Month: 'Jan', a: 10, },
                  { Month: 'Feb', a: 15, },
                  { Month: 'Mar', a: 25, },
                  { Month: 'Apr', a: 40, },
                  { Month: 'May', a: 55, },
                  { Month: 'Jun', a: 66, },
                  { Month: 'Jul', a: 74,},
				  { Month: 'Aug', a: 81,},
				  { Month: 'Sep', a: 99,},
				  { Month: 'Oct', a: 120,},
				  { Month: 'Nov', a: 135,},
				  { Month: 'Dec', a: 138,},
                ],
                xkey: 'Month',
                ykeys: ['a'],
				xLabelMargin: 10,
				
				ymax:140,
                labels: ['Total Employees'],
               hideHover: 'true',
                barColors: [themeprimary]
            });
        }
    };
}();


var InitiateBarChart2 = function () {
    return {
        init: function () {
            Morris.Bar({
				
				barSizeRatio:0.45,
                element: 'bar-chart-2',
                data: [
                  { Month: 'Jan', a: 60, },
                  { Month: 'Feb', a: 30, },
                  { Month: 'Mar', a: 21, },
                  { Month: 'Apr', a: 33, },
                  { Month: 'May', a: 45, },
                  { Month: 'Jun', a: 37, },
                  { Month: 'Jul', a: 51,},
				  { Month: 'Aug', a: 55,},
				  { Month: 'Sep', a: 66,},
				  { Month: 'Oct', a: 70,},
				  { Month: 'Nov', a: 75,},
				  { Month: 'Dec', a: 89,},
                ],
                xkey: 'Month',
                ykeys: ['a'],
				xLabelMargin: 10,
				ymax:120,
                labels: ['Pending E-verify'],
               hideHover: 'true',
                barColors: [themeprimary]
            });
        }
    };
}();

var InitiateBarChart4 = function () {
    return {
        init: function () {
            Morris.Bar({
				
				barSizeRatio:0.45,
                element: 'bar-chart-4',
                data: [
                  { Month: 'Jan', a: 30, },
                  { Month: 'Feb', a: 25, },
                  { Month: 'Mar', a: 33, },
                  { Month: 'Apr', a: 45, },
                  { Month: 'May', a: 60, },
                  { Month: 'Jun', a: 54, },
                  { Month: 'Jul', a: 33,},
				  { Month: 'Aug', a: 66,},
				  { Month: 'Sep', a: 63,},
				  { Month: 'Oct', a: 21,},
				  { Month: 'Nov', a: 32,},
				  { Month: 'Dec', a: 48,},
                ],
                xkey: 'Month',
                ykeys: ['a'],
				
				xLabelMargin: 10,
				ymax:80,
                labels: ['Onboard I9s'],
               hideHover: 'true',
                barColors: [themeprimary]
            });
        }
    };
}();


var InitiateLineChart = function () {
    return {
        init: function () {
            Morris.Line({
                element: 'line-chart',
                data: tax_data,
                xkey: 'period',
                ykeys: ['licensed', 'sorned'],
                labels: ['Licensed', 'Off the road'],
                lineColors: [themeprimary, themethirdcolor]
            });

        }
    };
}();

var InitiateLineChart2 = function () {
    return {
        init: function () {
            Morris.Line({
                element: 'line-chart-2',
                data: [
                  { y: '2006', a: 100, b: 90 },
                  { y: '2007', a: 75, b: 65 },
                  { y: '2008', a: 50, b: 40 },
                  { y: '2009', a: 75, b: 65 },
                  { y: '2010', a: 50, b: 40 },
                  { y: '2011', a: 75, b: 65 },
                  { y: '2012', a: 100, b: 90 }
                ],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                lineColors: [themeprimary, themethirdcolor]
            });

        }
    };
}();

var InitiateDonutChart = function () {
    return {
        init: function () {
            Morris.Donut({
                element: 'donut-chart',
                data: [
                  { label: 'Jan', value: 18 , },
                  { label: 'Feb', value: 24 },
                  { label: 'Mar', value: 27 },
                  { label: 'Apr', value: 30 },
                  { label: 'May', value: 29 },
                  { label: 'Jun', value: 27 },
                  { label: 'Jul', value: 33 },
                  { label: 'Aug', value: 36 },
                  { label: 'Sep', value: 39 },
                  { label: 'Oct', value: 32 },
                  { label: 'Nov', value: 31 },
                  { label: 'Dec', value: 26 }
                ],
                colors: [themeprimary, themesecondary, themethirdcolor, themefourthcolor, themefifthcolor, '#5DB2FF', '#03B3B2', '#FF8F32', '#cc324b', '#AC193D', '#8C0095', '#0072C6'],
                formatter: function (y) { return y + "%" }
            });
        }
    };
}();

var InitiateDonutChart2 = function () {
    return {
        init: function () {
            Morris.Donut({
                element: 'donut-chart-2',
                data: [
                  { label: 'Jan', value: 60, },
                  { label: 'Feb', value: 30},
                  { label: 'Mar', value: 21},
                  { label: 'Apr', value: 33},
                  { label: 'May', value: 45},
                  { label: 'Jun', value: 37},
                  { label: 'Jul', value: 51},
                  { label: 'Aug', value: 55},
                  { label: 'Sep', value: 66},
                  { label: 'Oct', value: 70 },
                  { label: 'Nov', value: 75 },
                  { label: 'Dec', value: 89 }
                ],
                colors: [themeprimary, themesecondary, themethirdcolor, themefourthcolor, themefifthcolor, '#5DB2FF', '#03B3B2', '#FF8F32', '#cc324b', '#AC193D', '#8C0095', '#0072C6'],
                formatter: function (y) { return y + "%" }
            });
        }
    };
}();

var InitiateDonutChart3 = function () {
    return {
        init: function () {
            Morris.Donut({
                element: 'donut-chart-3',
                data: [
                  { label: 'Jan', value:10 , },
                  { label: 'Feb', value:15 },
                  { label: 'Mar', value:25 },
                  { label: 'Apr', value:40 },
                  { label: 'May', value:55 },
                  { label: 'Jun', value:66 },
                  { label: 'Jul', value:74 },
                  { label: 'Aug', value:81 },
                  { label: 'Sep', value:99 },
                  { label: 'Oct', value:120},
                  { label: 'Nov', value:135},
                  { label: 'Dec', value:138}
                ],
                colors: [themeprimary, themesecondary, themethirdcolor, themefourthcolor, themefifthcolor, '#5DB2FF', '#03B3B2', '#FF8F32', '#cc324b', '#AC193D', '#8C0095', '#0072C6'],
                formatter: function (y) { return y + "%" }
            });
        }
    };
}();

var InitiateDonutChart4 = function () {
    return {
        init: function () {
            Morris.Donut({
                element: 'donut-chart-4',
                data: [
                  { label: 'Jan', value: 30, },
                  { label: 'Feb', value: 25},
                  { label: 'Mar', value: 33},
                  { label: 'Apr', value: 45},
                  { label: 'May', value: 60},
                  { label: 'Jun', value: 54},
                  { label: 'Jul', value: 33},
                  { label: 'Aug', value: 66},
                  { label: 'Sep', value: 63},
                  { label: 'Oct', value: 21 },
                  { label: 'Nov', value: 32 },
                  { label: 'Dec', value: 48 }
                ],
                colors: [themeprimary, themesecondary, themethirdcolor, themefourthcolor, themefifthcolor, '#5DB2FF', '#03B3B2', '#FF8F32', '#cc324b', '#AC193D', '#8C0095', '#0072C6'],
                formatter: function (y) { return y + "%" }
            });
        }
    };
}();
