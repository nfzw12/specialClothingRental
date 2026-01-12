package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.FuzhuangfenleiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.FuzhuangfenleiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.FuzhuangfenleiView;


/**
 * 服装分类
 *
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface FuzhuangfenleiService extends IService<FuzhuangfenleiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<FuzhuangfenleiVO> selectListVO(Wrapper<FuzhuangfenleiEntity> wrapper);
   	
   	FuzhuangfenleiVO selectVO(@Param("ew") Wrapper<FuzhuangfenleiEntity> wrapper);
   	
   	List<FuzhuangfenleiView> selectListView(Wrapper<FuzhuangfenleiEntity> wrapper);
   	
   	FuzhuangfenleiView selectView(@Param("ew") Wrapper<FuzhuangfenleiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<FuzhuangfenleiEntity> wrapper);
   	

}

