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
  const buttonSearchArea = document.getElementById("buttonSearchArea");
  const range = document.getElementById("rangeSelect");


  // つまみに合わせて色を変える
  range.addEventListener("input", () => {
    const value = range.value;
    const min = range.min || 0;
    const max = range.max || 100;

    const percent = ((value - min) / (max - min)) * 100;

    range.style.background = `linear-gradient(90deg, var(--color--crimsonPop) ${percent}%, var(--color--snowMist) ${percent}%)`;
  });


  // 初期値の設定
  range.dispatchEvent(new Event("input"));

  if (buttonSearchArea && range) {
    buttonSearchArea.addEventListener("click", function () {
      const keyword = document.getElementById("input-searchBox").value.trim();
      // const sliderValue = range.value;

      console.log("キーワード:", keyword);
      console.log("スライダーの値:", range);

      searchArea(latitude, longitude, {
        keyword: keyword,
        range: range
      });

      window.location.href = "./results.html";
    });
  } else {
    console.error("検索ボタンかスライダーが見つかりません");
  }
});


