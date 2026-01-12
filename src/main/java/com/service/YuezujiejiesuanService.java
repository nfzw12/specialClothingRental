package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.YuezujiejiesuanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.YuezujiejiesuanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.YuezujiejiesuanView;


/**
 * 月租借结算
 *
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface YuezujiejiesuanService extends IService<YuezujiejiesuanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<YuezujiejiesuanVO> selectListVO(Wrapper<YuezujiejiesuanEntity> wrapper);
   	
   	YuezujiejiesuanVO selectVO(@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);
   	
   	List<YuezujiejiesuanView> selectListView(Wrapper<YuezujiejiesuanEntity> wrapper);
   	
   	YuezujiejiesuanView selectView(@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<YuezujiejiesuanEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<YuezujiejiesuanEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<YuezujiejiesuanEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<YuezujiejiesuanEntity> wrapper);



}

