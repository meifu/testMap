var LocationsPool = new Array();
var cities = new Object();
var areas = new Array();
var selectionHtml = '';

var locObj = function(lat, lng, title, address, phone, time, city, area) {
	this.lat = lat || '',
	this.lng = lng || '',
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

jQuery.ajax({
	url: 'locations.txt'
}).done(function(data){
	console.log('done');
	var json = jQuery.parseJSON(data);
	// console.log('ddddd ' + json.locs);
	LocationsPool = json.locs;
	cities = json.cities;
	areas = json.areas;
	reproduce();
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
				// console.log(newObj);
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
			// console.log('abcccccc ' + JSON.stringify(this.dataset['fixService']));
			for (var i = 0; i < cityCode.length; i++) {
				newCities.push(cities[cityCode[i]]);
			}
			return newCities;
		}
	}

	var nissanData = new myData();

	// console.log('test ' + cities);
	console.log('test  ' + nissanData.getCityArray('fixService'));
	for (var i = 1; i <= services.length; i++) {
		selectionHtml = '';
		selectionHtml = '<div class="subSelect" id="subCity' + i + '">';
		nissanData.getCityArray('fixService').forEach(function(item, index){
			selectionHtml += '<a href="javascript:;" key="' + index + '">' + item + '</a>';
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
	
	bindCityClick();
}


	

$('body').click(function(e){
	// console.log('click where ' + $(e.target).html());
	if (!$(e.target).hasClass('city')) {
		$('.subSelect').hide();
	}
	if (!$(e.target).hasClass('area')) {
		$('.subsubSelect').hide();
	}
});

function bindCityClick() {
	$('.subSelect').find('a').on('click', function(e) { 
		$('#controls1').css('display', 'block');
		$(e.target).parents('.jSelect').eq(0).find('.city').eq(0).html($(e.target).html());
		var selections = $(e.target).parents('.subSelect').attr('id');
		var lastCharacter = selections.substr(selections.length - 1);
		// console.log('last character: ' + lastCharacter);
		// console.log('related sub areas: ' + areas[$(e.target).attr('key')]);
		var subSelectionsHTML = '<div class="subsubSelect" id="subArea' + lastCharacter + '">';
		var areaSelectHTML = '';
		var newAreas = getNewAreas(lastCharacter, $(e.target).attr('key'));

		newAreas.forEach(function(obj, index) {
			areaSelectHTML += '<a href="javascript:;" key="' + obj.zip + '">' + obj.area + '</a>';
		});
		// areas[$(e.target).attr('key')].forEach(function(obj, index) {
		// 	areaSelectHTML += '<a href="javascript:;" key="' + obj.zip + '">' + obj.area + '</a>';
		// });
		subSelectionsHTML += areaSelectHTML + '</div>';
		// console.log(subSelectionsHTML);
		$('#area' + lastCharacter).next('.subsubSelect').remove();
		$('#area' + lastCharacter).after(subSelectionsHTML);

		// console.log('########check1 ' + LocationsPool[0].title);
		// console.log('current city index: ' + $(e.target).attr('key'));
		// getCurrentLocation('city', $(e.target).attr('key'));
		// console.log('new locations: ' + getNewLocations('city', $(e.target).attr('key'), getServiceName(lastCharacter)) );
		renderNewMap('city', $(e.target).attr('key'), getServiceName(lastCharacter));
		//換了city以後area的第一個也要換
		$('#area' + lastCharacter).html('選擇區域');
		bindAreaClick(lastCharacter);
	});	
}



