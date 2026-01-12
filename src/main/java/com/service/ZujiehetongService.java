package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.ZujiehetongEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.ZujiehetongVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.ZujiehetongView;


/**
 * 租借合同
 *
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface ZujiehetongService extends IService<ZujiehetongEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ZujiehetongVO> selectListVO(Wrapper<ZujiehetongEntity> wrapper);
   	
   	ZujiehetongVO selectVO(@Param("ew") Wrapper<ZujiehetongEntity> wrapper);
   	
   	List<ZujiehetongView> selectListView(Wrapper<ZujiehetongEntity> wrapper);
   	
   	ZujiehetongView selectView(@Param("ew") Wrapper<ZujiehetongEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ZujiehetongEntity> wrapper);
   	

}

