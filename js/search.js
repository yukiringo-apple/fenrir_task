// js/search.js
// 

async function searchArea(latitude, longitude, options = {}) {

    try {
        const params = new URLSearchParams();

        params.append("lat", latitude);
        params.append("lng", longitude)
        params.append("range", options.range ?? 5)
        params.append("count", 99)

        if (options.keyword && options.keyword.trim() !== "") {
            // キーワード検索：rangeはつけない
            params.append("name_any", options.keyword);
            params.append("address", options.keyword);
        } else {
            // 通常検索：rangeをつける
            params.append("range", options.range ?? 5);
        }

        const url = `/api/search?${params.toString()}`;

        console.log(params, url)


        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("APIの取得に失敗しました");
        }

        const data = await response.json();
        console.log("API response data:", data);


        if (!data.results || !data.results.shop) {
            throw new Error("結果が不正です");
        }

        const results = data.results.shop;
        sessionStorage.setItem("searchResults", JSON.stringify(results));

        return results;

    } catch (error) {
        console.error("エラーが発生しました:", error);
        throw error; // 呼び出し元にエラーを伝える
    }
}
