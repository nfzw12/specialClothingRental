package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.RizujiejiesuanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.RizujiejiesuanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.RizujiejiesuanView;


/**
 * 日租借结算
 *
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface RizujiejiesuanService extends IService<RizujiejiesuanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<RizujiejiesuanVO> selectListVO(Wrapper<RizujiejiesuanEntity> wrapper);
   	
   	RizujiejiesuanVO selectVO(@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);
   	
   	List<RizujiejiesuanView> selectListView(Wrapper<RizujiejiesuanEntity> wrapper);
   	
   	RizujiejiesuanView selectView(@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<RizujiejiesuanEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<RizujiejiesuanEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<RizujiejiesuanEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<RizujiejiesuanEntity> wrapper);



}

