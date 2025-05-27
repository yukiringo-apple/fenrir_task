// js/search.js
// 

async function searchArea(latitude, longitude, options = {}) {

    try {
        // const range = options.range ?? 5;
        // const count = options.count ?? 100;
        // const keyword = options.keyword;
        // const address = options.keyword;

        // console.log(keyword);

        // const url = `/api/search?lat=${latitude}&lng=${longitude}&range=${range}&count=${count}&name_any=${keyword}&address=${address}`;

        const params = new URLSearchParams();

        params.append("lat", latitude);
        params.append("lng", longitude)
        params.append("range", options.range ?? 5)
        params.append("count", 99)


        if (options.keyword && options.keyword.trim() !== "") {
            params.append("name_any", options.keyword);
            params.append("address", options.keyword);
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


    // return new Promise((resolve, reject) => {

    //     // rangeInput.addEventListener('input', function () {
    //     //     selectedRangeIndex = parseInt(this.value);
    //     // });

    //     // const selectedValue = labels[selectedRangeIndex];

    //     const url = `/api/search?lat=${latitude}&lng=${longitude}&range=${3}&count=${100}`;

    //     fetch(url)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("APIの取得に失敗しました");
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             if (!data.results || !data.results.shop) {
    //                 reject("結果が不正です");
    //                 return;
    //             }

    //             const results = data.results.shop;
    //             sessionStorage.setItem("searchResults", JSON.stringify(results));
    //             resolve(results);
    //         })
    //         .catch(error => {
    //             console.error("エラーが発生しました:", error);
    //             reject(error);
    //         });
    // });
}
