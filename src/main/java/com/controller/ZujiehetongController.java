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

import com.entity.ZujiehetongEntity;
import com.entity.view.ZujiehetongView;

import com.service.ZujiehetongService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 租借合同
 * 后端接口
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@RestController
@RequestMapping("/zujiehetong")
public class ZujiehetongController {
    @Autowired
    private ZujiehetongService zujiehetongService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ZujiehetongEntity zujiehetong,
		HttpServletRequest request){
        EntityWrapper<ZujiehetongEntity> ew = new EntityWrapper<ZujiehetongEntity>();

		PageUtils page = zujiehetongService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, zujiehetong), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ZujiehetongEntity zujiehetong, 
		HttpServletRequest request){
        EntityWrapper<ZujiehetongEntity> ew = new EntityWrapper<ZujiehetongEntity>();

		PageUtils page = zujiehetongService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, zujiehetong), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ZujiehetongEntity zujiehetong){
       	EntityWrapper<ZujiehetongEntity> ew = new EntityWrapper<ZujiehetongEntity>();
      	ew.allEq(MPUtil.allEQMapPre( zujiehetong, "zujiehetong")); 
        return R.ok().put("data", zujiehetongService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ZujiehetongEntity zujiehetong){
        EntityWrapper< ZujiehetongEntity> ew = new EntityWrapper< ZujiehetongEntity>();
 		ew.allEq(MPUtil.allEQMapPre( zujiehetong, "zujiehetong")); 
		ZujiehetongView zujiehetongView =  zujiehetongService.selectView(ew);
		return R.ok("查询租借合同成功").put("data", zujiehetongView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ZujiehetongEntity zujiehetong = zujiehetongService.selectById(id);
        return R.ok().put("data", zujiehetong);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ZujiehetongEntity zujiehetong = zujiehetongService.selectById(id);
        return R.ok().put("data", zujiehetong);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ZujiehetongEntity zujiehetong, HttpServletRequest request){
    	zujiehetong.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(zujiehetong);
        zujiehetongService.insert(zujiehetong);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ZujiehetongEntity zujiehetong, HttpServletRequest request){
    	zujiehetong.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(zujiehetong);
        zujiehetongService.insert(zujiehetong);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ZujiehetongEntity zujiehetong, HttpServletRequest request){
        //ValidatorUtils.validateEntity(zujiehetong);
        zujiehetongService.updateById(zujiehetong);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        zujiehetongService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	









}
