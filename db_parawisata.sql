-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Nov 2023 pada 17.37
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_parawisata`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `wisata`
--

CREATE TABLE `wisata` (
  `Nama Gunung` varchar(250) NOT NULL,
  `Lokasi` varchar(250) NOT NULL,
  `Dekripsi` varchar(250) NOT NULL,
  `Fasilitas di Sekitar` varchar(250) NOT NULL,
  `Harga Tiket Masuk` int(11) NOT NULL,
  `Aktivitas yang bisa di lakukan` varchar(250) NOT NULL,
  `gambar` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `wisata`
--

INSERT INTO `wisata` (`Nama Gunung`, `Lokasi`, `Dekripsi`, `Fasilitas di Sekitar`, `Harga Tiket Masuk`, `Aktivitas yang bisa di lakukan`, `gambar`) VALUES
('Bromo', 'Jawa', 'Gunung bromo bla bla', 'tanah savana hijau', 300000, 'tidurrrrr', 'bromo.jpg'),
('rinjani', 'lombok', 'gunung yang indah dri segala sisi', 'ada danau yang sangat indah', 100000, 'mencing, camping', 'rinjani.jpg'),
('Gunung di Jawa', 'Jawa', 'tedada', 'cadada', 300000, 'fsgdnbdhr', 'ykhrve');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
