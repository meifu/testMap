//********* store variables **************
// var cities = ['台北市','基隆市','新北市','宜蘭縣','新竹市','新竹縣','桃園縣','苗栗縣','台中市','彰化縣','南投縣','嘉義市','嘉義縣','雲林縣','台南市','高雄市','屏東縣','台東縣','花蓮縣'];
var cities = {'0': '台北市', '1': '基隆市', '2': '新北市', '3': '宜蘭縣', '4': '新竹市', '5': '新竹縣', '6': '桃園縣', '7': '苗栗縣', '8': '台中市', '9': '彰化縣', '10': '南投縣', '11': '嘉義市', '12': '嘉義縣', '13': '雲林縣', '14': '台南市', '15': '高雄市', '16': '屏東縣', '17': '台東縣', '18': '花蓮縣'};

var areas = [
    new Array(
         // {  zip: '100',area: '中正區' }
         {  zip: '104',area: '中山區' }
        ,{  zip: '105',area: '松山區' }
        ,{  zip: '106',area: '大安區' }
        ,{  zip: '108',area: '萬華區' }
        // ,{  zip: '110',area: '信義區' }
        ,{  zip: '111',area: '士林區' }
        ,{  zip: '112',area: '北投區' }
        ,{  zip: '114',area: '內湖區' }
        ,{  zip: '115',area: '南港區' }
        // ,{  zip: '116',area: '文山區' }
    ),
    new Array(
         {  zip: '204',area: '七堵區' }
    ),
    new Array(
         {  zip: '220',area: '板橋區' }
        ,{  zip: '221',area: '汐止區' }
        // ,{  zip: '222',area: '深坑區' }
        ,{  zip: '231',area: '新店區' }
        // ,{  zip: '234',area: '永和區' }
        ,{  zip: '235',area: '中和區' }
        ,{  zip: '236',area: '土城區' }
        ,{  zip: '237',area: '三峽區' }
        // ,{  zip: '238',area: '樹林區' }
        // ,{  zip: '239',area: '鶯歌區' }
        ,{  zip: '241',area: '三重區' }
        ,{  zip: '242',area: '新莊區' }
        ,{  zip: '244',area: '林口區' }
        // ,{  zip: '247',area: '蘆洲區' }
        ,{  zip: '251',area: '淡水區' }

    ),
    new Array(
         {  zip: '260',area: '宜蘭市' }
        // ,{  zip: '268',area: '五結鄉' }
        ,{  zip: '265',area: '羅東鎮' }
    ),
    new Array(
         {  zip: '300',area: '新竹市' }
    ),
    new Array(
         {  zip: '302',area: '竹北市' }
        ,{  zip: '310',area: '竹東鎮' }
    ),
    new Array(
         {  zip: '320',area: '中壢市' }
        ,{  zip: '324',area: '平鎮市' }
        ,{  zip: '325',area: '龍潭鄉' }
        ,{  zip: '326',area: '楊梅鎮' }
        ,{  zip: '330',area: '桃園市' }
        ,{  zip: '333',area: '龜山鄉' }
        ,{  zip: '334',area: '八德市' }
        ,{  zip: '338',area: '蘆竹鄉' }
    ),
    new Array(
         {  zip: '351',area: '頭份鎮' }
        ,{  zip: '358',area: '苑裡鎮' }
        ,{  zip: '360',area: '苗栗市' }
    ),
    new Array(
         {  zip: '401',area: '東區' }
        ,{  zip: '402',area: '南區' }
        ,{  zip: '403',area: '西區' }
        ,{  zip: '404',area: '北區' }
        ,{  zip: '406',area: '北屯區' }
        ,{  zip: '407',area: '西屯區' }
        ,{  zip: '411',area: '太平區' }
        ,{  zip: '412',area: '大里區' }
        ,{  zip: '420',area: '豐原區' }
        ,{  zip: '427',area: '潭子區' }
        ,{  zip: '428',area: '大雅區' }
        ,{  zip: '433',area: '沙鹿區' }
        ,{  zip: '435',area: '梧棲區' }
        ,{  zip: '437',area: '大甲區' }
    ),
    new Array(
         {  zip: '500',area: '彰化市' }
        ,{  zip: '503',area: '花壇鄉' }
        ,{  zip: '506',area: '福興鄉' }
        ,{  zip: '514',area: '溪湖鎮' }
        ,{  zip: '515',area: '大村鄉' }
        ,{  zip: '522',area: '田尾鄉' }
        ,{  zip: '526',area: '二林鎮' }
    ),
    new Array(
         {  zip: '540',area: '南投市' }
        ,{  zip: '542',area: '草屯鎮' }
        ,{  zip: '545',area: '埔里鎮' }
        ,{  zip: '557',area: '竹山鎮' }
    ),
    new Array(
         {  zip: '600',area: '嘉義市' }
    ),
    new Array(
         {  zip: '613',area: '朴子市' }
        ,{  zip: '621',area: '民雄鄉' }
    ),
    new Array(
         {  zip: '630',area: '斗南鎮' }
        ,{  zip: '632',area: '虎尾鎮' }
        ,{  zip: '637',area: '崙背鄉' }
        ,{  zip: '640',area: '斗六市' }
        ,{  zip: '651',area: '北港鎮' }
    ),
    new Array(
         {  zip: '701',area: '東區' }
        ,{  zip: '708',area: '安平區' }
        ,{  zip: '709',area: '安南區' }
        ,{  zip: '710',area: '永康區' }
        ,{  zip: '711',area: '歸仁區' }
        ,{  zip: '720',area: '官田區' }
        ,{  zip: '722',area: '佳里區' }
        ,{  zip: '730',area: '新營區' }
        ,{  zip: '741',area: '善化區' }
    ),
    new Array(
         {  zip: '800',area: '新興區' }
        ,{  zip: '802',area: '苓雅區' }
        ,{  zip: '806',area: '前鎮區' }
        ,{  zip: '807',area: '三民區' }
        ,{  zip: '811',area: '楠梓區' }
        ,{  zip: '812',area: '小港區' }
        ,{  zip: '820',area: '岡山區' }
        ,{  zip: '829',area: '湖內區' }
        ,{  zip: '830',area: '鳳山區' }
        ,{  zip: '831',area: '大寮區' }
        ,{  zip: '842',area: '旗山區' }
    ),
    new Array(
         {  zip: '900',area: '屏東市' }
        ,{  zip: '904',area: '九如鄉' }
        ,{  zip: '909',area: '麟洛鄉' }
        ,{  zip: '920',area: '潮州鎮' }
        ,{  zip: '928',area: '東港鎮' }
        ,{  zip: '946',area: '恆春鎮' }
    ),
    new Array(
        {  zip: '950',area: '台東市' }
    ),
    new Array(
         {  zip: '973',area: '吉安鄉' }
        ,{  zip: '981',area: '玉里鎮' }
    )
];
     
var selectResult = '';

window.Locations = {
	"fixService": {
		//台北
		"0": {
			// 中山區104
			"104": [{
				lat: 25.0727106,
				lon: 121.54076910000003,
				vendor: '',
				title: '濱江服務廠',
				html: '',
				// icon: 'map_icon.png',
				address: '台北市中山區濱江街213號',
				phone: '02-25175000',
				time: '10:00~21:00',
				services: '汽車維修、定期保養',
				note: '',
				fixService: true,
				beautyService: true,
				showService: true,
				city: 0,
				post: 104
			}],
			// 松山區105
			"105": [{
				lat: 25.068115,
				lon: 121.567893,
				vendor: '',
				title: '撫遠服務廠',
				html: '',
				// icon: 'map_icon.png',
				address: '台北市松山區撫遠街423號',
				phone: '02-27607267',
				time: '10:00~21:00',
				services: '汽車維修、定期保養',
				note: '',
				fixService: true,
				beautyService: true,
				showService: false,
				city: 0,
				post: 105
			},
			{
				lat: 25.0482524,
				lon: 121.55989669999997,
				vendor: '',
				title: '八德服務廠',
				html: '',
				// icon: 'map_icon.png',
				address: '台北市松山區八德路四段68號',
				phone: '02-27621088',
				time: '10:00~21:00',
				services: '汽車維修、定期保養',
				note: '',
				fixService: true,
				beautyService: true,
				showService: true,
				city: 0,
				post: 105
			}],
			// 大安區106
			"106": [{
				lat: 25.0306864,
				lon: 121.54382340000006,
				vendor: '',
				title: '瑞安服務廠',
				html: '',
				// icon: 'map_icon.png',
				address: '台北市大安區復興南路二段65號',
				phone: '02-27075355',
				time: '10:00~21:00',
				services: '汽車維修、定期保養',
				note: '',
				fixService: true,
				beautyService: true,
				showService: false,
				city: 0,
				post: 106
			},
			{
				lat: 25.0212357,
				lon: 121.55560479999997,
				vendor: '',
				title: '大安服務廠',
				html: '',
				// icon: 'map_icon.png',
				address: '台北市大安區和平東路三段268號',
				phone: '02-23776365',
				time: '10:00~21:00',
				services: '汽車維修、定期保養',
				note: '',
				fixService: true,
				beautyService: true,
				showService: false,
				city: 0,
				post: 106
			}],
			// 萬華區108
			"108": [{
				lat: 25.0312498,
				lon: 121.4973503,
				vendor: '',
				title: '萬華服務廠',
				html: '',
				// icon: 'map_icon.png',
				address: '台北市萬華區莒光路328號',
				phone: '02-23062607',
				time: '10:00~21:00',
				services: '汽車維修、定期保養',
				note: '',
				fixService: true,
				beautyService: true,
				showService: true,
				city: 0,
				post: 108
			}],
			// 士林區111
			"111": [{
				lat: 25.1045947,
				lon: 121.5183246,
				vendor: '',
				title: '文林服務廠',
				html: '',
				// icon: 'map_icon.png',
				address: '台北市士林區文林北路43號',
				phone: '02-28234998',
				time: '10:00~21:00',
				services: '汽車維修、定期保養',
				note: '',
				fixService: true,
				beautyService: true,
				showService: true,
				city: 0,
				post: 111
			}],
			// 北投區112
			"112": [{
					lat: 25.126846,
					lon: 121.49774389999993,
					vendor: '',
					title: '北投服務廠',
					html: '',
					// icon: 'map_icon.png',
					address: '台北市北投區大業路265號',
					phone: '02-28952060',
					time: '10:00~21:00',
					services: '汽車維修、定期保養',
					note: '',
					fixService: true,
					beautyService: true,
					showService: true,
					city: 0,
					post: 112
			}],
			// 內湖區114
			"114": [{
					lat: 25.0686119,
					lon: 121.5827693,
					vendor: '',
					title: '民權服務廠',
					html: '',
					// icon: 'map_icon.png',
					address: '台北市內湖區民權東路六段23號1樓',
					phone: '02-27915617',
					time: '10:00~21:00',
					services: '汽車維修、定期保養',
					note: '',
					fixService: true,
					beautyService: true,
					showService: true,
					city: 0,
					post: 114
			}],
			// 南港區115
			"115": [{
					lat: 25.0483594,
					lon: 121.58500170000002,
					vendor: '',
					title: '忠孝服務廠',
					html: '',
					// icon: 'map_icon.png',
					address: '台北市南港區忠孝東路六段101號',
					phone: '02-26531855',
					time: '10:00~21:00',
					services: '汽車維修、定期保養',
					note: '',
					fixService: true,
					beautyService: false,
					showService: false,
					city: 0,
					post: 115
			}]

		},
		"1": {

		},
		"2": {

		},
		"3": {

		}
	},
	"beautyService": {

	},
	"showService": {

	}
}

var addressInputBoxHtml = '<div class="addressBoxWrap" style="position:relative; top: 0px; left: 55px; width: 250px; z-index: 99;">'
+ '<div class="inputAddressBox" style="width: 250px; height: 80px; background-color: #fff; position: absolute; padding: 10px;">'
+ '<p>請輸入您的所在地址：</p>'
+ '<input typd="text" id="inputAddress">'
+ '<button id="addrConfirm">確定</button>'
+ '</div>'
+ '<a href="#" class="closeBtn" style="position:absolute; top: 0px; right: 0px; text-decoration: none">x</a></div>';

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

var newMap = new Maplace();
// ************* end store variables **************
// generateHTML();

$('#controls1').css('display','none');
newMap.AddControl('myList', html_menus);
newMap.Load({
	locations: Locations['fixService']['0']['104']
	,generate_controls: true
	,map_div: '#gmap-menu'
	,controls_type: 'myList'
	,controls_on_map: false
	,controls_div: '#controls1'
});

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
	

$('body').click(function(e){
	// console.log('click where ' + $(e.target).html());
	if (!$(e.target).hasClass('city')) {
		$('.subSelect').hide();
	}
	if (!$(e.target).hasClass('area')) {
		$('.subsubSelect').hide();
	}
});

function renderSelection() {
	var selectionHtml;
	var newcities = new Array();
	for (var i = 1; i < 4; i++) {
		newcities = [];
		console.log('filter new cities: ' + getNewCities(i));
		newcities = getNewCities(i);
		selectionHtml = '<div class="subSelect" id="subCity' + i + '">';
		newcities.forEach(function(item, index) {
			selectionHtml += '<a href="javascript:;" key="' + index + '">' + item + '</a>';
		});
		selectionHtml += '</div>';
		$('#city' + i).after(selectionHtml);
	}
	bindCityClick();
}

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

function bindAreaClick(lastCharacter) {
	$('.subsubSelect').find('a').bind('click', function(e){
		$(e.target).parents('.jSelect').eq(0).find('.area').eq(0).html($(e.target).html());
		// console.log('user select area: ' + $(e.target).html() + 'and its zip: ' + $(e.target).attr('key'));
		renderNewMap('post', $(e.target).attr('key'), getServiceName(lastCharacter));
	});
}


renderSelection(1);
var newLocations = [];
function renderNewMap(range, number, service) {
	newLocations = [];
	// console.log('########check2 ' + LocationsPool[0].title);
	// console.log('newLocations: ' + newLocations);
	for (var i = 0; i < Locations.length; i++) {
		// if (LocationsPool[i][range] == number) {
		// 	newLocations.push(LocationsPool[i]);
		// }
		if (Locations[i][range] == number) {
			if (Locations[i][service] == true) {
				newLocations.push(Locations[i]);
			}
		}
	}
	// console.log('########check3 ' + LocationsPool[0].title);
	
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

function planRouteClick(thisBtn) {
	$('.addressBoxWrap').remove();
	thisBtn.after(addressInputBoxHtml);
	$('#addrConfirm').bind('click', getAddressClick);
	$('.closeBtn').bind('click', function(){
		$('.addressBoxWrap').remove();
	});
}


// 測試google map轉中文地址to經緯度
var geocoder;
geocoder = new google.maps.Geocoder();
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
// geocoder.geocode({'address': '台北市羅斯福路二段9號'}, function(results, status){
// 	if (status == google.maps.GeocoderStatus.OK) {
// 		console.log('address result: ' + results[0].geometry.location);
// 	}
// });

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

function getNewLocations(range, number, service) {
	newLocations = [];
	for (var i = 0; i < Locations.length; i++) {
		// if (LocationsPool[i][range] == number) {
		// 	newLocations.push(LocationsPool[i]);
		// }
		if (Locations[i][range] == number) {
			if (Locations[i][service] == true) {
				newLocations.push(Locations[i]);
			}
		}
	}
	return newLocations;
}

function getNewCities(category) {
	// var serviceName = getServiceName(category);
	// var cityNameCache = '';
	var newCitiesResult = new Array();
	// LocationsPool.forEach(function(obj, index){
	// 	if (obj[serviceName] == true) {
			
	// 		if (obj.city !== cityNameCache) {
	// 			newCitiesResult.push(cities[obj.city]);
	// 		}
	// 		cityNameCache = obj.city;

	// 	}
	// });

	var serviceName = '';
	switch (category) {
		case 1: 
			serviceName = 'fixService';
			break;
		case 2: 
			serviceName = 'beautyService';
			break;
		case 3:
			serviceName = 'showService';
			break;
		default: 
			serviceName = '';
			break;
	};
	
	console.log('city ' + Object.keys(Locations[serviceName]));
	console.log('city ' + cities[Object.keys(Locations[serviceName])]);
	newCitiesResult += cities[Object.keys(Locations[serviceName])];
	// console.log('new Locations ' + newCitiesResult);

	return newCitiesResult;
}

function getNewAreas(tabIndex, cityKey) {
	
	var newAreasResult = new Array();
	var areaCache = '';
	Locations.forEach(function(obj, index){
		if ( (obj[getServiceName(tabIndex)] == true) && (obj.city == cityKey) ) {

			if (obj.post !== areaCache) {
				// console.log('new post: ' + getAreaName(cityKey, obj.post));
				newAreasResult.push( {'zip': obj.post, 'area': getAreaName(cityKey, obj.post)} );
			}
			areaCache = obj.post;			
		}
	});
	return newAreasResult;
}

function getAreaName(cityKey, post) {
	var areaName = '';
	areas[cityKey].forEach(function(obj, index) {
		if (obj.zip === post.toString()) {
			// console.log('here!!!!!!!!' + obj.area);
			areaName = obj.area;
		}
	});

	return areaName;
}

function generateHTML() {
	var htmlContent = '';
	// LocationsPool.forEach(function(obj, index) {
	// 	htmlContent = '<h3>' + obj.title + '</h3><p>' + obj.address + '</p><p>' + obj.phone + '</p>';
	// 	obj.html = htmlContent;
	// });
	console.log('test ' + Object.keys(Locations)[0]);
}