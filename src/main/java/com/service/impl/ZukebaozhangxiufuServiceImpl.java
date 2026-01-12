package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.ZukebaozhangxiufuDao;
import com.entity.ZukebaozhangxiufuEntity;
import com.service.ZukebaozhangxiufuService;
import com.entity.vo.ZukebaozhangxiufuVO;
import com.entity.view.ZukebaozhangxiufuView;

@Service("zukebaozhangxiufuService")
public class ZukebaozhangxiufuServiceImpl extends ServiceImpl<ZukebaozhangxiufuDao, ZukebaozhangxiufuEntity> implements ZukebaozhangxiufuService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ZukebaozhangxiufuEntity> page = this.selectPage(
                new Query<ZukebaozhangxiufuEntity>(params).getPage(),
                new EntityWrapper<ZukebaozhangxiufuEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ZukebaozhangxiufuEntity> wrapper) {
		  Page<ZukebaozhangxiufuView> page =new Query<ZukebaozhangxiufuView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<ZukebaozhangxiufuVO> selectListVO(Wrapper<ZukebaozhangxiufuEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public ZukebaozhangxiufuVO selectVO(Wrapper<ZukebaozhangxiufuEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<ZukebaozhangxiufuView> selectListView(Wrapper<ZukebaozhangxiufuEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ZukebaozhangxiufuView selectView(Wrapper<ZukebaozhangxiufuEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

    @Override
    public List<Map<String, Object>> selectValue(Map<String, Object> params, Wrapper<ZukebaozhangxiufuEntity> wrapper) {
        return baseMapper.selectValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params, Wrapper<ZukebaozhangxiufuEntity> wrapper) {
        return baseMapper.selectTimeStatValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectGroup(Map<String, Object> params, Wrapper<ZukebaozhangxiufuEntity> wrapper) {
        return baseMapper.selectGroup(params, wrapper);
    }




}
