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

import com.entity.FuzhuangfenleiEntity;
import com.entity.view.FuzhuangfenleiView;

import com.service.FuzhuangfenleiService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 服装分类
 * 后端接口
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@RestController
@RequestMapping("/fuzhuangfenlei")
public class FuzhuangfenleiController {
    @Autowired
    private FuzhuangfenleiService fuzhuangfenleiService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,FuzhuangfenleiEntity fuzhuangfenlei,
		HttpServletRequest request){
        EntityWrapper<FuzhuangfenleiEntity> ew = new EntityWrapper<FuzhuangfenleiEntity>();

		PageUtils page = fuzhuangfenleiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, fuzhuangfenlei), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,FuzhuangfenleiEntity fuzhuangfenlei, 
		HttpServletRequest request){
        EntityWrapper<FuzhuangfenleiEntity> ew = new EntityWrapper<FuzhuangfenleiEntity>();

		PageUtils page = fuzhuangfenleiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, fuzhuangfenlei), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( FuzhuangfenleiEntity fuzhuangfenlei){
       	EntityWrapper<FuzhuangfenleiEntity> ew = new EntityWrapper<FuzhuangfenleiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( fuzhuangfenlei, "fuzhuangfenlei")); 
        return R.ok().put("data", fuzhuangfenleiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(FuzhuangfenleiEntity fuzhuangfenlei){
        EntityWrapper< FuzhuangfenleiEntity> ew = new EntityWrapper< FuzhuangfenleiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( fuzhuangfenlei, "fuzhuangfenlei")); 
		FuzhuangfenleiView fuzhuangfenleiView =  fuzhuangfenleiService.selectView(ew);
		return R.ok("查询服装分类成功").put("data", fuzhuangfenleiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        FuzhuangfenleiEntity fuzhuangfenlei = fuzhuangfenleiService.selectById(id);
        return R.ok().put("data", fuzhuangfenlei);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        FuzhuangfenleiEntity fuzhuangfenlei = fuzhuangfenleiService.selectById(id);
        return R.ok().put("data", fuzhuangfenlei);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody FuzhuangfenleiEntity fuzhuangfenlei, HttpServletRequest request){
    	fuzhuangfenlei.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(fuzhuangfenlei);
        fuzhuangfenleiService.insert(fuzhuangfenlei);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody FuzhuangfenleiEntity fuzhuangfenlei, HttpServletRequest request){
    	fuzhuangfenlei.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(fuzhuangfenlei);
        fuzhuangfenleiService.insert(fuzhuangfenlei);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody FuzhuangfenleiEntity fuzhuangfenlei, HttpServletRequest request){
        //ValidatorUtils.validateEntity(fuzhuangfenlei);
        fuzhuangfenleiService.updateById(fuzhuangfenlei);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        fuzhuangfenleiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	









}
