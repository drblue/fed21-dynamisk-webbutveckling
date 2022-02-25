-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 25, 2022 at 02:23 PM
-- Server version: 10.6.4-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fed21_books`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
CREATE TABLE `authors` (
  `id` int(11) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `birthyear` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `first_name`, `last_name`, `birthyear`) VALUES
(1, 'Sir Arthur C.', 'Clarke', 1917),
(2, 'Isaac', 'Asimov', 1920),
(3, 'William', 'Gibson', 1948),
(4, 'Chi', 'Quita', 2001),
(5, 'Mrs', 'Beasty', 1995),
(6, 'Mr', 'Beast', 1998),
(7, 'Mini', 'Beast', 2020);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `pages` int(10) UNSIGNED DEFAULT NULL,
  `author_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `isbn`, `pages`, `author_id`) VALUES
(1, '2001: A Space Odyssey', '0-453-00269-2', 224, 1),
(2, '2010: Odyssey Two', '0-345-30305-9', 291, 1),
(3, 'Foundation', '0-553-29335-4', 255, 2),
(4, 'Neuromancer', '0-441-56956-0', 271, 3),
(5, 'Bananana: A Odessey', NULL, 3, 4),
(6, 'Get Rich Quick', '9781234567897', 1, 6),
(7, 'Get Rich Slow', '9781234567898', 1337, 7),
(8, 'The indispensible value of Coffee', '1337133742', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `books_users`
--

DROP TABLE IF EXISTS `books_users`;
CREATE TABLE `books_users` (
  `id` int(11) UNSIGNED NOT NULL,
  `book_id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books_users`
--

INSERT INTO `books_users` (`id`, `book_id`, `user_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 5, 2),
(5, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`) VALUES
(1, 'johan', '$2b$10$6pXYIdyfOQeb9lRzp77IJuOBve5SpulHW/f6q1ymBCu1Nr8DKH5Lq', 'Johan', 'Skywalker'),
(2, 'sean_banan', '$2b$10$AN66tH0hFgkzI2LZ4bmWXe4yFEpaCWEt5T88m2r1VlqDgAyCFXrdu', 'Sean', 'Banan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books_users`
--
ALTER TABLE `books_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `books_users`
--
ALTER TABLE `books_users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
