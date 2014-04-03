var LocationsPool = new Array();
var cities = new Object();
var areas = new Array();
var selectionHtml = '';

var locObj = function(lat, lon, title, address, phone, time, city, area) {
	this.lat = lat || '',
	this.lon = lon || '',
	this.title = title || '',
	this.address = address || '',
	this.phone = phone || '',
	this.time = time || '',
	this.city = city || '',
	this.area = area || '',
	this.html = '<h3>' + title + '</h3><p>' + address + '</p><p>' + phone + '</p><p>' + time + '</p>',
 	this.icon = 'map_icon.png'
};

var services = ['fixService', 'beautyService', 'showService'];

var reData = {};

// for customize Maplace menu
var html_menus = {
	//required: called by Maplace.js to activate the current voice on menu
	activateCurrent: function(index) {
		this.html_element.find("input[value='" + index + "']").attr('checked', true);
	},
	//required: called by Maplace.js to get the html of the menu
	getHtml: function() {
		var self = this, html = '';

		// console.log('what is getHTML this? ' + Object.keys(self));
		// console.log('what is getHTML this view_all_key? ' + self.view_all_key);
		// console.log('what is getHTML this o locations length? ' + this.o.locations.length);
		// console.log('what is getHTML this ln ' + this.ln);
		//if more than one location
		if(this.ln >= 1) {
			html += '<table class="checkbox controls ' + this.o.controls_cssclass + '">';

			//check "view all" link
			//use ShowOnMenu(index) to know if a location has to appear on menu
			if(this.ShowOnMenu(this.view_all_key)) {
				// html += '<label><input type="radio" name="gmap" value="'
				// 			 + this.view_all_key + '"/>' + this.o.view_all_text + '</label>';

				html += '<tr><td><input type="radio" name="gmap" value="'
							 + this.view_all_key + '"/>' + this.o.view_all_text + '<td></td><td></td></td></tr>';
			}

			//iterate the locations
			for (var a = 0; a < this.ln; a++) {
				if(this.ShowOnMenu(a)) {
					// html += '<div><input type="radio" name="gmap" value="' + (a+1) + '"/>' 
					// 		 + (this.o.locations[a].title || ('#' + (a+1))) 
					// 		 + '<span>' + this.o.locations[a].address + '</span>'
					// 		 + '</div>';

					html += '<tr><td><input type="radio" name="gmap" value="' + (a+1) + '"/>' 
							 + (this.o.locations[a].title || ('#' + (a+1))) 
							 + '<td class="address">' + this.o.locations[a].address + '</td><td class="phone">'
							 + this.o.locations[a].phone
							 + '</td><td><button class="plan">plan</button></td></tr>';
				}
			}
			html += '</table>';
		}

		this.html_element = $('<div class="wrap_controls"></div>').append(html);

		//event on change
		//use ViewOnMap(index) to trigger the marker on map
		this.html_element.find('input[type=radio]').bind('change', function() {
			self.ViewOnMap(this.value); 
		});
		
		return this.html_element;
	}
};
//end html menu

var addressInputBoxHtml = '<div class="addressBoxWrap" style="position:relative; top: 0px; left: 55px; width: 250px; z-index: 99;">'
+ '<div class="inputAddressBox" style="width: 250px; height: 80px; background-color: #fff; position: absolute; padding: 10px;">'
+ '<p>請輸入您的所在地址：</p>'
+ '<input typd="text" id="inputAddress">'
+ '<button id="addrConfirm">確定</button>'
+ '</div>'
+ '<a href="#" class="closeBtn" style="position:absolute; top: 0px; right: 0px; text-decoration: none">x</a></div>';

// google map轉中文地址to經緯度
var geocoder;
geocoder = new google.maps.Geocoder();

jQuery.ajax({
	url: 'locations.txt'
}).done(function(data){
	// console.log('done');
	var json = jQuery.parseJSON(data);
	LocationsPool = json.locs;
	cities = json.cities;
	areas = json.areas;
	reproduce();
}).fail(function(){

});

services.forEach(function(item, index){
	reData[item] = new Object();
});


function reproduce() {
	LocationsPool.forEach(function(obj, index){
		for (var i = 0; i < services.length; i++) {
			if (obj[services[i]] == true) {
				// nissanData.locations.push({service: services[i],
				// 	       locElem: new locObj(obj.lat, obj.lng, obj.title, obj.address, obj.phone, obj.time, (obj.city).toString(), obj.post)
				// });
				
				// console.log('tttest ' + reData[services[i]][obj.city]);
				if (!reData[services[i]][obj.city]) { //如果還沒有這個
					// console.log('false');
					//要變成{'fixService': {'0': object}}
					reData[services[i]][obj.city] = new Object();

				} else {
					// console.log('true');
				}

				if (!reData[services[i]][obj.city][obj.post]) {
					//要變成{'fixService': {'0': {'104': array, '105': array}}}
					reData[services[i]][obj.city][obj.post] = new Array();
				} else {

				}
						
				var newObj = new locObj(obj.lat, obj.lng, obj.title, obj.address, obj.phone, obj.time, (obj.city).toString(), obj.post);
				//{'fixService': {'0': {'104': [obj,obj,obj,...]}}}
				reData[services[i]][obj.city][obj.post].push(newObj);
			}
		}
	});

	// console.log(reData);
	// console.log(reData['fixService']['0']['105']);

	var myData = function() {
		this.dataset = reData;
		this.getCityArray = function(service) {
			var newCities = new Array();
			//find city name
			var cityCode = Object.keys(this.dataset[service]);
			console.log('city code ' + Object.keys(this.dataset[service]));
			for (var i = 0; i < cityCode.length; i++) {
				newCities.push({name: cities[cityCode[i]], key: cityCode[i]});
			}

			return newCities;
		};
		this.getAreasArray = function(service, city) {
			var newAreas = new Array();
			console.log('city code: ' + city);
			// console.log('area array ' + Object.keys(this.dataset[service]));
			var areasCodes = Object.keys(this.dataset[service][city]);
			areasCodes.forEach(function(item, index) {
				// console.log('test area: ' + item);
				// console.log('test area: ' + areas[parseInt(city)][item]);
				newAreas.push({'zip': item, 'area': areas[parseInt(city)][item]});
			});
			return newAreas;
		};
		this.getLocations = function(n) {
			// console.log('kkkk ' + this.getLocations.arguments.length);
			var newLocations = new Array();
			var serviceType = this.getLocations.arguments[0];
			var cityCode = '0';
			var areaCode = '0';
			switch (this.getLocations.arguments.length) {
				case 1:
					for (key in this.dataset[serviceType]) {
						// console.log('key ' + key);
						for (key2 in this.dataset[serviceType][key]) {
							// console.log('key1' + key + 'key2 ' + key2);
							// console.log('obj2 ' + typeof this.dataset[serviceType][key][key2]);
							for (key3 in this.dataset[serviceType][key][key2]) {
								newLocations.push(this.dataset[serviceType][key][key2][key3]);
							}
						}
					}
					// console.log(newLocations);
					break;
				case 2:
					cityCode = this.getLocations.arguments[1];
					for (key in this.dataset[serviceType][cityCode]) {
						for (key2 in this.dataset[serviceType][cityCode][key]) {
							// console.log('xxxxxx ' + this.dataset[serviceType][cityCode][key][key2]);
							newLocations.push(this.dataset[serviceType][cityCode][key][key2]);
						}
					}
					break;
				case 3:
					cityCode = this.getLocations.arguments[1];
					areaCode = this.getLocations.arguments[2];
					// console.log('xxxxoooo ' + this.dataset[serviceType][cityCode]);
					for (key in this.dataset[serviceType][cityCode][areaCode]) {
						newLocations.push(this.dataset[serviceType][cityCode][areaCode][key]);
					}
					break;
				default:
					break;
			}
			// console.log(newLocations);
			return newLocations;
		};

	}

	var nissanData = new myData();
	for (var i = 1; i <= services.length; i++) {
		selectionHtml = '';
		selectionHtml = '<div class="subSelect" id="subCity' + i + '">';

		nissanData.getCityArray(getServiceName(i)).forEach(function(obj, index){
			selectionHtml += '<a href="javascript:;" key="' + obj.key + '">' + obj.name + '</a>';
		});
		selectionHtml += '</div>';
		$('#city' + i).after(selectionHtml);
	}

	$('.jSelect .city').bind('click', function(){
		// console.log('test ' + $(this).data('city'));
		var citySelect = '#subCity' + $(this).data('city');
		$(citySelect).fadeIn(300);
		// console.log('citySelect '+ $(citySelect));
	});

	$('.jSelect .area').bind('click', function() {
		var areaSelect = '#subArea' + $(this).data('area');
		// console.log('areaSelect ' + areaSelect);
		$(areaSelect).fadeIn(300);
	});
	
	var newMap = new Maplace();
	bindCityClick(nissanData, newMap);
	
	$('#controls1').css('display','none');
	newMap.AddControl('myList', html_menus);
	// console.log('get init locations: ' + nissanData.getLocations('fixService'));
	newMap.Load({
		locations: nissanData.getLocations('fixService')
		// locations: testLocs
		,generate_controls: true
		,map_div: '#gmap-menu'
		,controls_type: 'myList'
		,controls_on_map: false
		,controls_div: '#controls1'
	});

	bindTabClick(newMap, nissanData);

}
//end reproduce

	
$('body').click(function(e){
	// console.log('click where ' + $(e.target).html());
	if (!$(e.target).hasClass('city')) {
		$('.subSelect').hide();
	}
	if (!$(e.target).hasClass('area')) {
		$('.subsubSelect').hide();
	}
});

function bindCityClick(nissanData, newMap) {
	$('.subSelect').find('a').on('click', function(e) { 
		$('#controls1').css('display', 'block');
		$(e.target).parents('.jSelect').eq(0).find('.city').eq(0).html($(e.target).html());
		var selections = $(e.target).parents('.subSelect').attr('id');
		var lastCharacter = selections.substr(selections.length - 1);
		
		var subSelectionsHTML = '<div class="subsubSelect" id="subArea' + lastCharacter + '">';
		var areaSelectHTML = '';

		// console.log('new areas: ' + $(e.target).attr('key'));
		var newAreas = nissanData.getAreasArray(getServiceName(lastCharacter), $(e.target).attr('key'));
		newAreas.forEach(function(obj, index) {
			areaSelectHTML += '<a href="javascript:;" key="' + obj.zip + '">' + obj.area + '</a>';
		});
		subSelectionsHTML += areaSelectHTML + '</div>';
		$('#area' + lastCharacter).next('.subsubSelect').remove();
		$('#area' + lastCharacter).after(subSelectionsHTML);

		renderNewMap( nissanData.getLocations(getServiceName(lastCharacter), $(e.target).attr('key')), newMap);
		//換了city以後area的第一個也要換
		$('#area' + lastCharacter).html('選擇區域');

		bindAreaClick(getServiceName(lastCharacter), $(e.target).attr('key'), newMap, nissanData);
	});	
}

function getServiceName(lastCharacter) {
	var serviceTarget;
	switch (lastCharacter) {
		case '1':
		case 1:
			serviceTarget = 'fixService';
			break;
		case '2':
		case 2:
			serviceTarget = 'beautyService';
			break;
		case '3':
		case 3:
			serviceTarget = 'showService';
			break;
		default:
		serviceTarget = '';
			break;
	}
	// console.log('serviceTarget ' + serviceTarget);
	return serviceTarget;
		
}

function renderNewMap(newLocations, newMap) {
	if (newLocations.length > 0) {
		newMap.SetLocations(newLocations, true);
	} else {
		alert('there is no location');
	}
	
	// console.log('########check4 ' + LocationsPool[0].title);
	$('.plan').bind('click', function(e){
		planRouteClick($(e.target));
		// console.log('click plan ' + $(e.target).html());
	});

}

function bindAreaClick(serviceType, city, newMap, nissanData) {
	var newAreaLocs;
	$('.subsubSelect').find('a').bind('click', function(e){
		newAreaLocs = nissanData.getLocations(serviceType, city, $(e.target).attr('key'));
		renderNewMap(newAreaLocs, newMap);
		$(e.target).parents('.jSelect').eq(0).find('.area').eq(0).html($(e.target).html());
	});
}

function bindTabClick(newMap, nissanData) {
	var newTabLocs;
	$('.nav-one').click(function(){
		newTabLocs = nissanData.getLocations('fixService');
	});
	$('.nav-two').click(function(){
		newTabLocs = nissanData.getLocations('beautyService');
	});
	$('.nav-three').click(function(){
		newTabLocs = nissanData.getLocations('showService');
	});
}

function planRouteClick(thisBtn) {
	$('.addressBoxWrap').remove();
	thisBtn.after(addressInputBoxHtml);
	$('#addrConfirm').bind('click', getAddressClick);
	$('.closeBtn').bind('click', function(){
		$('.addressBoxWrap').remove();
	});
}

function getAddressClick() {
	// console.log('addrConfirm value: ' + $('#inputAddress').val());
	// console.log('addrConfirm value addr: ' + $(this).parents('tr').eq(0).find('.address').eq(0).html());
	// var fromAddress = $('#inputAddress').val();
	var fromAddress = '台北市忠孝東路四段287號';
	var toAddress = $(this).parents('tr').eq(0).find('.address').eq(0).html();
	var fromAddressLatLon, toAddressLatLon;
	var getLatLngOk = 0;
	getLatLonPosition(fromAddress, function(res){
		// fromAddressLatLon = res;
		openNew('fromAddressLatLon', res.lat, res.lng);
	});

	getLatLonPosition(toAddress, function(res){
		// toAddressLatLon = res;
		openNew('toAddressLatLon', res.lat, res.lng);
	});

	function openNew(varName, addressLat, addressLng) {
		getLatLngOk++;
		// console.log('varName: ' + varName + ', addressLat: ' + addressLat);
		// console.log('getLatLng: ' + getLatLngOk);
		if (varName == 'fromAddressLatLon') {
			fromAddressLatLon = {'lat': addressLat, 'lng': addressLng};
		} else if (varName == 'toAddressLatLon') {
			toAddressLatLon = {'lat': addressLat, 'lng': addressLng};
		}

		if (getLatLngOk == 2) {
			// console.log('go open new fromAddressLatLon: ' + fromAddressLatLon.lat);
			// console.log('go open new fromAddressLatLon: ' + fromAddressLatLon.lng);
			// console.log('go open new toAddressLatLon: ' + toAddressLatLon.lat);
			// console.log('go open new toAddressLatLon: ' + toAddressLatLon.lng);
			window.open('https://www.google.com.tw/maps/dir/' + fromAddressLatLon.lat + ',' + fromAddressLatLon.lng + '/' + toAddressLatLon.lat + ',' + toAddressLatLon.lng, '_blank');
		}
	}

}

function getLatLonPosition(addressString, callback) {
	var resultLocation;
	geocoder.geocode({'address': addressString}, function(results, status){
		if (status == google.maps.GeocoderStatus.OK) {
			// console.log('address result: ' + results[0].geometry.location);
			// console.log('address result: ' + results[0].geometry.location.lat());
			resultLocation = {'lat': results[0].geometry.location.lat(), 'lng': results[0].geometry.location.lng()};
			callback(resultLocation);
		}
	});
}

var panorama;
function renPano(loc) {
	var panoramaOptions = {
        position: loc,
        pov: {
            heading: 34,
            pitch: 10,
            zoom: 1
        }, 
    };
	if (panorama == undefined) {
		panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), panoramaOptions);
	} else {
		// console.log('new loc: ' + loc);
		panorama.setPosition(loc);
	}
	
}