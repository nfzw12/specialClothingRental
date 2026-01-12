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


import com.dao.RizujiedingdanDao;
import com.entity.RizujiedingdanEntity;
import com.service.RizujiedingdanService;
import com.entity.vo.RizujiedingdanVO;
import com.entity.view.RizujiedingdanView;

@Service("rizujiedingdanService")
public class RizujiedingdanServiceImpl extends ServiceImpl<RizujiedingdanDao, RizujiedingdanEntity> implements RizujiedingdanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<RizujiedingdanEntity> page = this.selectPage(
                new Query<RizujiedingdanEntity>(params).getPage(),
                new EntityWrapper<RizujiedingdanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<RizujiedingdanEntity> wrapper) {
		  Page<RizujiedingdanView> page =new Query<RizujiedingdanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<RizujiedingdanVO> selectListVO(Wrapper<RizujiedingdanEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public RizujiedingdanVO selectVO(Wrapper<RizujiedingdanEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<RizujiedingdanView> selectListView(Wrapper<RizujiedingdanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public RizujiedingdanView selectView(Wrapper<RizujiedingdanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

    @Override
    public List<Map<String, Object>> selectValue(Map<String, Object> params, Wrapper<RizujiedingdanEntity> wrapper) {
        return baseMapper.selectValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params, Wrapper<RizujiedingdanEntity> wrapper) {
        return baseMapper.selectTimeStatValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectGroup(Map<String, Object> params, Wrapper<RizujiedingdanEntity> wrapper) {
        return baseMapper.selectGroup(params, wrapper);
    }




}
