<?php

// Twój URL webhooka Discorda (ukryty w pliku PHP)
define('WEBHOOK_URL', 'https://discord.com/api/webhooks/1326918637927272520/Cyi7rvo6NGDWN6iclNofD4mJ7BjfyFrGd3xzwz94apzXP8dgChbXKEPUHOWh35NyaHma');

// Funkcja do wysyłania wiadomości
function sendMessageToDiscord($message) {
    if (empty($message)) {
        return false; // Jeżeli wiadomość jest pusta, zwróć fałsz
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
        return false; // Jeżeli wystąpił błąd, zwróć fałsz
    }

    curl_close($ch);
    return true; // Jeżeli wysłano poprawnie, zwróć prawdę
}

// Odbieranie danych z żądania POST
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['message'])) {
    $message = $data['message'];
    
    // Wysyłanie wiadomości do Discorda
    $success = sendMessageToDiscord($message);
    
    // Zwracamy odpowiedź w formacie JSON
    echo json_encode(['success' => $success]);
} else {
    echo json_encode(['success' => false]);
}

?>
