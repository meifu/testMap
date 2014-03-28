

    $(document).ready(function () {
        //alert("123");
        GetCityName();
        initialize();
    });
    function GetCityName() {
        var SerCityName = GetUrlParam("CityName");
        if (SerCityName.length > 1) {
            SerchXY(SerCityName);
        }
    }
    function GetUrlParam(paramName) {
        var oRegex = new RegExp('[\?&]' + paramName + '=([^&]+)', 'i');
        var oMatch = oRegex.exec(window.top.location.search);

        if (oMatch && oMatch.length > 1)
            return oMatch[1];
        else
            return '';
    }
    // 檢查 E-mail
    function isEMail() {
        var objOpt = document.getElementById('sendemail_maildata_email');
        var strelm = objOpt.value;
        var strreg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

        intelm = strelm.search(strreg);
        if (intelm == -1) {
            alert("請填寫正確Email");
            objOpt.focus();
            return false;
        }
        else {
            return true;
        }
    }
    function SerchXY(ADDRESS) {
 
        if (GBrowserIsCompatible()) {
            var geocoder = new GClientGeocoder();
            var address = '台灣' + ADDRESS
            geocoder.getLatLng(address, function (point) {
                if (!point) {
                    alert('Google Maps 找不到該地址，無法顯示地圖！'); //如果Google Maps無法顯示該地址的警示文字
                } else {
                    var strSerchXY = point
                    //strSerchXY = strSerchXY.toString().replace('(', '');
                    //strSerchXY = strSerchXY.toString().replace(')', '');
                    location.href = '/TC/buycar/locations.aspx?active=2&Serch=' + strSerchXY;
                }
            });
        }
    }
    