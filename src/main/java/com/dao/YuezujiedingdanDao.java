package com.dao;

import com.entity.YuezujiedingdanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.YuezujiedingdanVO;
import com.entity.view.YuezujiedingdanView;


/**
 * 月租借订单
 * 
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface YuezujiedingdanDao extends BaseMapper<YuezujiedingdanEntity> {
	
	List<YuezujiedingdanVO> selectListVO(@Param("ew") Wrapper<YuezujiedingdanEntity> wrapper);
	
	YuezujiedingdanVO selectVO(@Param("ew") Wrapper<YuezujiedingdanEntity> wrapper);
	
	List<YuezujiedingdanView> selectListView(@Param("ew") Wrapper<YuezujiedingdanEntity> wrapper);

	List<YuezujiedingdanView> selectListView(Pagination page,@Param("ew") Wrapper<YuezujiedingdanEntity> wrapper);
	
	YuezujiedingdanView selectView(@Param("ew") Wrapper<YuezujiedingdanEntity> wrapper);
	

}
