package com.dao;

import com.entity.ZujiehetongEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ZujiehetongVO;
import com.entity.view.ZujiehetongView;


/**
 * 租借合同
 * 
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface ZujiehetongDao extends BaseMapper<ZujiehetongEntity> {
	
	List<ZujiehetongVO> selectListVO(@Param("ew") Wrapper<ZujiehetongEntity> wrapper);
	
	ZujiehetongVO selectVO(@Param("ew") Wrapper<ZujiehetongEntity> wrapper);
	
	List<ZujiehetongView> selectListView(@Param("ew") Wrapper<ZujiehetongEntity> wrapper);

	List<ZujiehetongView> selectListView(Pagination page,@Param("ew") Wrapper<ZujiehetongEntity> wrapper);
	
	ZujiehetongView selectView(@Param("ew") Wrapper<ZujiehetongEntity> wrapper);
	

}
