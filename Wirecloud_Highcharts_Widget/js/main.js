"use strict";

var theChart;

function listen() {
    MashupPlatform.wiring.registerCallback('Data', function(graphData) {
		// data = [graphData, command to update graph]
        var minDate = graphData.data[0].startDate[0];

        for(var i = 0; i < graphData.data.length; i++) {
            if(graphData.data[i].startDate[0] < minDate) {
                minDate = graphData.data[i].startDate[0];
            }
        }
        // Checks out min and max value of date
		// Option to handle data in real time
        // Requires for mainfunction to first send complete highcarts graph as seen below
        // Then mainWidget needs to send continuously updated data for example every second
		if (graphData.update === true) {
			theChart.update({
				series: graphData.data,
		    });
		// Initializes the graph
        } else {
            theChart = Highcharts.chart('container', {
                title : {text: graphData.titles[0], x: -20},
                subtitle: {text: graphData.titles[1], x: -20},
                xAxis: {
                    type: 'datetime',
                    min : minDate.valueOf()
                },
                yAxis: {title: {text: graphData.titles[2]}}, // Option to use y-axis data, not used for now
                tooltip: { valueSuffix: "" },
                legend: { layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0 },
                series: graphData.data,
            });
        }
	});

    // Examples of highcharts tricks
	// $('#plain').click(function () {
    //     theChart.update({
    //         chart: {
    //             inverted: false,
    //             polar: false
    //         },
    //         subtitle: {
    //             text: 'Plain'
    //         }
    //     });
    // });
    //
    // $('#inverted').click(function () {
    //     theChart.update({
    //         chart: {
    //             inverted: true,
    //             polar: false
    //         },
    //         subtitle: {
    //             text: 'Inverted'
    //         }
    //     });
    // });
    //
    // $('#polar').click(function () {
    //     theChart.update({
    //         chart: {
    //             inverted: false,
    //             polar: true
    //         },
    //         subtitle: {
    //             text: 'Polar'
    //         }
    //     });
    // });


}

document.addEventListener('DOMContentLoaded', function() {
    listen();
})
