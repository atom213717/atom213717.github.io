document.getElementById('sendButton').addEventListener('click', function() {
    const message = document.getElementById('message').value;

    // Sprawdzamy, czy pole wiadomosci nie jest puste
    if (!message) {
        document.getElementById('status').innerHTML = 'Prosze wpisac wiadomosc!';
        document.getElementById('status').classList.add('error');
        return;
    }

    // Wywołanie PHP za pomocą fetch
    fetch('server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())  // Odbieranie odpowiedzi JSON
    .then(data => {
        if (data.success) {
            document.getElementById('status').innerHTML = 'Wiadomosc zostala wyslana!';
            document.getElementById('status').classList.add('success');
            document.getElementById('message').value = ''; // Czyszczenie pola tekstowego
        } else {
            document.getElementById('status').innerHTML = 'Wystapil blad, sprobuj ponownie.';
            document.getElementById('status').classList.add('error');
        }
    })
    .catch(error => {
        document.getElementById('status').innerHTML = 'Wystapil blad, sprobuj ponownie.';
        document.getElementById('status').classList.add('error');
    });
});
