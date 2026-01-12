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


import com.dao.FuzhuangfenleiDao;
import com.entity.FuzhuangfenleiEntity;
import com.service.FuzhuangfenleiService;
import com.entity.vo.FuzhuangfenleiVO;
import com.entity.view.FuzhuangfenleiView;

@Service("fuzhuangfenleiService")
public class FuzhuangfenleiServiceImpl extends ServiceImpl<FuzhuangfenleiDao, FuzhuangfenleiEntity> implements FuzhuangfenleiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<FuzhuangfenleiEntity> page = this.selectPage(
                new Query<FuzhuangfenleiEntity>(params).getPage(),
                new EntityWrapper<FuzhuangfenleiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<FuzhuangfenleiEntity> wrapper) {
		  Page<FuzhuangfenleiView> page =new Query<FuzhuangfenleiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<FuzhuangfenleiVO> selectListVO(Wrapper<FuzhuangfenleiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public FuzhuangfenleiVO selectVO(Wrapper<FuzhuangfenleiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<FuzhuangfenleiView> selectListView(Wrapper<FuzhuangfenleiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public FuzhuangfenleiView selectView(Wrapper<FuzhuangfenleiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
