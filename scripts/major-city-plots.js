

$(function () {
	
	// state, code, suspect, confirmed, recovered, death
var states = []

//fetch("https://raw.githubusercontent.com/gabrielcesar/covid-br/master/data/covid.json")
fetch("https://raw.githubusercontent.com/AminuBishir/covid-1_9/master/data/ng_states.json")
    .then(response => response.json())
    .then(function(data)
    {
        for (var state = 0; state < data.length; state ++){
			states.push({'state': data[state]['state'], 'code': data[state]['code'], 'suspect': data[state]['suspect'], 'confirmed': data[state]['confirmed'], 'recovered': data[state]['recovered'], 'death': data[state]['death']})
			console.log(states[state])
			
				}
            
        console.log(states[0]['code']+' state')
	$("#map-area").mapael({
			map: {
				name: "nigeria",
				defaultArea: {
					attrs: {
						fill: "#f5faff",
						stroke: "#ced8d0",
					}
				},
				defaultPlot: {
					size: 8,
				}
			},
			plots: {
				'abia': {
					latitude: 5.25,
					longitude: 7.403,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[0]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[0]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[0]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[0]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[0]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[0]['death'] + "</span>"}
				},
				'adamawa': {
					latitude: 9.3,
					longitude: 12.5,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[1]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[1]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[1]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[1]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[1]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[1]['death'] + "</span>"}
				},
				'akwa-ibom': {
					latitude: 5,
					longitude: 7.833,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[2]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[2]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[2]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[2]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[2]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[2]['death'] + "</span>"}
				},
				'anambra': {
					latitude: 6.333,
					longitude: 7,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[3]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[3]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[3]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[3]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[3]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[3]['death'] + "</span>"}
				},
				'bauchi': {
					latitude: 10.5,
					longitude: 10,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[4]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[4]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[4]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[4]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[4]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[4]['death'] + "</span>"}
				},
				'bayelsa': {
					latitude: 4.7,
					longitude: 5.9,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[5]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[5]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[5]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[5]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[5]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[5]['death'] + "</span>"}
				},
				'benue': {
					latitude: 7.333,
					longitude: 8.75,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[6]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[6]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[6]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[6]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[6]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[6]['death'] + "</span>"}
				},
				'borno': {
					latitude: 11.5,
					longitude: 13,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[7]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[7]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[7]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[7]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[7]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[7]['death'] + "</span>"}
				},
				'cross-river': {
					latitude: 5.75,
					longitude: 8.5,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[8]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[8]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[8]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[8]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[8]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[8]['death'] + "</span>"}
				},
				'delta': {
					latitude: 5.5,
					longitude: 6,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[9]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[9]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[9]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[9]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[9]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[9]['death'] + "</span>"}
				},
				'ebonyi': {
					latitude: 6.25,
					longitude: 8.083,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[10]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[10]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[10]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[10]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[10]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[10]['death'] + "</span>"}
				},
				'edo': {
					latitude: 6.5,
					longitude: 6,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[11]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[11]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[11]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[11]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[11]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[11]['death'] + "</span>"}
				},
				'ekiti': {
					latitude: 7.667,
					longitude: 5.25,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[12]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[12]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[12]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[12]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[12]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[12]['death'] + "</span>"}
				},
				'enugu': {
					latitude: 6.5,
					longitude: 7.5,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[13]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[13]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[13]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[13]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[13]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[13]['death'] + "</span>"}
				},
				'fct': {
					latitude: 8.833333,
					longitude: 7.166667,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[14]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[14]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[14]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[14]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[14]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[14]['death'] + "</span>"}
				},
				'gombe': {
					latitude: 10.25,
					longitude: 11.167,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[15]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[15]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[15]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[15]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[15]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[15]['death'] + "</span>"}
				},
				'imo': {
					latitude: 5.483,
					longitude: 7.033,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[16]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[16]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[16]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[16]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[16]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[16]['death'] + "</span>"}
				},
				'jigawa': {
					latitude: 12,
					longitude: 9.75,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[17]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[17]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[17]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[17]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[17]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[17]['death'] + "</span>"}
				},
				'kaduna': {
					latitude: 10.333,
					longitude: 7.75,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[18]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[18]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[18]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[18]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[18]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[18]['death'] + "</span>"}
				},
				'kano': {
					latitude: 11.5,
					longitude: 8.5,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[19]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[19]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[19]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[19]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[19]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[19]['death'] + "</span>"}
				},
				'katsina': {
					latitude: 12.25,
					longitude: 7.5,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[20]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[20]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[20]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[20]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[20]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[20]['death'] + "</span>"}
				},
				'kebbi': {
					latitude: 11.5,
					longitude: 4,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[21]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[21]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[21]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[21]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[21]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[21]['death'] + "</span>"}
				},
				'kogi': {
					latitude: 7.5,
					longitude: 6.7,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[22]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[22]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[22]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[22]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[22]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[22]['death'] + "</span>"}
				},
				'kwara': {
					latitude: 8.5,
					longitude: 5,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[23]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[23]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[23]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[23]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[23]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[23]['death'] + "</span>"}
				},
				'lagos': {
					latitude: 6.583,
					longitude: 3.75,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[24]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[24]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[24]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[24]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[24]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[24]['death'] + "</span>"}
				},
				'nasarawa': {
					latitude: 8.533,
					longitude: 8.3,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[25]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[25]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[25]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[25]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[25]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[25]['death'] + "</span>"}
				},
				'niger': {
					latitude: 10,
					longitude: 6,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[2]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[26]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[26]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[26]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[26]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[26]['death'] + "</span>"}
				},
				'ogun': {
					latitude: 7,
					longitude: 3.583,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[27]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[27]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[27]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[27]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[27]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[27]['death'] + "</span>"}
				},
				'ondo': {
					latitude: 7.167,
					longitude: 5.083,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[28]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[28]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[28]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[28]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[28]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[28]['death'] + "</span>"}
				},
				'osun': {
					latitude: 7.5,
					longitude: 4.5,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[29]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[29]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[29]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[29]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[29]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[29]['death'] + "</span>"}
				},
				'oyo': {
					latitude: 8,
					longitude: 4,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[30]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[30]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[30]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[30]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[30]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[30]['death'] + "</span>"}
				},
				'plateau': {
					latitude: 9.167,
					longitude: 9.75,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[31]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[31]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[31]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[31]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[31]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[31]['death'] + "</span>"}
				},
				'rivers': {
					latitude: 4.75,
					longitude: 6.83,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[32]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[32]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[32]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[32]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[32]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[32]['death'] + "</span>"}
				},
				'sokoto': {
					latitude: 13.083,
					longitude: 5.25,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[33]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[33]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[33]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[33]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[33]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[33]['death'] + "</span>"}
				},
				'taraba': {
					latitude: 8,
					longitude: 10.5,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[34]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[34]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[34]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[34]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[34]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[34]['death'] + "</span>"}
				},
				'yobe': {
					latitude: 12.0,
					longitude: 11.5,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[35]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[35]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[35]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[35]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[35]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[35]['death'] + "</span>"}
				},
				'zamfara': {
					latitude: 12.167,
					longitude: 6.25,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[36]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[36]['state'] + " State</span><br>Suspected Cases <span class='arwen_color_orange'>" + states[36]['suspect'] + "</span><br>Confirmed Cases <span class='arwen_color_orange'>" + states[36]['confirmed'] + "</span><br>Recovered <span class='arwen_color_orange'>" + states[36]['recovered'] + "</span><br>Death <span class='arwen_color_red'>" + states[36]['death'] + "</span>"}
				},
			},
			// links: {
			//     'link1': {
			//         factor: -0.3,
			//         between: ['kano', 'lagos'],
			//         attrs: {
			//             "stroke-width": 2
			//         }
			//     }
			// }
		});
    })
	
    
});