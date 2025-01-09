// webhook.js

// Twój URL webhooka Discorda (ukryty w zewnętrznym pliku)
const WEBHOOK_URL = "https://discord.com/api/webhooks/1326679746829881374/YTVgS3GuoIrhkwgvq4K3yHmB0ZuXDDDgWfgh3TMdxHU3HoE3pkdkG8U8cS9qUH_KhIxqEPf";
// wersja demo to była tera api (szkajcie a nigdy i tak nie znajdziecie :3)
// Funkcja do wysyłania wiadomości
async function sendMessageToDiscord(message) {
    if (!message) {
        throw new Error("Brak wiadomości do wysłania.");
    }

    const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: message }),
    });

    if (!response.ok) {
        throw new Error("Nie udało się wysłać wiadomości.");
    }
}