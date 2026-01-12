package com.dao;

import com.entity.FuzhuangfenleiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.FuzhuangfenleiVO;
import com.entity.view.FuzhuangfenleiView;


/**
 * 服装分类
 * 
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface FuzhuangfenleiDao extends BaseMapper<FuzhuangfenleiEntity> {
	
	List<FuzhuangfenleiVO> selectListVO(@Param("ew") Wrapper<FuzhuangfenleiEntity> wrapper);
	
	FuzhuangfenleiVO selectVO(@Param("ew") Wrapper<FuzhuangfenleiEntity> wrapper);
	
	List<FuzhuangfenleiView> selectListView(@Param("ew") Wrapper<FuzhuangfenleiEntity> wrapper);

	List<FuzhuangfenleiView> selectListView(Pagination page,@Param("ew") Wrapper<FuzhuangfenleiEntity> wrapper);
	
	FuzhuangfenleiView selectView(@Param("ew") Wrapper<FuzhuangfenleiEntity> wrapper);
	

}
