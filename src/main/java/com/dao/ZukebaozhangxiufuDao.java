package com.dao;

import com.entity.ZukebaozhangxiufuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ZukebaozhangxiufuVO;
import com.entity.view.ZukebaozhangxiufuView;


/**
 * 租客保障修复
 * 
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface ZukebaozhangxiufuDao extends BaseMapper<ZukebaozhangxiufuEntity> {
	
	List<ZukebaozhangxiufuVO> selectListVO(@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);
	
	ZukebaozhangxiufuVO selectVO(@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);
	
	List<ZukebaozhangxiufuView> selectListView(@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);

	List<ZukebaozhangxiufuView> selectListView(Pagination page,@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);
	
	ZukebaozhangxiufuView selectView(@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);
	

    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<ZukebaozhangxiufuEntity> wrapper);



}
