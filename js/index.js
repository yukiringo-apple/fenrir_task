// index.js
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
// const eventSerchArea = document.getElementById("buttonSearchArea");
// eventSerchArea.addEventListener("click", function () {
//     const keyword = document.getElementById("input-searchBox").value.trim();

//     console.log(keyword);

//     searchArea(latitude, longitude, { keyword: keyword });
//     window.location.href = "./results.html";

// })

document.addEventListener("DOMContentLoaded", function () {
  const buttonSearchKeyword = document.getElementById("buttonSearchKeyword");
  const buttonSearchRange = document.getElementById("buttonSearchRange");
  const range = document.getElementById("rangeSelect");

  // スライダー色変更
  range.addEventListener("input", () => {
    console.log(range.value)
    const value = range.value;
    const min = range.min || 0;
    const max = range.max || 100;
    const percent = ((value - min) / (max - min)) * 100;
    range.style.background = `linear-gradient(90deg, var(--color--crimsonPop) ${percent}%, var(--color--snowMist) ${percent}%)`;
  });

  // 初期描画
  range.dispatchEvent(new Event("input"));

  // キーワード検索
  if (buttonSearchKeyword) {
    buttonSearchKeyword.addEventListener("click", async function () {
      const keyword = document.getElementById("input-searchBox").value.trim();
      console.log("キーワード:", keyword);

      await searchArea(latitude, longitude, { keyword: keyword });
      window.location.href = "./results.html";
    });
  }

  // 範囲検索
  if (buttonSearchRange) {
    buttonSearchRange.addEventListener("click", async function () {
      const keyword = document.getElementById("input-searchBox").value.trim();
      const rangeValue = range.value;
      console.log("スライダーの値:", rangeValue);

      await searchArea(latitude, longitude, { range: rangeValue, keyword: keyword });
      window.location.href = "./results.html";
    });
  }
});
