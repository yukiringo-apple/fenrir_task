// result.js
// 検索結果の一覧表示

async function renderResults(results) {

    const results = JSON.parse(sessionStorage.getItem("searchResults"));

    console.log(results);

    const container = document.getElementById("div-results-container");
    const isMobile = window.innerWidth < 768;

    if (!results || results.length === 0) {
        container.innerHTML = "<p>検索結果が見つかりませんでした。</p>";
        return;
    }

    if (isMobile) {
        results.forEach(shop => {

        });
    } else {
        const listDiv = document.createElement("div");
        listDiv.id = "shop-list";

        results.forEach(shop => {
            const item = document.createElement("div");
            item.className = "shop-item";
            item.innerHTML = `
                <img class="img-shop-list-main-pc" src="${shop.photo.pc.l}">
                <h4>${shop.name}</h4>
                <p>${shop.address}</p>
            `;


            item.addEventListener("click", () => {
                sessionStorage.setItem("selectedShop", JSON.stringify(shop));
                location.href = "details.html";
            });

            listDiv.appendChild(item);
        });

        container.appendChild(listDiv);
    }
}


// レンダー
renderResults(results);
