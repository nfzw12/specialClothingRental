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

import com.entity.YuezujiedingdanEntity;
import com.entity.view.YuezujiedingdanView;

import com.service.YuezujiedingdanService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 月租借订单
 * 后端接口
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@RestController
@RequestMapping("/yuezujiedingdan")
public class YuezujiedingdanController {
    @Autowired
    private YuezujiedingdanService yuezujiedingdanService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,YuezujiedingdanEntity yuezujiedingdan,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			yuezujiedingdan.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<YuezujiedingdanEntity> ew = new EntityWrapper<YuezujiedingdanEntity>();

		PageUtils page = yuezujiedingdanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, yuezujiedingdan), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,YuezujiedingdanEntity yuezujiedingdan, 
		HttpServletRequest request){
        EntityWrapper<YuezujiedingdanEntity> ew = new EntityWrapper<YuezujiedingdanEntity>();

		PageUtils page = yuezujiedingdanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, yuezujiedingdan), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( YuezujiedingdanEntity yuezujiedingdan){
       	EntityWrapper<YuezujiedingdanEntity> ew = new EntityWrapper<YuezujiedingdanEntity>();
      	ew.allEq(MPUtil.allEQMapPre( yuezujiedingdan, "yuezujiedingdan")); 
        return R.ok().put("data", yuezujiedingdanService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(YuezujiedingdanEntity yuezujiedingdan){
        EntityWrapper< YuezujiedingdanEntity> ew = new EntityWrapper< YuezujiedingdanEntity>();
 		ew.allEq(MPUtil.allEQMapPre( yuezujiedingdan, "yuezujiedingdan")); 
		YuezujiedingdanView yuezujiedingdanView =  yuezujiedingdanService.selectView(ew);
		return R.ok("查询月租借订单成功").put("data", yuezujiedingdanView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        YuezujiedingdanEntity yuezujiedingdan = yuezujiedingdanService.selectById(id);
        return R.ok().put("data", yuezujiedingdan);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        YuezujiedingdanEntity yuezujiedingdan = yuezujiedingdanService.selectById(id);
        return R.ok().put("data", yuezujiedingdan);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody YuezujiedingdanEntity yuezujiedingdan, HttpServletRequest request){
    	yuezujiedingdan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(yuezujiedingdan);
        yuezujiedingdanService.insert(yuezujiedingdan);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody YuezujiedingdanEntity yuezujiedingdan, HttpServletRequest request){
    	yuezujiedingdan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(yuezujiedingdan);
        yuezujiedingdanService.insert(yuezujiedingdan);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody YuezujiedingdanEntity yuezujiedingdan, HttpServletRequest request){
        //ValidatorUtils.validateEntity(yuezujiedingdan);
        yuezujiedingdanService.updateById(yuezujiedingdan);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        yuezujiedingdanService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	









}
