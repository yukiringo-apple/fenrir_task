var latitude = 0;
var longitude = 0;

// onloadイベント
window.onload = function () {
    // 現在地の取得
    getLocation()
        .then((location) => {
            latitude = location.latitude;
            longitude = location.longitude;
        })
        .catch((error) => {
            alert(error);
        });

}

