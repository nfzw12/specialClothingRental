package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.ZukebaozhangxiufuEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.ZukebaozhangxiufuVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.ZukebaozhangxiufuView;


/**
 * 租客保障修复
 *
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface ZukebaozhangxiufuService extends IService<ZukebaozhangxiufuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ZukebaozhangxiufuVO> selectListVO(Wrapper<ZukebaozhangxiufuEntity> wrapper);
   	
   	ZukebaozhangxiufuVO selectVO(@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);
   	
   	List<ZukebaozhangxiufuView> selectListView(Wrapper<ZukebaozhangxiufuEntity> wrapper);
   	
   	ZukebaozhangxiufuView selectView(@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ZukebaozhangxiufuEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<ZukebaozhangxiufuEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<ZukebaozhangxiufuEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<ZukebaozhangxiufuEntity> wrapper);



}

