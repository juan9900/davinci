<?php
// $host = "localhost";
// $username = "davinci_admin";
// $password = 'davinciAdmin00';
// $database = "davinci_club";
// $db = mysqli_connect($host, $username, $password, $database);

// if (!$db) {
//     echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
//     echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
//     echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
//     exit;
// }

$host = "localhost";
$username = "root";
$password = '';
$database = "club";
$db = mysqli_connect($host, $username, $password, $database);

if (!$db) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
