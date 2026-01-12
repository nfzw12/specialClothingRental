package com.entity.view;

import com.entity.FuzhuangfenleiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 服装分类
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@TableName("fuzhuangfenlei")
public class FuzhuangfenleiView  extends FuzhuangfenleiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public FuzhuangfenleiView(){
	}
 
 	public FuzhuangfenleiView(FuzhuangfenleiEntity fuzhuangfenleiEntity){
 	try {
			BeanUtils.copyProperties(this, fuzhuangfenleiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
