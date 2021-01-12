-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2021 at 12:18 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `binco`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `CustomerID` int(8) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`CustomerID`, `Email`, `Password`) VALUES
(1, 'sona@gmail.com', 'sona123');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `ColorID` varchar(8) NOT NULL,
  `ColorName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`ColorID`, `ColorName`) VALUES
('#FFFFFF', 'Pure White');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `OrderID` int(8) NOT NULL,
  `ProductID` int(8) NOT NULL,
  `ColorID` varchar(8) NOT NULL,
  `Size` varchar(3) NOT NULL,
  `Qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`OrderID`, `ProductID`, `ColorID`, `Size`, `Qty`) VALUES
(1, 1, '#FFFFFF', 'S', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderheader`
--

CREATE TABLE `orderheader` (
  `OrderID` int(8) NOT NULL,
  `OrderDate` date NOT NULL,
  `ShippingID` int(8) NOT NULL,
  `ShippingCosts` int(11) NOT NULL,
  `SalesTax` int(11) NOT NULL,
  `Total` int(11) NOT NULL,
  `StatusID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderheader`
--

INSERT INTO `orderheader` (`OrderID`, `OrderDate`, `ShippingID`, `ShippingCosts`, `SalesTax`, `Total`, `StatusID`) VALUES
(1, '2021-01-12', 1, 40000, 2500, 265000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderstatusdetail`
--

CREATE TABLE `orderstatusdetail` (
  `OrderID` int(8) NOT NULL,
  `StatusID` varchar(30) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderstatusdetail`
--

INSERT INTO `orderstatusdetail` (`OrderID`, `StatusID`, `Date`) VALUES
(1, '1', '2021-01-12');

-- --------------------------------------------------------

--
-- Table structure for table `productdetail`
--

CREATE TABLE `productdetail` (
  `ProductID` int(8) NOT NULL,
  `ColorID` varchar(8) NOT NULL,
  `Size` varchar(3) NOT NULL,
  `Qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productdetail`
--

INSERT INTO `productdetail` (`ProductID`, `ColorID`, `Size`, `Qty`) VALUES
(1, '#FFFFFF', 'S', 2);

-- --------------------------------------------------------

--
-- Table structure for table `productheader`
--

CREATE TABLE `productheader` (
  `ProductID` int(8) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int(11) NOT NULL,
  `Category` varchar(50) NOT NULL,
  `Description` varchar(250) NOT NULL,
  `PictureLink1` varchar(100) NOT NULL,
  `PictureLink2` varchar(100) DEFAULT NULL,
  `PictureLink3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productheader`
--

INSERT INTO `productheader` (`ProductID`, `Name`, `Price`, `Category`, `Description`, `PictureLink1`, `PictureLink2`, `PictureLink3`) VALUES
(1, 'Eco T-Shirt', 250000, 'T-Shirt', 'Premium T-Shirt with \'Eco\' Design\r\n\r\nMaterial: Cotton\r\nFabric weight: 4.42 oz (lightweight)', 'http://....', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `CustomerID` int(8) NOT NULL,
  `OrderID` int(8) NOT NULL,
  `Review` varchar(800) NOT NULL,
  `Stars` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`CustomerID`, `OrderID`, `Review`, `Stars`) VALUES
(1, 1, 'Good quality', 5);

-- --------------------------------------------------------

--
-- Table structure for table `shippingdetail`
--

CREATE TABLE `shippingdetail` (
  `ShippingID` int(8) NOT NULL,
  `CustomerID` int(8) NOT NULL,
  `FirstName` varchar(25) NOT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Address` varchar(50) NOT NULL,
  `Building` varchar(50) DEFAULT NULL,
  `Country` varchar(50) NOT NULL,
  `ZipCode` varchar(20) NOT NULL,
  `City` varchar(50) NOT NULL,
  `ShippingMethod` varchar(20) NOT NULL,
  `Phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shippingdetail`
--

INSERT INTO `shippingdetail` (`ShippingID`, `CustomerID`, `FirstName`, `LastName`, `Address`, `Building`, `Country`, `ZipCode`, `City`, `ShippingMethod`, `Phone`) VALUES
(1, 1, 'Kim', 'Sona', 'Jl. Lily No. 1', NULL, 'Indonesia', '20220', 'Medan', 'JNE', '081234567890');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`CustomerID`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`ColorID`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `FK_ProductDetail` (`ProductID`,`ColorID`,`Size`);

--
-- Indexes for table `orderheader`
--
ALTER TABLE `orderheader`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `FK_ShippingID` (`ShippingID`);

--
-- Indexes for table `orderstatusdetail`
--
ALTER TABLE `orderstatusdetail`
  ADD PRIMARY KEY (`OrderID`,`StatusID`);

--
-- Indexes for table `productdetail`
--
ALTER TABLE `productdetail`
  ADD PRIMARY KEY (`ProductID`,`ColorID`,`Size`),
  ADD KEY `FK_ColorID` (`ColorID`);

--
-- Indexes for table `productheader`
--
ALTER TABLE `productheader`
  ADD PRIMARY KEY (`ProductID`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`CustomerID`,`OrderID`),
  ADD KEY `FK2_OrderID` (`OrderID`);

--
-- Indexes for table `shippingdetail`
--
ALTER TABLE `shippingdetail`
  ADD PRIMARY KEY (`ShippingID`),
  ADD KEY `FK_CustomerID` (`CustomerID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `CustomerID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orderheader`
--
ALTER TABLE `orderheader`
  MODIFY `OrderID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `productheader`
--
ALTER TABLE `productheader`
  MODIFY `ProductID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shippingdetail`
--
ALTER TABLE `shippingdetail`
  MODIFY `ShippingID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `FK3_OrderID` FOREIGN KEY (`OrderID`) REFERENCES `orderheader` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ProductDetail` FOREIGN KEY (`ProductID`,`ColorID`,`Size`) REFERENCES `productdetail` (`ProductID`, `ColorID`, `Size`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderheader`
--
ALTER TABLE `orderheader`
  ADD CONSTRAINT `FK_ShippingID` FOREIGN KEY (`ShippingID`) REFERENCES `shippingdetail` (`ShippingID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderstatusdetail`
--
ALTER TABLE `orderstatusdetail`
  ADD CONSTRAINT `FK_OrderID` FOREIGN KEY (`OrderID`) REFERENCES `orderheader` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productdetail`
--
ALTER TABLE `productdetail`
  ADD CONSTRAINT `FK2_ProductID` FOREIGN KEY (`ProductID`) REFERENCES `productheader` (`ProductID`),
  ADD CONSTRAINT `FK_ColorID` FOREIGN KEY (`ColorID`) REFERENCES `color` (`ColorID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `FK2_OrderID` FOREIGN KEY (`OrderID`) REFERENCES `orderheader` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK3_CustomerID` FOREIGN KEY (`CustomerID`) REFERENCES `account` (`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `shippingdetail`
--
ALTER TABLE `shippingdetail`
  ADD CONSTRAINT `FK_CustomerID` FOREIGN KEY (`CustomerID`) REFERENCES `account` (`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
