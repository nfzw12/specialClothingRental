CREATE TABLE IF NOT EXISTS `clothing_size` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `clothing_id` bigint(20) NOT NULL COMMENT '服装ID',
  `size` varchar(50) NOT NULL COMMENT '尺码',
  `quantity` int(11) NOT NULL COMMENT '数量',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  FOREIGN KEY (`clothing_id`) REFERENCES `fuzhuangxinxi`(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='服装尺码表';

-- 插入示例数据
INSERT INTO `clothing_size` (`clothing_id`, `size`, `quantity`) VALUES
(31, 'S', 10),
(31, 'M', 15),
(31, 'L', 20),
(32, 'S', 5),
(32, 'M', 10),
(32, 'L', 15);