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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `marca` varchar(500) NOT NULL,
  `modelo` varchar(500) NOT NULL,
  `colorDelArmazon` varchar(500) NOT NULL,
  `colorDelLente` varchar(500) NOT NULL,
  `IMG` varchar(500) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` int unsigned DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Ray Ban','Erika','Carey','Marrón degradé','/images/products/id1.png',NULL,12,'2022-06-23 19:22:42'),(2,'Ray Ban','Ferrari','Petróleo','Celeste','/images/products/id2.png',NULL,1,'2022-06-20 21:11:55'),(3,'Prada','Catwalk','Negro','Gris','/images/products/id3.png',NULL,14,'2022-06-23 19:22:42'),(4,'Gucci','Marine','Varios','Violeta','/images/products/id4.png',NULL,1,'2022-06-20 21:12:50'),(6,'Gucci','Lulú','Carey','Celeste','/images/products/id6.png',NULL,12,'2022-06-23 19:22:42'),(7,'Christian Dior Paris','Le carré','Dorado','Azul','/images/products/id8.png',NULL,1,'2022-06-20 21:12:50'),(8,'Christian Dior Paris','Moana','Dorado y gris','Gris degradé','/images/products/id7.png',NULL,14,'2022-06-23 19:22:42'),(10,'Genle Monster','California Sunset','Negro','Naranja','/images/products/id10.png',NULL,1,'2022-06-20 21:12:50'),(15,'Christian Dior Paris','Calaya','Azul y dorado clarito','Azul','/images/products/id5.png',NULL,15,'2022-06-23 19:33:53'),(19,'Balenceaga','Snowboard','Blanco','Celeste','/images/products/id9.png',NULL,15,'2022-06-23 19:22:42'),(22,'dior','luna','blanco','negro','\\images\\uploads\\8605aa1ddb0a91779a3040bb1975191e','2022-06-23 22:13:23',15,'2022-06-23 19:33:53');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-23 19:42:08
