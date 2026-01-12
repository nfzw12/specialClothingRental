package com.dao;

import com.entity.RizujiedingdanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.RizujiedingdanVO;
import com.entity.view.RizujiedingdanView;


/**
 * 日租借订单
 * 
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface RizujiedingdanDao extends BaseMapper<RizujiedingdanEntity> {
	
	List<RizujiedingdanVO> selectListVO(@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);
	
	RizujiedingdanVO selectVO(@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);
	
	List<RizujiedingdanView> selectListView(@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);

	List<RizujiedingdanView> selectListView(Pagination page,@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);
	
	RizujiedingdanView selectView(@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);
	

    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<RizujiedingdanEntity> wrapper);



}
