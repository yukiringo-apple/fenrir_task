// js/search.js
function searchArea(latitude, longitude) {
    // const selectElement = document.getElementById('selectArea');
    // const selectedValue = selectElement.value;
    // const selectedText = selectElement.options[selectElement.selectedIndex].text;


    const rangeInput = document.getElementById('rangeSelect');
    const selectedValueText = document.getElementById('selectedValue');
    const labels = ["1", "2", "3", "4", "5"];
    let selectedRangeIndex = 3;

    rangeInput.addEventListener('input', function () {
        selectedRangeIndex = parseInt(this.value);
        // selectedValueText.textContent = labels[selectedRangeIndex];
    });

    const selectedValue = labels[selectedRangeIndex];

    console.log('選ばれた値:', selectedValue);
    // console.log('表示テキスト:', selectedText);

    const url = `/api/search?lat=${latitude}&lng=${longitude}&range=${selectedValue}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("APIの取得に失敗しました");
            }
            return response.json();
        })
        .then(data => {

            console.log("APIレスポンス全体:", data); // ← 追加

            if (!data.results || !data.results.shop) {
                console.error("results.shop が存在しません", data);
                return;
            }
            const results = data.results.shop;
            console.log(results);
        })
        .catch(error => {
            console.error("エラーが発生しました:", error);
        });
}
