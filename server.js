const express = require('express');
const app = express();
const port = 3000;

// Twój ukryty webhook Discorda
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1326679746829881374/YTVgS3GuoIrhkwgvq4K3yHmB0ZuOgWfgh3TMdxHU3HoE3pkdkG8U8cS9qUH_KhIxqEPf";

// Middleware do obsługi JSON
app.use(express.json());

// Endpoint do wysyłania wiadomości
app.post('/send-to-discord', async (req, res) => {
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: "Brak zawartości do wysłania." });
    }

    try {
        // Wyślij wiadomość do webhooka Discorda
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content }),
        });

        if (response.ok) {
            res.status(200).json({ message: "Wiadomość została wysłana." });
        } else {
            res.status(500).json({ error: "Nie udało się wysłać wiadomości." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Wystąpił błąd." });
    }
});

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});