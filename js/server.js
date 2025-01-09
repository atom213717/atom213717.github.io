// webhook.js

// Twój URL webhooka Discorda (ukryty w zewnętrznym pliku)
const WEBHOOK_URL = "https://discord.com/api/webhooks/1326918637927272520/Cyi7rvo6NGDWN6iclNofD4mJ7BjfyFrGd3xzwz94apzXP8dgChbXKEPUHOWh35NyaHma";
// ... probwaliśmy to za kodować, na razie nie umiemy xD, miejmy chocaz jedną fajną rzecz w internecie, zakodujemy webhooka w wolnym czasie
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
        const responseText = await response.text();
        console.error("Błąd odpowiedzi: ", responseText);
        throw new Error("Nie udało się wysłać wiadomości.");
    }
}
