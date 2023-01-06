-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2023 at 02:07 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `space_x`
--

-- --------------------------------------------------------

--
-- Table structure for table `spacex_data`
--

CREATE TABLE `spacex_data` (
  `id` int(191) NOT NULL,
  `capsule_serial` varchar(251) NOT NULL,
  `capsule_id` varchar(251) NOT NULL,
  `status` varchar(251) NOT NULL,
  `original_launch` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `original_launch_unix` int(100) NOT NULL,
  `mission` varchar(100) NOT NULL,
  `landings` int(20) NOT NULL,
  `type` varchar(100) NOT NULL,
  `reuse_count` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `spacex_data`
--

INSERT INTO `spacex_data` (`id`, `capsule_serial`, `capsule_id`, `status`, `original_launch`, `original_launch_unix`, `mission`, `landings`, `type`, `reuse_count`) VALUES
(1, 'C101', 'dragon1', 'retired\r\n', '2023-01-03 08:56:22.000000', 1291822980, 'CRS-1', 2, 'Dragon 1.1', 1),
(2, 'C102', 'dragon1', 'retired', '2023-01-13 10:50:23.000000', 1335944640, 'CRS 2', 1, 'Dragon 1.0', 1),
(3, 'C103', 'dragon1', 'unknown', '2023-01-23 11:17:53.000000', 1349656500, 'CRS-3', 1, 'Dragon 1.0', 1),
(4, 'C104', 'dragon1', 'unknown', '2023-01-24 11:20:16.000000', 1362165000, 'CRS-4\r\n', 1, 'Dragon 1.0', 1),
(5, 'C105', 'dragon1', 'retired', '2023-01-29 11:20:16.000000', 1397849100, 'CRS-5', 1, 'Dragon 1.1', 1),
(6, 'C106', 'dragon1', 'retired', '2023-01-16 11:20:16.000000', 1411278720, 'CRS6', 1, 'Dragon 1.1', 1),
(7, 'C107', 'dragon1', 'unknown', '2023-01-31 11:20:16.000000', 1420883220, 'CRS7', 1, 'Dragon 1.1', 1),
(8, 'C108', 'dragon1', 'unknown', '2023-01-31 11:20:16.000000', 1429042200, 'CRS8', 1, 'Dragon 1.1', 1),
(9, 'C109', 'dragon1', 'retired', '2023-01-31 11:20:16.000000', 1362165000, 'CRS9', 1, 'Dragon 1.0', 2),
(10, 'C110', 'dragon1', 'unknown', '2023-01-31 11:20:16.000000', 1362165450, 'CRS10', 1, 'Dragon 1.1', 1),
(11, 'C111', 'dragon1', 'retired', '2023-01-31 11:20:16.000000', 1362165400, 'CRS11', 1, 'Dragon 1.0', 0),
(12, 'C112', 'dragon1.0', 'retired', '2023-01-31 11:20:16.000000', 1362167400, 'CRS12', 1, 'Dragon 1.0', 1),
(13, 'C113', 'dragon1.0', 'unknown', '2023-01-31 11:20:16.000000', 1362167400, 'CRS13', 1, 'Dragon 1.0', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `spacex_data`
--
ALTER TABLE `spacex_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `spacex_data`
--
ALTER TABLE `spacex_data`
  MODIFY `id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
