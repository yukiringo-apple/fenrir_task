// geolocation.js 現在地の取得

// 位置情報API ドキュメント
// https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API

// 位置情報API 位置情報APIの使用
// https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API

// // ボタンを押した時の処理
// document.getElementById("getLocation").onclick = function(){
//     // 位置情報を取得する
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// };

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }else{
        alert("むりぽよ")
    }
}

// 現在地の取得 成功
function successCallback(position){
    // latitude：緯度
    // longitude：軽度
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    return latitude,longitude;
};

// 取得に失敗した場合の処理
function errorCallback(error){
    alert("位置情報が取得できませんでした");
};