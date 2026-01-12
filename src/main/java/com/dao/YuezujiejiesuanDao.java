package com.dao;

import com.entity.YuezujiejiesuanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.YuezujiejiesuanVO;
import com.entity.view.YuezujiejiesuanView;


/**
 * 月租借结算
 * 
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface YuezujiejiesuanDao extends BaseMapper<YuezujiejiesuanEntity> {
	
	List<YuezujiejiesuanVO> selectListVO(@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);
	
	YuezujiejiesuanVO selectVO(@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);
	
	List<YuezujiejiesuanView> selectListView(@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);

	List<YuezujiejiesuanView> selectListView(Pagination page,@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);
	
	YuezujiejiesuanView selectView(@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);
	

    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<YuezujiejiesuanEntity> wrapper);



}
