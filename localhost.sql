-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 15, 2022 at 02:21 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sps`
--
CREATE DATABASE IF NOT EXISTS `sps` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `sps`;

-- --------------------------------------------------------

--
-- Table structure for table `parking_P1`
--

CREATE TABLE `parking_P1` (
  `id` int(11) NOT NULL,
  `slot_id` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `number_plate` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pay_status` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parking_P1`
--

INSERT INTO `parking_P1` (`id`, `slot_id`, `status`, `number_plate`, `username`, `pay_status`, `timestamp`) VALUES
(1, 'S01', 1, 'GX23422', 'guest01', 1, '2022-08-09 04:32:31'),
(2, 'S02', 1, 'JJH7738', 'guest02', 0, '2022-08-09 04:32:31'),
(3, 'S03', 0, '0', 'johndoe1', 1, '2022-08-09 04:32:31'),
(4, 'S04', 0, '0', 'janedoe2', 0, '2022-08-09 04:32:31'),
(5, 'S05', 0, '0', 'tom', 0, '2022-08-09 04:32:31'),
(6, 'S06', 0, '0', 'jerry', 0, '2022-08-09 04:32:31'),
(7, 'S07', 0, '0', '0', 0, '2022-08-09 04:32:31'),
(8, 'S08', 0, '0', '0', 0, '2022-08-09 04:32:31'),
(9, 'S09', 0, '0', '0', 0, '2022-08-09 04:32:31'),
(10, 'S10', 0, '0', '0', 0, '2022-08-09 04:32:32'),
(11, 'S11', 0, '0', '0', 0, '2022-08-09 04:32:32'),
(12, 'S12', 1, 'GUEST', '0', 0, '2022-08-14 10:47:48'),
(13, 'S13', 0, '0', '0', 0, '2022-08-09 04:32:32'),
(14, 'S14', 0, '0', '0', 0, '2022-08-09 04:32:32'),
(15, 'S15', 0, '0', '0', 0, '2022-08-09 04:32:32'),
(16, 'S16', 0, '0', '0', 0, '2022-08-09 04:32:32'),
(17, 'S17', 0, '0', '0', 0, '2022-08-09 04:32:32'),
(18, 'S18', 0, '0', '0', 0, '2022-08-09 04:32:32'),
(19, 'S19', 0, '0', '0', 0, '2022-08-09 04:32:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parking_P1`
--
ALTER TABLE `parking_P1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `parking_P1`
--
ALTER TABLE `parking_P1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
