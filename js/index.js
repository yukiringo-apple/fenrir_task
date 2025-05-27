// index.html
// 全体の制御

var latitude = 0;
var longitude = 0;

// onloadイベント
// ページが読み込まれたとき
window.onload = async function () {

    try {
        const location = await getLocation();

        latitude = location.latitude;
        longitude = location.longitude;

        const results = await searchArea(latitude, longitude)

        console.log(results)

        await renderResults();

    } catch (error) {
        alert(error);
    }
}



// エリア検索
const eventSerchArea = document.getElementById("buttonSearchArea");
eventSerchArea.addEventListener("click", function () {
    const keyword = document.getElementById("input-searchBox");

    if (!keyword) {
        keyword = ""
    }

    try {
        const recruits = searchArea(latitude, longitude, { keyword: keyword });
        window.href = "./results.html";
    } catch (error) {

    }
})

