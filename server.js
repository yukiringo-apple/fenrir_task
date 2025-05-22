// server.js
const express = require('express');
const fetch = require('node-fetch'); // v3以降は ESM 対応必須、CommonJSなら v2を推奨
const app = express();
const PORT = 3000;

// CORS回避のためにAPIを中継
app.get('/api/search', async (req, res) => {
    const { lat, lng, range } = req.query;
    const API_KEY = 'fd1c724889f2047b';
    const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&lat=${lat}&lng=${lng}&range=${range}&format=json`;

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

// 静的ファイル配信（index.htmlやjsファイル）
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
