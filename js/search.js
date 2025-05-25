// js/search.js
const rangeInput = document.getElementById('rangeSelect');
const labels = ["1", "2", "3", "4", "5"];
let selectedRangeIndex = 3;

function searchArea(latitude, longitude) {

    rangeInput.addEventListener('input', function () {
        // event : rangeSliderを動かしたとき値を保存する
        selectedRangeIndex = parseInt(this.value);
    });

    const selectedValue = labels[selectedRangeIndex];

    console.log('選ばれた値:', selectedValue);

    const url = `/api/search?lat=${latitude}&lng=${longitude}&range=${selectedValue}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("APIの取得に失敗しました");
            }
            return response.json();
        })
        .then(data => {

            console.log("APIレスポンス全体:", data);

            if (!data.results || !data.results.shop) {
                console.error("results.shop が存在しません", data);
                return;
            }

            const results = data.results.shop;
            console.log(results);

            sessionStorage.setItem("searchResults", JSON.stringify(data.results.shop));
            window.location.href = "results.html";

        })
        .catch(error => {
            console.error("エラーが発生しました:", error);
        });
}
