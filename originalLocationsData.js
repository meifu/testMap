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

var LocationsPool = [
	//********* 台北市 *********
	// 中正區100
	// {

	// },
	// 中山區104
	
	{
		lat: 25.0727106,
		lng: 121.54076910000003,
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
	},
	// 松山區105
	{
		lat: 25.068115,
		lng: 121.567893,
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
		lng: 121.55989669999997,
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
	},
	// 大安區106
	{
		lat: 25.0306864,
		lng: 121.54382340000006,
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
		lng: 121.55560479999997,
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
	},
	// 萬華區108
	{
		lat: 25.0312498,
		lng: 121.4973503,
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
	},
	// 信義區110
	// {},
	// 士林區111
	{
		lat: 25.1045947,
		lng: 121.5183246,
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
	},
	// 北投區112
	{
		lat: 25.126846,
		lng: 121.49774389999993,
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
	},
	// 內湖區114
	{
		lat: 25.0686119,
		lng: 121.5827693,
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
	},
	// 南港區115
	{
		lat: 25.0483594,
		lng: 121.58500170000002,
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
	},
	//********* 基隆市 *********
	{
		lat: 25.1007883,
		lng: 121.71960409999997,
		vendor: '',
		title: '七堵服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '基隆市七堵區八德路2之16號',
		phone: '02-24551333',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 1,
		post: 204
		// ,zoom: 13
	},
	
	//********* 新北市 *********
	//林口區244
	{
		lat: 25.0716924,
		lng: 121.3746658,
		vendor: '',
		title: '林口服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市林口區文化一路一段98號',
		phone: '02-26003800',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 244
	},
	//三峽區237
	{
		lat: 24.9308581,
		lng: 121.38294159999998,
		vendor: '',
		title: '三峽服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市三峽區介壽路一段365號',
		phone: '02-26731000',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: false,
		city: 2,
		post: 237
	},
	//中和區235
	{
		lat: 25.005227,
		lng: 121.48216879999995,
		vendor: '',
		title: '中和服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市中和區中山路二段594號',
		phone: '02-82212372',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 235
	},
	//新莊區242
	{
		lat: 25.0310605,
		lng: 121.42913380000005,
		vendor: '',
		title: '輔大服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市新莊區中正路562號',
		phone: '02-29031177',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 242
	},
	{
		lat: 25.0429101,
		lng: 121.46031600000003,
		vendor: '',
		title: '新莊服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市新莊區思源路40-1號',
		phone: '02-89935288',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 242
	},
	//土城區236
	{
		lat: 24.998428,
		lng: 121.42312300000003,
		vendor: '',
		title: '土城服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市土城區大安路85號',
		phone: '02-22681158',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 236
	},
	//淡水區251
	{
		lat: 25.1408169,
		lng: 121.45996890000004,
		vendor: '',
		title: '淡水服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市淡水區民權路39號',
		phone: '02-28090092',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 251
	},
	//新店區231
	{
		lat: 24.977451, 
		lng: 121.545344,
		vendor: '',
		title: '新店服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市新店區中興路三段9號',
		phone: '02-89199922',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 231
	},
	//汐止區221
	{
		lat: 25.028847, 
		lng: 121.4716204,
		vendor: '',
		title: '汐止服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市汐止區大同路一段154',
		phone: '02-86432888',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 221
	},
	//板橋區220
	{
		lat: 25.028847, 
		lng: 121.4716204,
		vendor: '',
		title: '板橋服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市板橋區文化路2段266號',
		phone: '02-82523006',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 220
	},
	//三重區241
	{
		lat: 25.0877249, 
		lng: 121.484009,
		vendor: '',
		title: '集賢服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新北市三重區集賢路１９５號',
		phone: '02-28576633',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 2,
		post: 241
	},
	//********* 宜蘭縣 *********
	//宜蘭市260
	{
		lat: 24.7666226, 
		lng: 121.76145969999993,
		vendor: '',
		title: '宜蘭服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '宜蘭縣宜蘭市宜興路三段28號',
		phone: '03-9289989',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 3,
		post: 260
	},
	//羅東鎮265
	{
		lat: 24.6864379, 
		lng: 121.76875389999998,
		vendor: '',
		title: '羅東服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '宜蘭縣羅東鎮純精路三段416號',
		phone: '03-9530123',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 3,
		post: 265
	},
	//********* 新竹市 *********
	//東區300
	{
		lat: 24.7812926, 
		lng: 121.00633990000006,
		vendor: '',
		title: '園區服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新竹市東區科學工業園區新安路200號',
		phone: '03-5612434',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: false,
		city: 4,
		post: 300
	},
	//東區300
	{
		lat: 24.816305, 
		lng: 120.99329260000002,
		vendor: '',
		title: '新竹服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新竹市東區經國路一段二號',
		phone: '03-5331188',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 4,
		post: 300
	},
	//香山區300
	{
		lat: 24.7912737, 
		lng: 120.93795380000006,
		vendor: '',
		title: '香山服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新竹市香山區中華路4段468號',
		phone: '03-5301682',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 4,
		post: 300
	},
	//********* 新竹縣 *********
	//竹北市302
	{
		lat: 24.8495621, 
		lng: 121.00495479999995,
		vendor: '',
		title: '竹北服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新竹縣竹北市中華路752號',
		phone: '03-5514216',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 5,
		post: 302
	},
	//竹東鎮310
	{
		lat: 24.754685, 
		lng: 121.07135489999996,
		vendor: '',
		title: '竹東服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '新竹縣竹東鎮中興路一段169號',
		phone: '03-5831818',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 5,
		post: 310
	},
	//中壢市320
	{
		lat: 24.9669726, 
		lng: 121.23636550000003,
		vendor: '',
		title: '北中壢服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣中壢市中園路170號',
		phone: '03-4527111',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 320
	},
	{
		lat: 24.9430792, 
		lng: 121.2277441,
		vendor: '',
		title: '中壢服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣中壢市環中東路二段731號',
		phone: '03-4598981',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 320
	},
	//八德市334
	{
		lat: 24.9384168, 
		lng: 121.29748810000001,
		vendor: '',
		title: '八德服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣八德市介壽路二段',
		phone: '03-3681111',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 334
	},
	//蘆竹鄉338
	{
		lat: 25.0587902, 
		lng: 121.2757398,
		vendor: '',
		title: '南崁服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣蘆竹鄉南崁路二段180號',
		phone: '03-3521122',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 338
	},
	{
		lat: 25.0587902, 
		lng: 121.2757398,
		vendor: '',
		title: '南崁服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣蘆竹鄉南崁路二段180號',
		phone: '03-3521122',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 338
	},
	//楊梅市326
	{
		lat: 24.9075437, 
		lng: 121.15152809999995,
		vendor: '',
		title: '楊梅服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣楊梅市中山北路一段75號',
		phone: '03-4780666',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 326
	},
	//龍潭鄉325
	{
		lat: 24.8662702,
		lng: 121.21005839999998,
		vendor: '',
		title: '龍潭服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣龍潭鄉中豐路中山段206號',
		phone: '03-4891789',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 325
	},
	//桃園市330
	{
		lat: 24.9799334,
		lng: 121.27339740000002,
		vendor: '',
		title: '桃園服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣桃園市中山路1310號',
		phone: '03-3601119',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 330
	},
	{
		lat: 24.9782328,
		lng: 121.32231449999995,
		vendor: '',
		title: '桃鶯服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣桃園市桃鶯路441號',
		phone: '03-3752266',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 330
	},
	//平鎮市324
	{
		lat: 24.9317568,
		lng: 121.19719520000001,
		vendor: '',
		title: '平鎮服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '桃園縣平鎮市延平路三段588號',
		phone: '03-4644888',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 6,
		post: 324
	},
	/*********** 苗栗縣 ************/
	//頭份鎮351
	{
		lat: 24.9317568,
		lng: 121.19719520000001,
		vendor: '',
		title: '頭份服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '苗栗縣頭份鎮自強路98號',
		phone: '037-689977',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 7,
		post: 351
	},
	//苗栗市360
	{
		lat: 24.5744043,
		lng: 120.8172194,
		vendor: '',
		title: '苗栗服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '苗栗縣苗栗市國華路658號',
		phone: '037-337037',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 7,
		post: 360
	},
	//苑裡鎮358
	{
		lat: 24.4310444,
		lng: 120.64576139999997,
		vendor: '',
		title: '苑裡服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '苗栗縣苑裡鎮房裡里南房69之6號',
		phone: '037-852355',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 7,
		post: 358
	},
	//********* 台中市 *********
	//北區404
	{
		lat: 24.1525321,
		lng: 120.68246670000008,
		vendor: '',
		title: '中台中服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市北區中華路二段126號',
		phone: '04-22067199',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 8,
		post: 404
	},
	//北屯區406
	{
		lat: 24.1820584,
		lng:  120.68314729999997,
		vendor: '',
		title: '松竹服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市北屯區松竹路三段8號',
		phone: '04-22470636',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 8,
		post: 406
	},
	//西屯區407
	{
		lat: 24.162115,
		lng: 120.63261080000007,
		vendor: '',
		title: '市政服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市西屯區市政路638號',
		phone: '04-22591719',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 8,
		post: 407
	},
	{
		lat: 24.1849412,
		lng: 120.61690420000002,
		vendor: '',
		title: '西屯服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市西屯區福康路89號',
		phone: '04-24637888',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: false,
		city: 8,
		post: 407
	},
	{
		lat: 24.1666887,
		lng: 120.60125270000003,
		vendor: '',
		title: '工業區服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市西屯區工業區36路27號',
		phone: '04-23599966',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: false,
		city: 8,
		post: 407
	},
	{
		lat: 24.1723588,
		lng: 120.66439860000003,
		vendor: '',
		title: '北台中服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市西屯區工業區36路27號',
		phone: '04-23129111',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 8,
		post: 407
	},
	//東區401
	{
		lat: 24.1313254,
		lng: 120.70359389999999,
		vendor: '',
		title: '東台中服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市東區振興路379之1號',
		phone: '04-22115758',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 8,
		post: 401
	},
	//烏日區414
	{
		lat: 24.1082721,
		lng: 120.63902380000002,
		vendor: '',
		title: '南台中服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市烏日區中山路一段37號',
		phone: '04-23362355',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 8,
		post: 414
	},
	//沙鹿區433
	{
		lat: 24.2308848,
		lng: 120.57392430000004,
		vendor: '',
		title: '沙鹿服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市沙鹿區台灣大道七段955號',
		phone: '04-26629822',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 8,
		post: 433
	},
	//大里區412
	{
		lat: 24.0983361,
		lng: 120.68288899999993,
		vendor: '',
		title: '大里服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台中市大里區國光路一段151號',
		phone: '04-26629822',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 8,
		post: 412
	},
	//********* 彰化縣 *********
	//大村鄉515
	{
		lat: 23.9901213,
		lng: 120.56310580000002,
		vendor: '',
		title: '員林服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '彰化縣大村鄉中山路二段329號',
		phone: '04-8532377',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 9,
		post: 515
		// ,zoom: 13
	},
	//彰化市500
	{
		lat: 24.0863223,
		lng: 120.53243910000003,
		vendor: '',
		title: '彰化服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '彰化縣彰化市金馬路三段221號',
		phone: '04-7294000',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 9,
		post: 500
		// ,zoom: 13
	},
	//溪湖鎮514
	{
		lat: 23.9545356,
		lng: 120.49056180000002,
		vendor: '',
		title: '溪湖服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '彰化縣溪湖鎮員鹿路二段141號',
		phone: '04-8829090',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 9,
		post: 514
		// ,zoom: 13
	},
	//溪湖鎮506
	{
		lat: 24.0469705,
		lng: 120.44869979999999,
		vendor: '',
		title: '鹿港服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '彰化縣福興鄉彰鹿路七段339號',
		phone: '04-7765610',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 9,
		post: 506
		// ,zoom: 13
	},
	//********* 南投縣 *********
	//埔里鎮545
	{
		lat: 23.9696907,
		lng: 120.95347820000006,
		vendor: '',
		title: '埔里服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '南投縣埔里鎮中山路三段475號',
		phone: '049-2911901',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: false,
		city: 10,
		post: 545
		// ,zoom: 13
	},
	//埔里鎮557
	{
		lat: 23.7603863,
		lng: 120.68429300000003,
		vendor: '',
		title: '竹山服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '南投縣竹山鎮大明路306號',
		phone: '049-2649982',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: false,
		city: 10,
		post: 557
		// ,zoom: 13
	},
	//南投市540
	{
		lat: 23.7603863,
		lng: 120.68429300000003,
		vendor: '',
		title: '南投服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '南投縣南投市南崗三路276號',
		phone: '049-2252016',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 10,
		post: 540
		// ,zoom: 13
	},
	//********* 嘉義市 *********
	//西區600
	{
		lat: 23.4668086,
		lng: 120.42630209999993,
		vendor: '',
		title: '博賢服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '嘉義市西區世賢路二段505號',
		phone: '05-2834566',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 11,
		post: 600
		// ,zoom: 13
	},
	//東區600
	{
		lat: 23.4668086,
		lng: 120.42630209999993,
		vendor: '',
		title: '忠孝服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '嘉義市東區忠孝路728號',
		phone: '05-2773755',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 11,
		post: 600
		// ,zoom: 13
	},
	//********* 嘉義縣 *********
	//朴子市613
	{
		lat: 23.4643004,
		lng: 120.26536920000001,
		vendor: '',
		title: '朴子服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '嘉義縣朴子市大糠榔1313號',
		phone: '05-3702307',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: false,
		city: 11,
		post: 613
		// ,zoom: 13
	},
	//********* 雲林縣 *********
	//北港鎮651
	{
		lat: 23.5876704,
		lng: 120.30454780000002,
		vendor: '',
		title: '北港服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '雲林縣北港鎮新德路93號',
		phone: '05-7832806',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: false,
		city: 12,
		post: 651
		// ,zoom: 13
	},
	//北港鎮630
	{
		lat: 23.6945887,
		lng: 120.46545630000003,
		vendor: '',
		title: '斗南服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '雲林縣斗南鎮大業路212號',
		phone: '05-5978117',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 12,
		post: 630
		// ,zoom: 13
	},
	//斗六市640
	{
		lat: 23.7017467,
		lng: 120.55249070000002,
		vendor: '',
		title: '斗六服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '雲林縣斗六市大學路二段33號',
		phone: '05-5354366',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 12,
		post: 640
		// ,zoom: 13
	},
	//********* 台南市 *********
	//善化區741
	{
		lat: 23.1328677,
		lng: 120.28225769999995,
		vendor: '',
		title: '善化服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台南市善化區興農路50號',
		phone: '06-5812100',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: false,
		showService: true,
		city: 13,
		post: 741
		// ,zoom: 13
	},
	//永康區710
	{
		lat: 23.0227453,
		lng: 120.21923070000003,
		vendor: '',
		title: '永康服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台南市永康區中華路995號',
		phone: '06-2521560',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 13,
		post: 710
		// ,zoom: 13
	},
	{
		lat: 23.021567,
		lng: 120.26162629999999,
		vendor: '',
		title: '永大服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台南市永康區永大路二段1296號',
		phone: '06-2020051',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 13,
		post: 710
		// ,zoom: 13
	},
	//新營區730
	{
		lat: 23.3085322,
		lng: 120.30522580000002,
		vendor: '',
		title: '新營服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台南市新營區民治路198號',
		phone: '06-6561447',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 13,
		post: 730
		// ,zoom: 13
	},
	//仁德區730
	{
		lat: 22.9706654,
		lng: 120.26009249999993,
		vendor: '',
		title: '仁德服務廠',
		html: '',
		// icon: 'map_icon.png',
		address: '台南市仁德區中山路246號',
		phone: '06-2707345',
		time: '10:00~21:00',
		services: '汽車維修、定期保養',
		note: '',
		fixService: true,
		beautyService: true,
		showService: true,
		city: 13,
		post: 730
		// ,zoom: 13
	}
];

testObj = function() {
	this.fixService = {},
	this.beautyService = {},
	this.showService = {},
	addCityToService = function() {
		
	},
	addAreaToCity = function() {

	}
	
};

LocationsPool.forEach(function(obj,index){
	if (obj.fixService == true) {
		// testObj['fixService'] = 
	}
});
