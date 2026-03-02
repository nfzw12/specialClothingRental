-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: springbooto8ka3
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `springbooto8ka3`
--

/*!40000 DROP DATABASE IF EXISTS `springbooto8ka3`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `springbooto8ka3` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `springbooto8ka3`;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='配置文件';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'picture1','upload/picture1.jpg'),(2,'picture2','upload/picture2.jpg'),(3,'picture3','upload/picture3.jpg');
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuzhuangfenlei`
--

DROP TABLE IF EXISTS `fuzhuangfenlei`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fuzhuangfenlei` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `fuzhuangfenlei` varchar(200) DEFAULT NULL COMMENT '服装分类',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COMMENT='服装分类';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuzhuangfenlei`
--

LOCK TABLES `fuzhuangfenlei` WRITE;
/*!40000 ALTER TABLE `fuzhuangfenlei` DISABLE KEYS */;
INSERT INTO `fuzhuangfenlei` VALUES (21,'2023-06-28 12:45:47','服装分类1'),(22,'2023-06-28 12:45:47','服装分类2'),(23,'2023-06-28 12:45:47','服装分类3'),(24,'2023-06-28 12:45:47','服装分类4'),(25,'2023-06-28 12:45:47','服装分类5'),(26,'2023-06-28 12:45:47','服装分类6'),(27,'2023-06-28 12:45:47','服装分类7'),(28,'2023-06-28 12:45:47','服装分类8');
/*!40000 ALTER TABLE `fuzhuangfenlei` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuzhuangxinxi`
--

DROP TABLE IF EXISTS `fuzhuangxinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fuzhuangxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `fuzhuangmingcheng` varchar(200) NOT NULL COMMENT '服装名称',
  `fuzhuangfenlei` varchar(200) NOT NULL COMMENT '服装分类',
  `fuzhuangtupian` longtext COMMENT '服装图片',
  `fuzhuangchima` varchar(200) DEFAULT NULL COMMENT '服装尺码',
  `fuzhuangyanse` varchar(200) DEFAULT NULL COMMENT '服装颜色',
  `fuzhuangcailiao` varchar(200) DEFAULT NULL COMMENT '服装材料',
  `fuzhuangjiage` int(11) NOT NULL COMMENT '服装价格',
  `yuanjia` int(11) NOT NULL COMMENT '服装原价',
  `kucun` int(11) NOT NULL COMMENT '库存',
  `fuzhuangjieshao` longtext COMMENT '服装介绍',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COMMENT='服装信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuzhuangxinxi`
--

LOCK TABLES `fuzhuangxinxi` WRITE;
/*!40000 ALTER TABLE `fuzhuangxinxi` DISABLE KEYS */;
INSERT INTO `fuzhuangxinxi` VALUES (31,'2023-06-28 12:45:47','服装名称1','服装分类1','upload/fuzhuangxinxi_fuzhuangtupian1.jpg,upload/fuzhuangxinxi_fuzhuangtupian2.jpg,upload/fuzhuangxinxi_fuzhuangtupian3.jpg','服装尺码1','服装颜色1','服装材料1',1,100,1,'服装介绍1'),(32,'2023-06-28 12:45:47','服装名称2','服装分类2','upload/fuzhuangxinxi_fuzhuangtupian2.jpg,upload/fuzhuangxinxi_fuzhuangtupian3.jpg,upload/fuzhuangxinxi_fuzhuangtupian4.jpg','服装尺码2','服装颜色2','服装材料2',2,200,2,'服装介绍2'),(33,'2023-06-28 12:45:47','服装名称3','服装分类3','upload/fuzhuangxinxi_fuzhuangtupian3.jpg,upload/fuzhuangxinxi_fuzhuangtupian4.jpg,upload/fuzhuangxinxi_fuzhuangtupian5.jpg','服装尺码3','服装颜色3','服装材料3',3,300,3,'服装介绍3'),(34,'2023-06-28 12:45:47','服装名称4','服装分类4','upload/fuzhuangxinxi_fuzhuangtupian4.jpg,upload/fuzhuangxinxi_fuzhuangtupian5.jpg,upload/fuzhuangxinxi_fuzhuangtupian6.jpg','服装尺码4','服装颜色4','服装材料4',4,400,4,'服装介绍4'),(35,'2023-06-28 12:45:47','服装名称5','服装分类5','upload/fuzhuangxinxi_fuzhuangtupian5.jpg,upload/fuzhuangxinxi_fuzhuangtupian6.jpg,upload/fuzhuangxinxi_fuzhuangtupian7.jpg','服装尺码5','服装颜色5','服装材料5',5,500,5,'服装介绍5'),(36,'2023-06-28 12:45:47','服装名称6','服装分类6','upload/fuzhuangxinxi_fuzhuangtupian6.jpg,upload/fuzhuangxinxi_fuzhuangtupian7.jpg,upload/fuzhuangxinxi_fuzhuangtupian8.jpg','服装尺码6','服装颜色6','服装材料6',6,600,6,'服装介绍6'),(37,'2023-06-28 12:45:47','服装名称7','服装分类7','upload/fuzhuangxinxi_fuzhuangtupian7.jpg,upload/fuzhuangxinxi_fuzhuangtupian8.jpg,upload/fuzhuangxinxi_fuzhuangtupian9.jpg','服装尺码7','服装颜色7','服装材料7',7,700,7,'服装介绍7'),(38,'2023-06-28 12:45:47','服装名称8','服装分类8','upload/fuzhuangxinxi_fuzhuangtupian8.jpg,upload/fuzhuangxinxi_fuzhuangtupian9.jpg,upload/fuzhuangxinxi_fuzhuangtupian10.jpg','服装尺码8','服装颜色8','服装材料8',8,800,8,'服装介绍8');
/*!40000 ALTER TABLE `fuzhuangxinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rizujiedingdan`
--

DROP TABLE IF EXISTS `rizujiedingdan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rizujiedingdan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `dingdanbianhao` varchar(200) DEFAULT NULL COMMENT '订单编号',
  `fuzhuangmingcheng` varchar(200) DEFAULT NULL COMMENT '服装名称',
  `fuzhuangtupian` longtext COMMENT '服装图片',
  `fuzhuangfenlei` varchar(200) DEFAULT NULL COMMENT '服装分类',
  `fuzhuangchima` varchar(200) DEFAULT NULL COMMENT '服装尺码',
  `fuzhuangyanse` varchar(200) DEFAULT NULL COMMENT '服装颜色',
  `fuzhuangcailiao` varchar(200) DEFAULT NULL COMMENT '服装材料',
  `rizujin` varchar(200) DEFAULT NULL COMMENT '日租金',
  `zujieshizhang` varchar(200) DEFAULT NULL COMMENT '租借时长',
  `dingjin` varchar(200) DEFAULT NULL COMMENT '订金',
  `zujieriqi` date DEFAULT NULL COMMENT '租借日期',
  `shouzuriqi` varchar(200) DEFAULT NULL COMMENT '收租日期',
  `zujiebeizhu` longtext COMMENT '租借备注',
  `yonghuzhanghao` varchar(200) DEFAULT NULL COMMENT '用户账号',
  `yonghuxingming` varchar(200) DEFAULT NULL COMMENT '用户姓名',
  `shouji` varchar(200) DEFAULT NULL COMMENT '手机',
  PRIMARY KEY (`id`),
  UNIQUE KEY `dingdanbianhao` (`dingdanbianhao`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 COMMENT='日租借订单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rizujiedingdan`
--

LOCK TABLES `rizujiedingdan` WRITE;
/*!40000 ALTER TABLE `rizujiedingdan` DISABLE KEYS */;
INSERT INTO `rizujiedingdan` VALUES (61,'2023-06-28 12:45:47','1111111111','服装名称1','upload/rizujiedingdan_fuzhuangtupian1.jpg,upload/rizujiedingdan_fuzhuangtupian2.jpg,upload/rizujiedingdan_fuzhuangtupian3.jpg','服装分类1','服装尺码1','服装颜色1','服装材料1','日租金1','租借时长1','订金1','2023-06-28','收租日期1','租借备注1','用户账号1','用户姓名1','手机1'),(62,'2023-06-28 12:45:47','2222222222','服装名称2','upload/rizujiedingdan_fuzhuangtupian2.jpg,upload/rizujiedingdan_fuzhuangtupian3.jpg,upload/rizujiedingdan_fuzhuangtupian4.jpg','服装分类2','服装尺码2','服装颜色2','服装材料2','日租金2','租借时长2','订金2','2023-06-28','收租日期2','租借备注2','用户账号2','用户姓名2','手机2'),(63,'2023-06-28 12:45:47','3333333333','服装名称3','upload/rizujiedingdan_fuzhuangtupian3.jpg,upload/rizujiedingdan_fuzhuangtupian4.jpg,upload/rizujiedingdan_fuzhuangtupian5.jpg','服装分类3','服装尺码3','服装颜色3','服装材料3','日租金3','租借时长3','订金3','2023-06-28','收租日期3','租借备注3','用户账号3','用户姓名3','手机3'),(64,'2023-06-28 12:45:47','4444444444','服装名称4','upload/rizujiedingdan_fuzhuangtupian4.jpg,upload/rizujiedingdan_fuzhuangtupian5.jpg,upload/rizujiedingdan_fuzhuangtupian6.jpg','服装分类4','服装尺码4','服装颜色4','服装材料4','日租金4','租借时长4','订金4','2023-06-28','收租日期4','租借备注4','用户账号4','用户姓名4','手机4'),(65,'2023-06-28 12:45:47','5555555555','服装名称5','upload/rizujiedingdan_fuzhuangtupian5.jpg,upload/rizujiedingdan_fuzhuangtupian6.jpg,upload/rizujiedingdan_fuzhuangtupian7.jpg','服装分类5','服装尺码5','服装颜色5','服装材料5','日租金5','租借时长5','订金5','2023-06-28','收租日期5','租借备注5','用户账号5','用户姓名5','手机5'),(66,'2023-06-28 12:45:47','6666666666','服装名称6','upload/rizujiedingdan_fuzhuangtupian6.jpg,upload/rizujiedingdan_fuzhuangtupian7.jpg,upload/rizujiedingdan_fuzhuangtupian8.jpg','服装分类6','服装尺码6','服装颜色6','服装材料6','日租金6','租借时长6','订金6','2023-06-28','收租日期6','租借备注6','用户账号6','用户姓名6','手机6'),(67,'2023-06-28 12:45:47','7777777777','服装名称7','upload/rizujiedingdan_fuzhuangtupian7.jpg,upload/rizujiedingdan_fuzhuangtupian8.jpg,upload/rizujiedingdan_fuzhuangtupian9.jpg','服装分类7','服装尺码7','服装颜色7','服装材料7','日租金7','租借时长7','订金7','2023-06-28','收租日期7','租借备注7','用户账号7','用户姓名7','手机7'),(68,'2023-06-28 12:45:47','8888888888','服装名称8','upload/rizujiedingdan_fuzhuangtupian8.jpg,upload/rizujiedingdan_fuzhuangtupian9.jpg,upload/rizujiedingdan_fuzhuangtupian10.jpg','服装分类8','服装尺码8','服装颜色8','服装材料8','日租金8','租借时长8','订金8','2023-06-28','收租日期8','租借备注8','用户账号8','用户姓名8','手机8');
/*!40000 ALTER TABLE `rizujiedingdan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rizujiejiesuan`
--

DROP TABLE IF EXISTS `rizujiejiesuan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rizujiejiesuan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `dingdanbianhao` varchar(200) DEFAULT NULL COMMENT '订单编号',
  `fuzhuangmingcheng` varchar(200) DEFAULT NULL COMMENT '服装名称',
  `fuzhuangtupian` longtext COMMENT '服装图片',
  `fuzhuangfenlei` varchar(200) DEFAULT NULL COMMENT '服装分类',
  `fuzhuangchima` varchar(200) DEFAULT NULL COMMENT '服装尺码',
  `fuzhuangyanse` varchar(200) DEFAULT NULL COMMENT '服装颜色',
  `fuzhuangcailiao` varchar(200) DEFAULT NULL COMMENT '服装材料',
  `rizujin` varchar(200) DEFAULT NULL COMMENT '日租金',
  `zujieriqi` date DEFAULT NULL COMMENT '租借日期',
  `rizujieshizhang` varchar(200) DEFAULT NULL COMMENT '租借时长(天)',
  `dingjin` varchar(200) DEFAULT NULL COMMENT '订金',
  `shengyujine` int(11) DEFAULT NULL COMMENT '剩余金额',
  `shouzuriqi` varchar(200) DEFAULT NULL COMMENT '收租日期',
  `zujiebeizhu` longtext COMMENT '租借备注',
  `yonghuzhanghao` varchar(200) DEFAULT NULL COMMENT '用户账号',
  `yonghuxingming` varchar(200) DEFAULT NULL COMMENT '用户姓名',
  `shouji` varchar(200) DEFAULT NULL COMMENT '手机',
  `sfsh` varchar(200) DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext COMMENT '审核回复',
  `ispay` varchar(200) DEFAULT '未支付' COMMENT '是否支付',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8 COMMENT='日租借结算';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rizujiejiesuan`
--

LOCK TABLES `rizujiejiesuan` WRITE;
/*!40000 ALTER TABLE `rizujiejiesuan` DISABLE KEYS */;
INSERT INTO `rizujiejiesuan` VALUES (81,'2023-06-28 12:45:47','订单编号1','服装名称1','upload/rizujiejiesuan_fuzhuangtupian1.jpg,upload/rizujiejiesuan_fuzhuangtupian2.jpg,upload/rizujiejiesuan_fuzhuangtupian3.jpg','服装分类1','服装尺码1','服装颜色1','服装材料1','日租金1','2023-06-28','租借时长(天)1','订金1',1,'收租日期1','租借备注1','用户账号1','用户姓名1','手机1','是','','未支付'),(82,'2023-06-28 12:45:47','订单编号2','服装名称2','upload/rizujiejiesuan_fuzhuangtupian2.jpg,upload/rizujiejiesuan_fuzhuangtupian3.jpg,upload/rizujiejiesuan_fuzhuangtupian4.jpg','服装分类2','服装尺码2','服装颜色2','服装材料2','日租金2','2023-06-28','租借时长(天)2','订金2',2,'收租日期2','租借备注2','用户账号2','用户姓名2','手机2','是','','未支付'),(83,'2023-06-28 12:45:47','订单编号3','服装名称3','upload/rizujiejiesuan_fuzhuangtupian3.jpg,upload/rizujiejiesuan_fuzhuangtupian4.jpg,upload/rizujiejiesuan_fuzhuangtupian5.jpg','服装分类3','服装尺码3','服装颜色3','服装材料3','日租金3','2023-06-28','租借时长(天)3','订金3',3,'收租日期3','租借备注3','用户账号3','用户姓名3','手机3','是','','未支付'),(84,'2023-06-28 12:45:47','订单编号4','服装名称4','upload/rizujiejiesuan_fuzhuangtupian4.jpg,upload/rizujiejiesuan_fuzhuangtupian5.jpg,upload/rizujiejiesuan_fuzhuangtupian6.jpg','服装分类4','服装尺码4','服装颜色4','服装材料4','日租金4','2023-06-28','租借时长(天)4','订金4',4,'收租日期4','租借备注4','用户账号4','用户姓名4','手机4','是','','未支付'),(85,'2023-06-28 12:45:47','订单编号5','服装名称5','upload/rizujiejiesuan_fuzhuangtupian5.jpg,upload/rizujiejiesuan_fuzhuangtupian6.jpg,upload/rizujiejiesuan_fuzhuangtupian7.jpg','服装分类5','服装尺码5','服装颜色5','服装材料5','日租金5','2023-06-28','租借时长(天)5','订金5',5,'收租日期5','租借备注5','用户账号5','用户姓名5','手机5','是','','未支付'),(86,'2023-06-28 12:45:47','订单编号6','服装名称6','upload/rizujiejiesuan_fuzhuangtupian6.jpg,upload/rizujiejiesuan_fuzhuangtupian7.jpg,upload/rizujiejiesuan_fuzhuangtupian8.jpg','服装分类6','服装尺码6','服装颜色6','服装材料6','日租金6','2023-06-28','租借时长(天)6','订金6',6,'收租日期6','租借备注6','用户账号6','用户姓名6','手机6','是','','未支付'),(87,'2023-06-28 12:45:47','订单编号7','服装名称7','upload/rizujiejiesuan_fuzhuangtupian7.jpg,upload/rizujiejiesuan_fuzhuangtupian8.jpg,upload/rizujiejiesuan_fuzhuangtupian9.jpg','服装分类7','服装尺码7','服装颜色7','服装材料7','日租金7','2023-06-28','租借时长(天)7','订金7',7,'收租日期7','租借备注7','用户账号7','用户姓名7','手机7','是','','未支付'),(88,'2023-06-28 12:45:47','订单编号8','服装名称8','upload/rizujiejiesuan_fuzhuangtupian8.jpg,upload/rizujiejiesuan_fuzhuangtupian9.jpg,upload/rizujiejiesuan_fuzhuangtupian10.jpg','服装分类8','服装尺码8','服装颜色8','服装材料8','日租金8','2023-06-28','租借时长(天)8','订金8',8,'收租日期8','租借备注8','用户账号8','用户姓名8','手机8','是','','未支付');
/*!40000 ALTER TABLE `rizujiejiesuan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `tablename` varchar(100) DEFAULT NULL COMMENT '表名',
  `role` varchar(100) DEFAULT NULL COMMENT '角色',
  `token` varchar(200) NOT NULL COMMENT '密码',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  `expiratedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='token表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `role` varchar(100) DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','管理员','2023-06-28 12:45:47');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yonghu`
--

DROP TABLE IF EXISTS `yonghu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `yonghu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yonghuzhanghao` varchar(200) NOT NULL COMMENT '用户账号',
  `yonghuxingming` varchar(200) NOT NULL COMMENT '用户姓名',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `shouji` varchar(200) DEFAULT NULL COMMENT '手机',
  `touxiang` longtext COMMENT '头像',
  `youxiang` varchar(200) DEFAULT NULL COMMENT '邮箱',
  PRIMARY KEY (`id`),
  UNIQUE KEY `yonghuzhanghao` (`yonghuzhanghao`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='用户';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yonghu`
--

LOCK TABLES `yonghu` WRITE;
/*!40000 ALTER TABLE `yonghu` DISABLE KEYS */;
INSERT INTO `yonghu` VALUES (11,'2023-06-28 12:45:47','用户账号1','用户姓名1','123456','男','13823888881','upload/yonghu_touxiang1.jpg','773890001@qq.com'),(12,'2023-06-28 12:45:47','用户账号2','用户姓名2','123456','男','13823888882','upload/yonghu_touxiang2.jpg','773890002@qq.com'),(13,'2023-06-28 12:45:47','用户账号3','用户姓名3','123456','男','13823888883','upload/yonghu_touxiang3.jpg','773890003@qq.com'),(14,'2023-06-28 12:45:47','用户账号4','用户姓名4','123456','男','13823888884','upload/yonghu_touxiang4.jpg','773890004@qq.com'),(15,'2023-06-28 12:45:47','用户账号5','用户姓名5','123456','男','13823888885','upload/yonghu_touxiang5.jpg','773890005@qq.com'),(16,'2023-06-28 12:45:47','用户账号6','用户姓名6','123456','男','13823888886','upload/yonghu_touxiang6.jpg','773890006@qq.com'),(17,'2023-06-28 12:45:47','用户账号7','用户姓名7','123456','男','13823888887','upload/yonghu_touxiang7.jpg','773890007@qq.com'),(18,'2023-06-28 12:45:47','用户账号8','用户姓名8','123456','男','13823888888','upload/yonghu_touxiang8.jpg','773890008@qq.com');
/*!40000 ALTER TABLE `yonghu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yuezujiedingdan`
--

DROP TABLE IF EXISTS `yuezujiedingdan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `yuezujiedingdan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `dingdanbianhao` varchar(200) DEFAULT NULL COMMENT '订单编号',
  `fuzhuangmingcheng` varchar(200) DEFAULT NULL COMMENT '服装名称',
  `fuzhuangtupian` longtext COMMENT '服装图片',
  `fuzhuangfenlei` varchar(200) DEFAULT NULL COMMENT '服装分类',
  `fuzhuangchima` varchar(200) DEFAULT NULL COMMENT '服装尺码',
  `fuzhuangyanse` varchar(200) DEFAULT NULL COMMENT '服装颜色',
  `fuzhuangcailiao` varchar(200) DEFAULT NULL COMMENT '服装材料',
  `yuezujin` varchar(200) DEFAULT NULL COMMENT '月租金',
  `yuezujieshizhang` varchar(200) DEFAULT NULL COMMENT '租借时长(月)',
  `zujieriqi` date DEFAULT NULL COMMENT '租借日期',
  `dingjin` varchar(200) DEFAULT NULL COMMENT '订金',
  `shouzuriqi` varchar(200) DEFAULT NULL COMMENT '收租日期',
  `zujiebeizhu` longtext COMMENT '租借备注',
  `yonghuzhanghao` varchar(200) DEFAULT NULL COMMENT '用户账号',
  `yonghuxingming` varchar(200) DEFAULT NULL COMMENT '用户姓名',
  `shouji` varchar(200) DEFAULT NULL COMMENT '手机',
  `ispay` varchar(200) DEFAULT '未支付' COMMENT '是否支付',
  PRIMARY KEY (`id`),
  UNIQUE KEY `dingdanbianhao` (`dingdanbianhao`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COMMENT='月租借订单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yuezujiedingdan`
--

LOCK TABLES `yuezujiedingdan` WRITE;
/*!40000 ALTER TABLE `yuezujiedingdan` DISABLE KEYS */;
INSERT INTO `yuezujiedingdan` VALUES (51,'2023-06-28 12:45:47','1111111111','服装名称1','upload/yuezujiedingdan_fuzhuangtupian1.jpg,upload/yuezujiedingdan_fuzhuangtupian2.jpg,upload/yuezujiedingdan_fuzhuangtupian3.jpg','服装分类1','服装尺码1','服装颜色1','服装材料1','月租金1','租借时长(月)1','2023-06-28','订金1','收租日期1','租借备注1','用户账号1','用户姓名1','手机1','未支付'),(52,'2023-06-28 12:45:47','2222222222','服装名称2','upload/yuezujiedingdan_fuzhuangtupian2.jpg,upload/yuezujiedingdan_fuzhuangtupian3.jpg,upload/yuezujiedingdan_fuzhuangtupian4.jpg','服装分类2','服装尺码2','服装颜色2','服装材料2','月租金2','租借时长(月)2','2023-06-28','订金2','收租日期2','租借备注2','用户账号2','用户姓名2','手机2','未支付'),(53,'2023-06-28 12:45:47','3333333333','服装名称3','upload/yuezujiedingdan_fuzhuangtupian3.jpg,upload/yuezujiedingdan_fuzhuangtupian4.jpg,upload/yuezujiedingdan_fuzhuangtupian5.jpg','服装分类3','服装尺码3','服装颜色3','服装材料3','月租金3','租借时长(月)3','2023-06-28','订金3','收租日期3','租借备注3','用户账号3','用户姓名3','手机3','未支付'),(54,'2023-06-28 12:45:47','4444444444','服装名称4','upload/yuezujiedingdan_fuzhuangtupian4.jpg,upload/yuezujiedingdan_fuzhuangtupian5.jpg,upload/yuezujiedingdan_fuzhuangtupian6.jpg','服装分类4','服装尺码4','服装颜色4','服装材料4','月租金4','租借时长(月)4','2023-06-28','订金4','收租日期4','租借备注4','用户账号4','用户姓名4','手机4','未支付'),(55,'2023-06-28 12:45:47','5555555555','服装名称5','upload/yuezujiedingdan_fuzhuangtupian5.jpg,upload/yuezujiedingdan_fuzhuangtupian6.jpg,upload/yuezujiedingdan_fuzhuangtupian7.jpg','服装分类5','服装尺码5','服装颜色5','服装材料5','月租金5','租借时长(月)5','2023-06-28','订金5','收租日期5','租借备注5','用户账号5','用户姓名5','手机5','未支付'),(56,'2023-06-28 12:45:47','6666666666','服装名称6','upload/yuezujiedingdan_fuzhuangtupian6.jpg,upload/yuezujiedingdan_fuzhuangtupian7.jpg,upload/yuezujiedingdan_fuzhuangtupian8.jpg','服装分类6','服装尺码6','服装颜色6','服装材料6','月租金6','租借时长(月)6','2023-06-28','订金6','收租日期6','租借备注6','用户账号6','用户姓名6','手机6','未支付'),(57,'2023-06-28 12:45:47','7777777777','服装名称7','upload/yuezujiedingdan_fuzhuangtupian7.jpg,upload/yuezujiedingdan_fuzhuangtupian8.jpg,upload/yuezujiedingdan_fuzhuangtupian9.jpg','服装分类7','服装尺码7','服装颜色7','服装材料7','月租金7','租借时长(月)7','2023-06-28','订金7','收租日期7','租借备注7','用户账号7','用户姓名7','手机7','未支付'),(58,'2023-06-28 12:45:47','8888888888','服装名称8','upload/yuezujiedingdan_fuzhuangtupian8.jpg,upload/yuezujiedingdan_fuzhuangtupian9.jpg,upload/yuezujiedingdan_fuzhuangtupian10.jpg','服装分类8','服装尺码8','服装颜色8','服装材料8','月租金8','租借时长(月)8','2023-06-28','订金8','收租日期8','租借备注8','用户账号8','用户姓名8','手机8','未支付');
/*!40000 ALTER TABLE `yuezujiedingdan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yuezujiejiesuan`
--

DROP TABLE IF EXISTS `yuezujiejiesuan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `yuezujiejiesuan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `dingdanbianhao` varchar(200) DEFAULT NULL COMMENT '订单编号',
  `fuzhuangmingcheng` varchar(200) DEFAULT NULL COMMENT '服装名称',
  `fuzhuangtupian` longtext COMMENT '服装图片',
  `fuzhuangfenlei` varchar(200) DEFAULT NULL COMMENT '服装分类',
  `fuzhuangchima` varchar(200) DEFAULT NULL COMMENT '服装尺码',
  `fuzhuangyanse` varchar(200) DEFAULT NULL COMMENT '服装颜色',
  `fuzhuangcailiao` varchar(200) DEFAULT NULL COMMENT '服装材料',
  `yuezujin` varchar(200) DEFAULT NULL COMMENT '月租金',
  `yuezujieshizhang` varchar(200) DEFAULT NULL COMMENT '月租借时长',
  `dingjin` varchar(200) DEFAULT NULL COMMENT '订金',
  `shengyufeiyong` int(11) DEFAULT NULL COMMENT '剩余费用',
  `zujieriqi` date DEFAULT NULL COMMENT '租借日期',
  `zujiebeizhu` longtext COMMENT '租借备注',
  `yonghuxingming` varchar(200) DEFAULT NULL COMMENT '用户姓名',
  `yonghuzhanghao` varchar(200) DEFAULT NULL COMMENT '用户账号',
  `shouji` varchar(200) DEFAULT NULL COMMENT '手机',
  `shouzuriqi` varchar(200) DEFAULT NULL COMMENT '收租日期',
  `sfsh` varchar(200) DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext COMMENT '审核回复',
  `ispay` varchar(200) DEFAULT '未支付' COMMENT '是否支付',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8 COMMENT='月租借结算';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yuezujiejiesuan`
--

LOCK TABLES `yuezujiejiesuan` WRITE;
/*!40000 ALTER TABLE `yuezujiejiesuan` DISABLE KEYS */;
INSERT INTO `yuezujiejiesuan` VALUES (71,'2023-06-28 12:45:47','订单编号1','服装名称1','upload/yuezujiejiesuan_fuzhuangtupian1.jpg,upload/yuezujiejiesuan_fuzhuangtupian2.jpg,upload/yuezujiejiesuan_fuzhuangtupian3.jpg','服装分类1','服装尺码1','服装颜色1','服装材料1','月租金1','月租借时长1','订金1',1,'2023-06-28','租借备注1','用户姓名1','用户账号1','手机1','收租日期1','是','','未支付'),(72,'2023-06-28 12:45:47','订单编号2','服装名称2','upload/yuezujiejiesuan_fuzhuangtupian2.jpg,upload/yuezujiejiesuan_fuzhuangtupian3.jpg,upload/yuezujiejiesuan_fuzhuangtupian4.jpg','服装分类2','服装尺码2','服装颜色2','服装材料2','月租金2','月租借时长2','订金2',2,'2023-06-28','租借备注2','用户姓名2','用户账号2','手机2','收租日期2','是','','未支付'),(73,'2023-06-28 12:45:47','订单编号3','服装名称3','upload/yuezujiejiesuan_fuzhuangtupian3.jpg,upload/yuezujiejiesuan_fuzhuangtupian4.jpg,upload/yuezujiejiesuan_fuzhuangtupian5.jpg','服装分类3','服装尺码3','服装颜色3','服装材料3','月租金3','月租借时长3','订金3',3,'2023-06-28','租借备注3','用户姓名3','用户账号3','手机3','收租日期3','是','','未支付'),(74,'2023-06-28 12:45:47','订单编号4','服装名称4','upload/yuezujiejiesuan_fuzhuangtupian4.jpg,upload/yuezujiejiesuan_fuzhuangtupian5.jpg,upload/yuezujiejiesuan_fuzhuangtupian6.jpg','服装分类4','服装尺码4','服装颜色4','服装材料4','月租金4','月租借时长4','订金4',4,'2023-06-28','租借备注4','用户姓名4','用户账号4','手机4','收租日期4','是','','未支付'),(75,'2023-06-28 12:45:47','订单编号5','服装名称5','upload/yuezujiejiesuan_fuzhuangtupian5.jpg,upload/yuezujiejiesuan_fuzhuangtupian6.jpg,upload/yuezujiejiesuan_fuzhuangtupian7.jpg','服装分类5','服装尺码5','服装颜色5','服装材料5','月租金5','月租借时长5','订金5',5,'2023-06-28','租借备注5','用户姓名5','用户账号5','手机5','收租日期5','是','','未支付'),(76,'2023-06-28 12:45:47','订单编号6','服装名称6','upload/yuezujiejiesuan_fuzhuangtupian6.jpg,upload/yuezujiejiesuan_fuzhuangtupian7.jpg,upload/yuezujiejiesuan_fuzhuangtupian8.jpg','服装分类6','服装尺码6','服装颜色6','服装材料6','月租金6','月租借时长6','订金6',6,'2023-06-28','租借备注6','用户姓名6','用户账号6','手机6','收租日期6','是','','未支付'),(77,'2023-06-28 12:45:47','订单编号7','服装名称7','upload/yuezujiejiesuan_fuzhuangtupian7.jpg,upload/yuezujiejiesuan_fuzhuangtupian8.jpg,upload/yuezujiejiesuan_fuzhuangtupian9.jpg','服装分类7','服装尺码7','服装颜色7','服装材料7','月租金7','月租借时长7','订金7',7,'2023-06-28','租借备注7','用户姓名7','用户账号7','手机7','收租日期7','是','','未支付'),(78,'2023-06-28 12:45:47','订单编号8','服装名称8','upload/yuezujiejiesuan_fuzhuangtupian8.jpg,upload/yuezujiejiesuan_fuzhuangtupian9.jpg,upload/yuezujiejiesuan_fuzhuangtupian10.jpg','服装分类8','服装尺码8','服装颜色8','服装材料8','月租金8','月租借时长8','订金8',8,'2023-06-28','租借备注8','用户姓名8','用户账号8','手机8','收租日期8','是','','未支付');
/*!40000 ALTER TABLE `yuezujiejiesuan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zujiehetong`
--

DROP TABLE IF EXISTS `zujiehetong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zujiehetong` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `fuzhuangmingcheng` varchar(200) DEFAULT NULL COMMENT '服装名称',
  `fuzhuangfenlei` varchar(200) DEFAULT NULL COMMENT '服装分类',
  `fuzhuangtupian` longtext COMMENT '服装图片',
  `fuzhuangchima` varchar(200) DEFAULT NULL COMMENT '服装尺码',
  `fuzhuangyanse` varchar(200) DEFAULT NULL COMMENT '服装颜色',
  `fuzhuangcailiao` varchar(200) DEFAULT NULL COMMENT '服装材料',
  `yuezujin` varchar(200) DEFAULT NULL COMMENT '月租金',
  `rizujin` varchar(200) DEFAULT NULL COMMENT '日租金',
  `dingjin` varchar(200) DEFAULT NULL COMMENT '订金',
  `zujiekaishiriqi` date DEFAULT NULL COMMENT '租借开始日期',
  `zujiejieshuriqi` varchar(200) DEFAULT NULL COMMENT '租借结束日期',
  `zujiexiangqing` longtext COMMENT '租借详情',
  `shouzuriqi` varchar(200) DEFAULT NULL COMMENT '收租日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 COMMENT='租借合同';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zujiehetong`
--

LOCK TABLES `zujiehetong` WRITE;
/*!40000 ALTER TABLE `zujiehetong` DISABLE KEYS */;
INSERT INTO `zujiehetong` VALUES (41,'2023-06-28 12:45:47','服装名称1','服装分类1','upload/zujiehetong_fuzhuangtupian1.jpg,upload/zujiehetong_fuzhuangtupian2.jpg,upload/zujiehetong_fuzhuangtupian3.jpg','服装尺码1','服装颜色1','服装材料1','月租金1','日租金1','订金1','2023-06-28','租借结束日期1','租借详情1','收租日期1'),(42,'2023-06-28 12:45:47','服装名称2','服装分类2','upload/zujiehetong_fuzhuangtupian2.jpg,upload/zujiehetong_fuzhuangtupian3.jpg,upload/zujiehetong_fuzhuangtupian4.jpg','服装尺码2','服装颜色2','服装材料2','月租金2','日租金2','订金2','2023-06-28','租借结束日期2','租借详情2','收租日期2'),(43,'2023-06-28 12:45:47','服装名称3','服装分类3','upload/zujiehetong_fuzhuangtupian3.jpg,upload/zujiehetong_fuzhuangtupian4.jpg,upload/zujiehetong_fuzhuangtupian5.jpg','服装尺码3','服装颜色3','服装材料3','月租金3','日租金3','订金3','2023-06-28','租借结束日期3','租借详情3','收租日期3'),(44,'2023-06-28 12:45:47','服装名称4','服装分类4','upload/zujiehetong_fuzhuangtupian4.jpg,upload/zujiehetong_fuzhuangtupian5.jpg,upload/zujiehetong_fuzhuangtupian6.jpg','服装尺码4','服装颜色4','服装材料4','月租金4','日租金4','订金4','2023-06-28','租借结束日期4','租借详情4','收租日期4'),(45,'2023-06-28 12:45:47','服装名称5','服装分类5','upload/zujiehetong_fuzhuangtupian5.jpg,upload/zujiehetong_fuzhuangtupian6.jpg,upload/zujiehetong_fuzhuangtupian7.jpg','服装尺码5','服装颜色5','服装材料5','月租金5','日租金5','订金5','2023-06-28','租借结束日期5','租借详情5','收租日期5'),(46,'2023-06-28 12:45:47','服装名称6','服装分类6','upload/zujiehetong_fuzhuangtupian6.jpg,upload/zujiehetong_fuzhuangtupian7.jpg,upload/zujiehetong_fuzhuangtupian8.jpg','服装尺码6','服装颜色6','服装材料6','月租金6','日租金6','订金6','2023-06-28','租借结束日期6','租借详情6','收租日期6'),(47,'2023-06-28 12:45:47','服装名称7','服装分类7','upload/zujiehetong_fuzhuangtupian7.jpg,upload/zujiehetong_fuzhuangtupian8.jpg,upload/zujiehetong_fuzhuangtupian9.jpg','服装尺码7','服装颜色7','服装材料7','月租金7','日租金7','订金7','2023-06-28','租借结束日期7','租借详情7','收租日期7'),(48,'2023-06-28 12:45:47','服装名称8','服装分类8','upload/zujiehetong_fuzhuangtupian8.jpg,upload/zujiehetong_fuzhuangtupian9.jpg,upload/zujiehetong_fuzhuangtupian10.jpg','服装尺码8','服装颜色8','服装材料8','月租金8','日租金8','订金8','2023-06-28','租借结束日期8','租借详情8','收租日期8');
/*!40000 ALTER TABLE `zujiehetong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zukebaozhangxiufu`
--

DROP TABLE IF EXISTS `zukebaozhangxiufu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zukebaozhangxiufu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `dingdanbianhao` varchar(200) DEFAULT NULL COMMENT '订单编号',
  `fuzhuangmingcheng` varchar(200) DEFAULT NULL COMMENT '服装名称',
  `fuzhuangtupian` longtext COMMENT '服装图片',
  `baoxiumingcheng` varchar(200) DEFAULT NULL COMMENT '报修名称',
  `baoxiujiage` int(11) DEFAULT NULL COMMENT '报修价格',
  `baoxiuriqi` date DEFAULT NULL COMMENT '报修日期',
  `baoxiuneirong` longtext COMMENT '报修内容',
  `yonghuzhanghao` varchar(200) DEFAULT NULL COMMENT '用户账号',
  `yonghuxingming` varchar(200) DEFAULT NULL COMMENT '用户姓名',
  `shouji` varchar(200) DEFAULT NULL COMMENT '手机',
  `sfsh` varchar(200) DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext COMMENT '审核回复',
  `ispay` varchar(200) DEFAULT '未支付' COMMENT '是否支付',
  PRIMARY KEY (`id`),
  UNIQUE KEY `dingdanbianhao` (`dingdanbianhao`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8 COMMENT='租客保障修复';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zukebaozhangxiufu`
--

LOCK TABLES `zukebaozhangxiufu` WRITE;
/*!40000 ALTER TABLE `zukebaozhangxiufu` DISABLE KEYS */;
INSERT INTO `zukebaozhangxiufu` VALUES (91,'2023-06-28 12:45:47','1111111111','服装名称1','upload/zukebaozhangxiufu_fuzhuangtupian1.jpg,upload/zukebaozhangxiufu_fuzhuangtupian2.jpg,upload/zukebaozhangxiufu_fuzhuangtupian3.jpg','报修名称1',1,'2023-06-28','报修内容1','用户账号1','用户姓名1','手机1','是','','未支付'),(92,'2023-06-28 12:45:47','2222222222','服装名称2','upload/zukebaozhangxiufu_fuzhuangtupian2.jpg,upload/zukebaozhangxiufu_fuzhuangtupian3.jpg,upload/zukebaozhangxiufu_fuzhuangtupian4.jpg','报修名称2',2,'2023-06-28','报修内容2','用户账号2','用户姓名2','手机2','是','','未支付'),(93,'2023-06-28 12:45:47','3333333333','服装名称3','upload/zukebaozhangxiufu_fuzhuangtupian3.jpg,upload/zukebaozhangxiufu_fuzhuangtupian4.jpg,upload/zukebaozhangxiufu_fuzhuangtupian5.jpg','报修名称3',3,'2023-06-28','报修内容3','用户账号3','用户姓名3','手机3','是','','未支付'),(94,'2023-06-28 12:45:47','4444444444','服装名称4','upload/zukebaozhangxiufu_fuzhuangtupian4.jpg,upload/zukebaozhangxiufu_fuzhuangtupian5.jpg,upload/zukebaozhangxiufu_fuzhuangtupian6.jpg','报修名称4',4,'2023-06-28','报修内容4','用户账号4','用户姓名4','手机4','是','','未支付'),(95,'2023-06-28 12:45:47','5555555555','服装名称5','upload/zukebaozhangxiufu_fuzhuangtupian5.jpg,upload/zukebaozhangxiufu_fuzhuangtupian6.jpg,upload/zukebaozhangxiufu_fuzhuangtupian7.jpg','报修名称5',5,'2023-06-28','报修内容5','用户账号5','用户姓名5','手机5','是','','未支付'),(96,'2023-06-28 12:45:47','6666666666','服装名称6','upload/zukebaozhangxiufu_fuzhuangtupian6.jpg,upload/zukebaozhangxiufu_fuzhuangtupian7.jpg,upload/zukebaozhangxiufu_fuzhuangtupian8.jpg','报修名称6',6,'2023-06-28','报修内容6','用户账号6','用户姓名6','手机6','是','','未支付'),(97,'2023-06-28 12:45:47','7777777777','服装名称7','upload/zukebaozhangxiufu_fuzhuangtupian7.jpg,upload/zukebaozhangxiufu_fuzhuangtupian8.jpg,upload/zukebaozhangxiufu_fuzhuangtupian9.jpg','报修名称7',7,'2023-06-28','报修内容7','用户账号7','用户姓名7','手机7','是','','未支付'),(98,'2023-06-28 12:45:47','8888888888','服装名称8','upload/zukebaozhangxiufu_fuzhuangtupian8.jpg,upload/zukebaozhangxiufu_fuzhuangtupian9.jpg,upload/zukebaozhangxiufu_fuzhuangtupian10.jpg','报修名称8',8,'2023-06-28','报修内容8','用户账号8','用户姓名8','手机8','是','','未支付');
/*!40000 ALTER TABLE `zukebaozhangxiufu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-28 20:47:40
