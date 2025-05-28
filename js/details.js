const shop = JSON.parse(sessionStorage.getItem("selectedShop"));

if (!shop) {
    document.getElementById("shop-detail").innerHTML = "<p>データがありません。</p>";
} else {
    const catchHtml = shop.catch ? `<p class="p-catch">${shop.catch}</p>` : "";

    document.getElementById("shop-detail").innerHTML = `
        <div class="div-flex">
            <div class="transparent">
                <img src="${shop.photo.pc.l}" alt="${shop.name}">
            </div>
            <div class="div-shop-detail">
                <h2>${shop.name}</h2>
                <div class="div-overflow">
                    <p><span>エリア</span> ${shop.large_service_area.name} / ${shop.large_area.name} / ${shop.middle_area.name} / ${shop.small_area.name}</p>
                    <p><span>住所</span> ${shop.address}</p>
                    <p><span>ジャンル</span> ${shop.genre.name}</p>
                    <p><span>予算</span> ${shop.budget.average}</p>
                    ${catchHtml}
                    <p>${shop.open}</p>
                    <button href="tel:0000-00-0000" id="call-button">📞 電話する（見せかけ）</button>
                    <p><a href="${shop.urls.pc}" target="_blank">ホットペッパーで見る</a></p>
                </div>
            </div>
        </div>
    `;

    document.getElementById("call-button").addEventListener("click", () => {
        alert("この機能はデモです。");
    });
}
