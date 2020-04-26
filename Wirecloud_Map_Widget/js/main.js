"use strict";


// var myDiv = 'myDiv';
function customMap(myDiv, data, layout) {

    Plotly.setPlotConfig({
        mapboxAccessToken: MashupPlatform.prefs.get('mapboxAccessToken'),
    });

    // Plotly.newPlot('myDiv', data, layout);
    Plotly.plot('myDiv', data, layout);

}


function premadeMap(myDiv, userInput) {


    // userInput contains lists of name, lat and lon axis
    // userInput = ['name', latAxis, lonAxis]

    // They are splitted into 3 seperated lists and pushed to plotly 
	/*var names = ['Name1', 'Name2', 'Name3', 'Name4',
        	'Name5'];
	var latAxis = [65.0459471, 65.080919, 65.00677, 65.003276, 65.08105];
	var lonAxis = [25.5859747, 25.456813, 25.47987, 25.452433, 25.457291];*/


    var names = []
    var latAxis = []
    var lonAxis = []
    // User input gets handled to proper form
    for(var i = 0; i < userInput.length; i++) {
        names.push(userInput[i][0]);
        lonAxis.push(userInput[i][1]);
        latAxis.push(userInput[i][2]);
    }


    var data = [{
        type: 'scattermapbox',
        mode: 'markers',

        text:
        	names,
        lon:
        	lonAxis,
        lat:
        	latAxis,
        marker: {
            size: 7,
            color: [
                '#bebada', '#fdb462', '#fb8072', '#d9d9d9', '#bc80bd',
                '#b3de69', '#8dd3c7', '#80b1d3', '#fccde5', '#ffffb3'
            ],
            line: {
                width: 1
            }
        },
        name: 'Europe',
        textposition: [
            'top right', 'top left', 'top center', 'bottom right', 'top right',
            'top left', 'bottom right', 'bottom left', 'top right', 'top right'
        ],
    }];

    // Calculates avarages of dots, used to draw initial map somewhat close
	var avgLat = 0;
	if(latAxis.length != 0) {
		for(var i = 0; i < latAxis.length; i++) {
			avgLat = avgLat + latAxis[0];
		}
		avgLat = avgLat / latAxis.length;
	}
	var avgLon = 0;
	if(lonAxis.length != 0) {
		for(var i = 0; i < lonAxis.length; i++) {
			avgLon = avgLon + lonAxis[0];
		}
		avgLon = avgLon / lonAxis.length;
	}
    var layout = {
        title: 'NAME',
        width: MashupPlatform.widget.context.get('widthInPixels') - 10,
		height: MashupPlatform.widget.context.get('heightInPixels') - 10,
        autosize: true,
        hovermode: 'closest',
        font: {
        	color : 'white',
            size: 6
        },
        dragmode: 'zoom',
        titlefont: {
            size: 16
        },
        mapbox : {
        	center: {
        		lat : avgLat,
        		lon : avgLon 
        	},
        	domain : {
        		x : [0, 1],
        		y : [0, 1]
        	},
        	style : 'dark',
        	zoom: 10
        },
    };
  	Plotly.setPlotConfig({
    	mapboxAccessToken: MashupPlatform.prefs.get('mapboxAccessToken'),
  	});

    // Plotly.newPlot('myDiv', data, layout);
    Plotly.plot('myDiv', data, layout);
}

// premadeMap('myDiv');
MashupPlatform.wiring.registerCallback('Input_premade', function(data) {
    premadeMap('myDiv', data);
});
// TO-DO: Custom version, requires custom layout and data
MashupPlatform.wiring.registerCallback('Input_custom', function(data, layout) {
    customMap('myDiv', data, layout);
});



