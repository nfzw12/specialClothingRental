package com.dao;

import com.entity.RizujiejiesuanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.RizujiejiesuanVO;
import com.entity.view.RizujiejiesuanView;


/**
 * 日租借结算
 * 
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface RizujiejiesuanDao extends BaseMapper<RizujiejiesuanEntity> {
	
	List<RizujiejiesuanVO> selectListVO(@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);
	
	RizujiejiesuanVO selectVO(@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);
	
	List<RizujiejiesuanView> selectListView(@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);

	List<RizujiejiesuanView> selectListView(Pagination page,@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);
	
	RizujiejiesuanView selectView(@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);
	

    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<RizujiejiesuanEntity> wrapper);



}
