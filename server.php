<?php

// TwĂłj URL webhooka Discorda (ukryty w pliku PHP)
define('WEBHOOK_URL', 'https://discord.com/api/webhooks/1326918637927272520/Cyi7rvo6NGDWN6iclNofD4mJ7BjfyFrGd3xzwz94apzXP8dgChbXKEPUHOWh35NyaHma');

// Funkcja do wysyĹ‚ania wiadomoĹ›ci
function sendMessageToDiscord($message) {
    if (empty($message)) {
        return false; // JeĹĽeli wiadomoĹ›Ä‡ jest pusta, zwrĂłÄ‡ faĹ‚sz
    }

    $data = json_encode(['content' => $message]);

    // Inicjalizowanie cURL
    $ch = curl_init(WEBHOOK_URL);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    // Wykonanie zapytania
    $response = curl_exec($ch);
    
    if (curl_errno($ch)) {
        curl_close($ch);
        return false; // JeĹĽeli wystÄ…piĹ‚ bĹ‚Ä…d, zwrĂłÄ‡ faĹ‚sz
    }

    curl_close($ch);
    return true; // JeĹĽeli wysĹ‚ano poprawnie, zwrĂłÄ‡ prawdÄ™
}

// Odbieranie danych z ĹĽÄ…dania POST
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['message'])) {
    $message = $data['message'];
    
    // WysyĹ‚anie wiadomoĹ›ci do Discorda
    $success = sendMessageToDiscord($message);
    
    // Zwracamy odpowiedĹş w formacie JSON
    echo json_encode(['success' => $success]);
} else {
    echo json_encode(['success' => false]);
}

?>
