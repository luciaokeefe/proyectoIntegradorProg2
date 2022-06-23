-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectointegradorprog2
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `surname` varchar(500) NOT NULL,
  `username` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `phone` varchar(500) NOT NULL,
  `birthdate` date NOT NULL,
  `gender` varchar(500) NOT NULL,
  `DNI` varchar(500) NOT NULL,
  `profilePhoto` varchar(500) DEFAULT NULL,
  `Password` varchar(500) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lady','Gaga','LadyG','ladygaga@gmail.com','+52 822 671 1831','1986-03-28','Femenino','55823765','/images/comments/ladyGProfilePicture.png','$2a$10$g8xQSMwQ7pms6NmxpgUXeuQVUIq7KRgTzzSEXcD/WdwrHpeVENVk2',NULL,NULL),(5,'maria','perez','mariaperez','mariap@gmail.com','1165235444','2022-06-06','femenino','44655118',NULL,'$2a$10$t8Sgg0cA5ZGlhy9LDLgFXeBbjo544UqDsbDkU0jv4Mp6Z6k480x1W',NULL,NULL),(6,'delfina','hola','delfinahola','delfina@gmail.com','234567890','2022-06-18','femenino','234567890',NULL,'$2a$10$7g23ITscnaR1uM9aKYMM/umYFNMJVC8122Oc.P1fu/cC.4O87PZQu','2022-06-20 14:50:34',NULL),(7,'esteban','quito','estebanquito','esteban@gmail.com','1234567890\'','2022-06-02','femenino','23456789',NULL,'$2a$10$h.dKJJru/DGRmPmki81uZ.Mhm77OdhDxmkDGwbhr52TTdLKoIIgVS','2022-06-20 14:54:52',NULL),(8,'susana','oria','susanaoria','susana@gmail.com','234567890','2022-06-10','femenino','1234567890\'',NULL,'$2a$10$iJf0SpAgAQCrnmfj5HRJgeaeYMCjl42ZgZmNZsk64Br1dmr/j6uxG','2022-06-20 14:58:31',NULL),(9,'mickey','mouse','mickey','disney@gmail.com','123456789','2022-06-07','femenino','123456789',NULL,'$2a$10$IJc3mYmqRbuNHToiHDktVeHPIgEpxOCdkTPgq9/yDkSZSqHDRf.zC','2022-06-20 15:06:12',NULL),(10,'pluto','pluto','pluto','pluto@gmail.com','1234567','2022-06-10','femenino','1234576890',NULL,'$2a$10$QDDStgyvph5PuB9gSc8j1uITSYTU.O7AhTjagYUJm0Dxe4OB.LNtO','2022-06-20 15:09:44',NULL),(11,'pato','donald','donald','donald@gmail.com','1234567890','2022-06-16','femenino','123456789','19 IMAGEN.png','$2a$10$F7P3cv0batK/8Utw0qXCru8lfPhJYMRvzBlNL0vEiWBs2ZHWkjLhW','2022-06-20 15:14:03',NULL),(12,'Cala','Walker','calawalker','calawalker@gmail.com','1165235444','2003-01-14','femenino','44655118','\\images\\uploads\\615679a15cba624c2e77d59beda0d96d','$2a$10$7zXaO5i5XVRoAcImtNMgCOMmN5GDG34zzhS6iNJbG4Rgrh1NoeCRS','2022-06-23 22:11:34',NULL),(14,'marina','beraud','marinaberaud22','marinaberaud22@gmail.com','6678657888','2022-06-05','femenino','66788993','\\images\\uploads\\7c4228afe631473e46ea940a1c7ae670','$2a$10$bLNEa/lGSBYEr3sOfzjDKuW3y8.3Z/iDswLf8pT5DptKizyzBsYEK','2022-06-23 22:19:21',NULL),(15,'lucia','okeefe','luciaokeefe','luli@gmail.com','1167896777','2022-06-06','femenino','55677882','\\images\\uploads\\416255e8294598e5f6b0b0542d265ca7','$2a$10$kN.kSJG0K7d0aWunDu6MiOOrHTha9CCzByHu1wQqZp7aZs6Zxg4dm','2022-06-23 22:20:50',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-23 19:42:07
