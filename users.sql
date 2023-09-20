-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 20, 2023 at 06:14 PM
-- Server version: 5.7.34
-- PHP Version: 8.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_phone` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_phone`) VALUES
(6, 'Ghs Julian', 'ghsjulian@gmail.com', '01302***227'),
(11, 'Sunita Sharma', 'smita@gmail.com', '097363917'),
(12, 'Supriya Singh', 'supriya@gmail.com', '5889297739'),
(13, 'Asmita Yadav', 'asmita@gmail.com', '1749927'),
(14, 'Maria Smith ', 'maria@gmail.com', '5889297739'),
(10, 'Smita Smith', 'smita@gmail.com', '01302**227'),
(15, 'Priya Sinha', 'priya@gmail.com', '5889297739'),
(16, 'Ishika Yadav', 'smita@gmail.com', '5889297739'),
(17, 'Wilium Smith ', 'smita@gmail.com', '5889297739'),
(18, 'Sita Yadav', 'smita@gmail.com', '5889297739'),
(19, 'Sweta Sharma', 'smita@gmail.com', '5889297739'),
(20, 'Sima Rani', 'smita@gmail.com', '5889297739'),
(21, 'Rani Mukherjee ', 'smita@gmail.com', '5889297739'),
(22, 'Alice Cooper ', 'smita@gmail.com', '5889297739'),
(23, 'Sandra N', 'smita@gmail.com', '5889297739'),
(24, 'Emma Hester ', 'smita@gmail.com', '5889297739');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
