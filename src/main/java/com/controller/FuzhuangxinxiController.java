package com.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.FuzhuangxinxiEntity;
import com.entity.ClothingSizeEntity;
import com.entity.view.FuzhuangxinxiView;

import com.service.FuzhuangxinxiService;
import com.service.TokenService;
import com.service.ClothingSizeService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 服装信息
 * 后端接口
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@RestController
@RequestMapping("/fuzhuangxinxi")
public class FuzhuangxinxiController {
    @Autowired
    private FuzhuangxinxiService fuzhuangxinxiService;
    
    @Autowired
    private ClothingSizeService clothingSizeService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,FuzhuangxinxiEntity fuzhuangxinxi,
		HttpServletRequest request){
        EntityWrapper<FuzhuangxinxiEntity> ew = new EntityWrapper<FuzhuangxinxiEntity>();

		PageUtils page = fuzhuangxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, fuzhuangxinxi), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,FuzhuangxinxiEntity fuzhuangxinxi, 
		HttpServletRequest request){
        EntityWrapper<FuzhuangxinxiEntity> ew = new EntityWrapper<FuzhuangxinxiEntity>();

		PageUtils page = fuzhuangxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, fuzhuangxinxi), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( FuzhuangxinxiEntity fuzhuangxinxi){
       	EntityWrapper<FuzhuangxinxiEntity> ew = new EntityWrapper<FuzhuangxinxiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( fuzhuangxinxi, "fuzhuangxinxi")); 
        return R.ok().put("data", fuzhuangxinxiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(FuzhuangxinxiEntity fuzhuangxinxi){
        EntityWrapper< FuzhuangxinxiEntity> ew = new EntityWrapper< FuzhuangxinxiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( fuzhuangxinxi, "fuzhuangxinxi")); 
		FuzhuangxinxiView fuzhuangxinxiView =  fuzhuangxinxiService.selectView(ew);
		return R.ok("查询服装信息成功").put("data", fuzhuangxinxiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        FuzhuangxinxiEntity fuzhuangxinxi = fuzhuangxinxiService.selectById(id);
        return R.ok().put("data", fuzhuangxinxi);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        FuzhuangxinxiEntity fuzhuangxinxi = fuzhuangxinxiService.selectById(id);
        // 查询服装尺码信息
        List<ClothingSizeEntity> sizes = clothingSizeService.selectByClothingId(fuzhuangxinxi.getId().toString());
        return R.ok().put("data", fuzhuangxinxi).put("sizes", sizes);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody FuzhuangxinxiEntity fuzhuangxinxi, HttpServletRequest request){
    	// 使用UUID生成唯一ID，避免重复
    	fuzhuangxinxi.setId(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);
    	//ValidatorUtils.validateEntity(fuzhuangxinxi);
        fuzhuangxinxiService.insert(fuzhuangxinxi);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody FuzhuangxinxiEntity fuzhuangxinxi, HttpServletRequest request){
    	// 使用UUID生成唯一ID，避免重复
    	fuzhuangxinxi.setId(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);
    	//ValidatorUtils.validateEntity(fuzhuangxinxi);
        fuzhuangxinxiService.insert(fuzhuangxinxi);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody FuzhuangxinxiEntity fuzhuangxinxi, HttpServletRequest request){
        //ValidatorUtils.validateEntity(fuzhuangxinxi);
        fuzhuangxinxiService.updateById(fuzhuangxinxi);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        fuzhuangxinxiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	









}
