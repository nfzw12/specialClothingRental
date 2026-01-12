package com.entity.view;

import com.entity.YuezujiedingdanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 月租借订单
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@TableName("yuezujiedingdan")
public class YuezujiedingdanView  extends YuezujiedingdanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public YuezujiedingdanView(){
	}
 
 	public YuezujiedingdanView(YuezujiedingdanEntity yuezujiedingdanEntity){
 	try {
			BeanUtils.copyProperties(this, yuezujiedingdanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
