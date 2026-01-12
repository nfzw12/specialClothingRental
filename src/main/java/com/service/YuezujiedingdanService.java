package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.YuezujiedingdanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.YuezujiedingdanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.YuezujiedingdanView;


/**
 * 月租借订单
 *
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface YuezujiedingdanService extends IService<YuezujiedingdanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<YuezujiedingdanVO> selectListVO(Wrapper<YuezujiedingdanEntity> wrapper);
   	
   	YuezujiedingdanVO selectVO(@Param("ew") Wrapper<YuezujiedingdanEntity> wrapper);
   	
   	List<YuezujiedingdanView> selectListView(Wrapper<YuezujiedingdanEntity> wrapper);
   	
   	YuezujiedingdanView selectView(@Param("ew") Wrapper<YuezujiedingdanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<YuezujiedingdanEntity> wrapper);
   	

}

