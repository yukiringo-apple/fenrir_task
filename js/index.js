var latitude = 0;
var longitude = 0;

// onloadイベント
window.onload = function(){
    // 現在地の取得
    latitude,longitude = getLocation();
    console.log(latitude,longitude);
}