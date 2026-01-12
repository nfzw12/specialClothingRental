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


import com.dao.YuezujiejiesuanDao;
import com.entity.YuezujiejiesuanEntity;
import com.service.YuezujiejiesuanService;
import com.entity.vo.YuezujiejiesuanVO;
import com.entity.view.YuezujiejiesuanView;

@Service("yuezujiejiesuanService")
public class YuezujiejiesuanServiceImpl extends ServiceImpl<YuezujiejiesuanDao, YuezujiejiesuanEntity> implements YuezujiejiesuanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<YuezujiejiesuanEntity> page = this.selectPage(
                new Query<YuezujiejiesuanEntity>(params).getPage(),
                new EntityWrapper<YuezujiejiesuanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<YuezujiejiesuanEntity> wrapper) {
		  Page<YuezujiejiesuanView> page =new Query<YuezujiejiesuanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<YuezujiejiesuanVO> selectListVO(Wrapper<YuezujiejiesuanEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public YuezujiejiesuanVO selectVO(Wrapper<YuezujiejiesuanEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<YuezujiejiesuanView> selectListView(Wrapper<YuezujiejiesuanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public YuezujiejiesuanView selectView(Wrapper<YuezujiejiesuanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

    @Override
    public List<Map<String, Object>> selectValue(Map<String, Object> params, Wrapper<YuezujiejiesuanEntity> wrapper) {
        return baseMapper.selectValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params, Wrapper<YuezujiejiesuanEntity> wrapper) {
        return baseMapper.selectTimeStatValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectGroup(Map<String, Object> params, Wrapper<YuezujiejiesuanEntity> wrapper) {
        return baseMapper.selectGroup(params, wrapper);
    }




}
