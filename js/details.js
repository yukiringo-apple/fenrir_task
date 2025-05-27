// details.js
const shop = JSON.parse(sessionStorage.getItem("selectedShop"));

if (!shop) {
    document.getElementById("shop-detail").innerHTML = "<p>データがありません。</p>";
} else {
    document.getElementById("shop-detail").innerHTML = `
        <h2>${shop.name}</h2>
        <img src="${shop.photo.pc.l}" alt="${shop.name}" />
        <p>${shop.address}</p>
        <p>${shop.genre.name}</p>
        <p>${shop.catch}</p>
        <p><a href="${shop.urls.pc}" target="_blank">ホットペッパーで見る</a></p>
      `;
}