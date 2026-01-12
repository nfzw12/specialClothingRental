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


import com.dao.ZujiehetongDao;
import com.entity.ZujiehetongEntity;
import com.service.ZujiehetongService;
import com.entity.vo.ZujiehetongVO;
import com.entity.view.ZujiehetongView;

@Service("zujiehetongService")
public class ZujiehetongServiceImpl extends ServiceImpl<ZujiehetongDao, ZujiehetongEntity> implements ZujiehetongService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ZujiehetongEntity> page = this.selectPage(
                new Query<ZujiehetongEntity>(params).getPage(),
                new EntityWrapper<ZujiehetongEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ZujiehetongEntity> wrapper) {
		  Page<ZujiehetongView> page =new Query<ZujiehetongView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<ZujiehetongVO> selectListVO(Wrapper<ZujiehetongEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public ZujiehetongVO selectVO(Wrapper<ZujiehetongEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<ZujiehetongView> selectListView(Wrapper<ZujiehetongEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ZujiehetongView selectView(Wrapper<ZujiehetongEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
