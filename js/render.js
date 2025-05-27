// render.js
// 検索結果の一覧表示

function renderResults(page = 1) {
    const results = JSON.parse(sessionStorage.getItem("searchResults"));
    const container = document.getElementById("div-results-container");
    container.innerHTML = "";

    const isMobile = window.innerWidth < 768;
    if (!results || results.length === 0) {
        container.innerHTML = "<p>検索結果が見つかりませんでした。</p>";
        return;
    }

    const itemsPerPage = 12;
    const totalPages = Math.ceil(results.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, results.length);
    const paginatedResults = results.slice(startIndex, endIndex);

    const listDiv = document.createElement("div");
    listDiv.id = "shop-list";

    paginatedResults.forEach(shop => {
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

    // ページネーション
    const pagination = document.createElement("div");
    pagination.className = "pagination";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.disabled = (i === page);
        btn.addEventListener("click", () => renderResults(i));
        pagination.appendChild(btn);
    }

    container.appendChild(pagination);
}
