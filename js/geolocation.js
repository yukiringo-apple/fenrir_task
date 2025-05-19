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

function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject("位置情報が取得できませんでした");
                }
            );
        } else {
            reject("Geolocationに対応していません");
        }
    });
}
