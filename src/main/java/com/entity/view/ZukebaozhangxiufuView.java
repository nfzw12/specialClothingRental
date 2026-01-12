package com.entity.view;

import com.entity.ZukebaozhangxiufuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 租客保障修复
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@TableName("zukebaozhangxiufu")
public class ZukebaozhangxiufuView  extends ZukebaozhangxiufuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ZukebaozhangxiufuView(){
	}
 
 	public ZukebaozhangxiufuView(ZukebaozhangxiufuEntity zukebaozhangxiufuEntity){
 	try {
			BeanUtils.copyProperties(this, zukebaozhangxiufuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
