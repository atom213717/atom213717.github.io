<?php
session_start();

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['enable'])) {
        touch('maintenance.flag');
    } elseif (isset($_POST['disable'])) {
        unlink('maintenance.flag');
    }
}
$maintenance_mode = file_exists('maintenance.flag');
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel Administracyjny</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f3f3f3;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
        }
        .container {
            max-width: 300px;
            padding: 20px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 1.5em;
            margin-bottom: 0.5em;
        }
        form {
            margin-top: 20px;
        }
        input[type="submit"] {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Panel Administracyjny</h1>
        <p>Tryb konserwacji jest <?= $maintenance_mode ? 'włączony' : 'wyłączony' ?>.</p>
        <form method="post">
            <?php if ($maintenance_mode): ?>
                <input type="submit" name="disable" value="Wyłącz tryb konserwacji">
            <?php else: ?>
                <input type="submit" name="enable" value="Włącz tryb konserwacji">
            <?php endif; ?>
        </form>
    </div>
</body>
</html>
