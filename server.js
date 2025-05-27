// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// .envファイルの読み込み
require('dotenv').config();
const API_KEY = process.env.API_KEY;

console.log(API_KEY)



// 中継
app.get('/api/search', async (req, res) => {
    const { lat, lng, range, count, name_any, address } = req.query;

    const params = new URLSearchParams();

    params.append("key", API_KEY);
    params.append("lat", lat);
    params.append("lng", lng);
    params.append("range", range);
    params.append("count", count);
    params.append("format","json")


    if (name_any && name_any.trim() !== "") {
        params.append("name_any", name_any);
        params.append("address", address);
    }

    const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${params.toString()}`

    // const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&lat=${lat}&lng=${lng}&range=${range}&format=json&count=${count}&name_any=${name_any}&address=${address}`;




    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('HotPepper API取得に失敗');
        }
        const data = await response.json();
        res.json(data);
        console.log(url);
    } catch (error) {
        console.error("APIリクエスト中にエラー:", error);
        res.status(500).json({ error: 'APIの取得に失敗しました', detail: error.message });
    }
});

// おまじない
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
