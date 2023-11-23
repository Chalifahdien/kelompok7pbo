<?php
include 'db_connection.php';
include 'Wisata.php';

$wisataList = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $searchTerm = $_POST["search"];

    // Fetch data from the "wisata" table based on the search term in Nama Gunung or Lokasi
    $sql = "SELECT * FROM wisata WHERE `Nama Gunung` LIKE '%$searchTerm%' OR `Lokasi` LIKE '%$searchTerm%'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $wisataList[] = new Wisata($row['Nama Gunung'], $row['Lokasi'], $row['Dekripsi'], $row['Fasilitas di Sekitar'], $row['Harga Tiket Masuk'], $row['Aktivitas yang bisa di lakukan'], $row['gambar']);
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Pencarian</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hasil Pencarian</h1>

    <!-- Form for search -->
    <form action="search.php" method="post">
        <label for="search">Cari Nama Gunung:</label>
        <input type="text" name="search" id="search" placeholder="Masukkan nama gunung">
        <input type="submit" value="Cari">
    </form>

    <div class="wisata-list">
        <?php
        foreach ($wisataList as $wisata) {
            echo '<div class="wisata-item">';
            echo '<h2>' . $wisata->nama . '</h2>';
            echo '<p><strong>Lokasi:</strong> ' . $wisata->lokasi . '</p>';
            echo '<p><strong>Deskripsi:</strong> ' . $wisata->deskripsi . '</p>';
            echo '<p><strong>Fasilitas di Sekitar:</strong> ' . $wisata->fasilitas . '</p>';
            echo '<p><strong>Harga Tiket Masuk:</strong> ' . $wisata->harga . '</p>';
            echo '<p><strong>Aktivitas:</strong> ' . $wisata->aktivitas . '</p>';
            echo '<img src="' . $wisata->gambar . '" alt="' . $wisata->nama . '">';
            echo '</div>';
        }
        ?>
    </div>
</body>
</html>
