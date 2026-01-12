package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.RizujiedingdanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.RizujiedingdanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.RizujiedingdanView;


/**
 * 日租借订单
 *
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface RizujiedingdanService extends IService<RizujiedingdanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<RizujiedingdanVO> selectListVO(Wrapper<RizujiedingdanEntity> wrapper);
   	
   	RizujiedingdanVO selectVO(@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);
   	
   	List<RizujiedingdanView> selectListView(Wrapper<RizujiedingdanEntity> wrapper);
   	
   	RizujiedingdanView selectView(@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<RizujiedingdanEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<RizujiedingdanEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<RizujiedingdanEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<RizujiedingdanEntity> wrapper);



}

