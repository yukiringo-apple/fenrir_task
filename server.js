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
    const { lat, lng, range, count, keyword, address } = req.query;

    const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&lat=${lat}&lng=${lng}&range=${range}&format=json&count=${count}&name_any=${keyword}&address=${address}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('HotPepper API取得に失敗');
        }
        const data = await response.json();
        res.json(data);
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
