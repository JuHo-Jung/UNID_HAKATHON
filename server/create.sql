CREATE DATABASE `unidthon`;
USE `unidthon`;

CREATE TABLE `university` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `mailpath1` varchar(500) DEFAULT NULL,
  `mailpath2` varchar(500) DEFAULT NULL,
  `imagepath` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `division` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `restaurant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `university_id` int DEFAULT NULL,
  `division_id` int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `score` double DEFAULT NULL,
  `openhours` varchar(500) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `imagepath` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `restaurant_university_idx` (`university_id`),
  KEY `restaurant_division_idx` (`division_id`),
  CONSTRAINT `restaurant_division` FOREIGN KEY (`division_id`) REFERENCES `division` (`id`),
  CONSTRAINT `restaurant_university` FOREIGN KEY (`university_id`) REFERENCES `university` (`id`)
);

CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `restaurant_id` int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_restaurant_idx` (`restaurant_id`),
  CONSTRAINT `menu_restaurant` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
);

CREATE TABLE `mail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `university_id` int DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `authcode` varchar(50) DEFAULT NULL,
  `starttime` datetime DEFAULT NULL,
  `endtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mail_university_idx` (`university_id`),
  CONSTRAINT `mail_university` FOREIGN KEY (`university_id`) REFERENCES `university` (`id`)
);

CREATE TABLE `member` (
  `id` int NOT NULL AUTO_INCREMENT,
  `university_id` int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `point` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `member_university_idx` (`university_id`),
  CONSTRAINT `member_university` FOREIGN KEY (`university_id`) REFERENCES `university` (`id`)
);

CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `member_id` int DEFAULT NULL,
  `restaurant_id` int DEFAULT NULL,
  `score` int DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `imagepath` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comment_member_idx` (`member_id`),
  KEY `comment_restaurant_idx` (`restaurant_id`),
  CONSTRAINT `comment_member` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`),
  CONSTRAINT `comment_restaurant` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
);