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


import com.dao.YuezujiedingdanDao;
import com.entity.YuezujiedingdanEntity;
import com.service.YuezujiedingdanService;
import com.entity.vo.YuezujiedingdanVO;
import com.entity.view.YuezujiedingdanView;

@Service("yuezujiedingdanService")
public class YuezujiedingdanServiceImpl extends ServiceImpl<YuezujiedingdanDao, YuezujiedingdanEntity> implements YuezujiedingdanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<YuezujiedingdanEntity> page = this.selectPage(
                new Query<YuezujiedingdanEntity>(params).getPage(),
                new EntityWrapper<YuezujiedingdanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<YuezujiedingdanEntity> wrapper) {
		  Page<YuezujiedingdanView> page =new Query<YuezujiedingdanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<YuezujiedingdanVO> selectListVO(Wrapper<YuezujiedingdanEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public YuezujiedingdanVO selectVO(Wrapper<YuezujiedingdanEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<YuezujiedingdanView> selectListView(Wrapper<YuezujiedingdanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public YuezujiedingdanView selectView(Wrapper<YuezujiedingdanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
