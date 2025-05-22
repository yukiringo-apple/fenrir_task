// js/search.js
function searchArea(latitude, longitude) {
    const selectElement = document.getElementById('selectArea');
    const selectedValue = selectElement.value;
    const selectedText = selectElement.options[selectElement.selectedIndex].text;

    console.log('選ばれた値:', selectedValue);
    console.log('表示テキスト:', selectedText);

    const url = `/api/search?lat=${latitude}&lng=${longitude}&range=${selectedValue}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("APIの取得に失敗しました");
            }
            return response.json();
        })
        .then(data => {
            const results = data.results.shop;
            console.log(results);
        })
        .catch(error => {
            console.error("エラーが発生しました:", error);
        });
}
