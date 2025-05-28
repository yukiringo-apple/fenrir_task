// api/search.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { lat, lng, range, count, name_any, address } = req.query;
    const API_KEY = process.env.API_KEY;

    const params = new URLSearchParams();
    params.append("key", API_KEY);
    params.append("lat", lat);
    params.append("lng", lng);
    params.append("range", range);
    params.append("count", count);
    params.append("format", "json");

    if (name_any && name_any.trim() !== "") {
        params.append("name_any", name_any);
    }
    if (address && address.trim() !== "") {
        params.append("address", address);
    }

    const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${params.toString()}`;

    try {
        const response = await fetch(url);
        const text = await response.text();
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(text);
    } catch (error) {
        console.error("API取得エラー:", error);
        res.status(500).json({ error: 'APIの取得に失敗しました', detail: error.message });
    }
}
