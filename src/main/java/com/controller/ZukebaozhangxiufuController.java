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

import com.entity.ZukebaozhangxiufuEntity;
import com.entity.view.ZukebaozhangxiufuView;

import com.service.ZukebaozhangxiufuService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 租客保障修复
 * 后端接口
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@RestController
@RequestMapping("/zukebaozhangxiufu")
public class ZukebaozhangxiufuController {
    @Autowired
    private ZukebaozhangxiufuService zukebaozhangxiufuService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ZukebaozhangxiufuEntity zukebaozhangxiufu,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			zukebaozhangxiufu.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<ZukebaozhangxiufuEntity> ew = new EntityWrapper<ZukebaozhangxiufuEntity>();

		PageUtils page = zukebaozhangxiufuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, zukebaozhangxiufu), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ZukebaozhangxiufuEntity zukebaozhangxiufu, 
		HttpServletRequest request){
        EntityWrapper<ZukebaozhangxiufuEntity> ew = new EntityWrapper<ZukebaozhangxiufuEntity>();

		PageUtils page = zukebaozhangxiufuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, zukebaozhangxiufu), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ZukebaozhangxiufuEntity zukebaozhangxiufu){
       	EntityWrapper<ZukebaozhangxiufuEntity> ew = new EntityWrapper<ZukebaozhangxiufuEntity>();
      	ew.allEq(MPUtil.allEQMapPre( zukebaozhangxiufu, "zukebaozhangxiufu")); 
        return R.ok().put("data", zukebaozhangxiufuService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ZukebaozhangxiufuEntity zukebaozhangxiufu){
        EntityWrapper< ZukebaozhangxiufuEntity> ew = new EntityWrapper< ZukebaozhangxiufuEntity>();
 		ew.allEq(MPUtil.allEQMapPre( zukebaozhangxiufu, "zukebaozhangxiufu")); 
		ZukebaozhangxiufuView zukebaozhangxiufuView =  zukebaozhangxiufuService.selectView(ew);
		return R.ok("查询租客保障修复成功").put("data", zukebaozhangxiufuView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ZukebaozhangxiufuEntity zukebaozhangxiufu = zukebaozhangxiufuService.selectById(id);
        return R.ok().put("data", zukebaozhangxiufu);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ZukebaozhangxiufuEntity zukebaozhangxiufu = zukebaozhangxiufuService.selectById(id);
        return R.ok().put("data", zukebaozhangxiufu);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ZukebaozhangxiufuEntity zukebaozhangxiufu, HttpServletRequest request){
    	// 使用UUID生成唯一ID，避免重复
    	zukebaozhangxiufu.setId(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);
    	//ValidatorUtils.validateEntity(zukebaozhangxiufu);
        zukebaozhangxiufuService.insert(zukebaozhangxiufu);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ZukebaozhangxiufuEntity zukebaozhangxiufu, HttpServletRequest request){
    	// 使用UUID生成唯一ID，避免重复
    	zukebaozhangxiufu.setId(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);
    	//ValidatorUtils.validateEntity(zukebaozhangxiufu);
        zukebaozhangxiufuService.insert(zukebaozhangxiufu);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ZukebaozhangxiufuEntity zukebaozhangxiufu, HttpServletRequest request){
        //ValidatorUtils.validateEntity(zukebaozhangxiufu);
        zukebaozhangxiufuService.updateById(zukebaozhangxiufu);//全部更新
        return R.ok();
    }

    /**
     * 审核
     */
    @RequestMapping("/shBatch")
    @Transactional
    public R update(@RequestBody Long[] ids, @RequestParam String sfsh, @RequestParam String shhf){
        List<ZukebaozhangxiufuEntity> list = new ArrayList<ZukebaozhangxiufuEntity>();
        for(Long id : ids) {
            ZukebaozhangxiufuEntity zukebaozhangxiufu = zukebaozhangxiufuService.selectById(id);
            zukebaozhangxiufu.setSfsh(sfsh);
            zukebaozhangxiufu.setShhf(shhf);
            list.add(zukebaozhangxiufu);
        }
        zukebaozhangxiufuService.updateBatchById(list);
        return R.ok();
    }


    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        zukebaozhangxiufuService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	






    /**
     * （按值统计）
     */
    @RequestMapping("/value/{xColumnName}/{yColumnName}")
    public R value(@PathVariable("yColumnName") String yColumnName, @PathVariable("xColumnName") String xColumnName,HttpServletRequest request) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("xColumn", xColumnName);
        params.put("yColumn", yColumnName);
        EntityWrapper<ZukebaozhangxiufuEntity> ew = new EntityWrapper<ZukebaozhangxiufuEntity>();
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
            ew.eq("yonghuzhanghao", (String)request.getSession().getAttribute("username"));
		}
        List<Map<String, Object>> result = zukebaozhangxiufuService.selectValue(params, ew);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for(Map<String, Object> m : result) {
            for(String k : m.keySet()) {
                if(m.get(k) instanceof Date) {
                    m.put(k, sdf.format((Date)m.get(k)));
                }
            }
        }
        return R.ok().put("data", result);
    }

    /**
     * （按值统计(多)）
     */
    @RequestMapping("/valueMul/{xColumnName}")
    public R valueMul(@PathVariable("xColumnName") String xColumnName,@RequestParam String yColumnNameMul, HttpServletRequest request) {
        String[] yColumnNames = yColumnNameMul.split(",");
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("xColumn", xColumnName);
        List<List<Map<String, Object>>> result2 = new ArrayList<List<Map<String,Object>>>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        EntityWrapper<ZukebaozhangxiufuEntity> ew = new EntityWrapper<ZukebaozhangxiufuEntity>();
        String tableName = request.getSession().getAttribute("tableName").toString();
        if(tableName.equals("yonghu")) {
            ew.eq("yonghuzhanghao", (String)request.getSession().getAttribute("username"));
        }
        for(int i=0;i<yColumnNames.length;i++) {
            params.put("yColumn", yColumnNames[i]);
            List<Map<String, Object>> result = zukebaozhangxiufuService.selectValue(params, ew);
            for(Map<String, Object> m : result) {
                for(String k : m.keySet()) {
                    if(m.get(k) instanceof Date) {
                        m.put(k, sdf.format((Date)m.get(k)));
                    }
                }
            }
            result2.add(result);
        }
        return R.ok().put("data", result2);
    }

    /**
     * （按值统计）时间统计类型
     */
    @RequestMapping("/value/{xColumnName}/{yColumnName}/{timeStatType}")
    public R valueDay(@PathVariable("yColumnName") String yColumnName, @PathVariable("xColumnName") String xColumnName, @PathVariable("timeStatType") String timeStatType,HttpServletRequest request) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("xColumn", xColumnName);
        params.put("yColumn", yColumnName);
        params.put("timeStatType", timeStatType);
        EntityWrapper<ZukebaozhangxiufuEntity> ew = new EntityWrapper<ZukebaozhangxiufuEntity>();
        String tableName = request.getSession().getAttribute("tableName").toString();
        if(tableName.equals("yonghu")) {
            ew.eq("yonghuzhanghao", (String)request.getSession().getAttribute("username"));
        }
        List<Map<String, Object>> result = zukebaozhangxiufuService.selectTimeStatValue(params, ew);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for(Map<String, Object> m : result) {
            for(String k : m.keySet()) {
                if(m.get(k) instanceof Date) {
                    m.put(k, sdf.format((Date)m.get(k)));
                }
            }
        }
        return R.ok().put("data", result);
    }

    /**
     * （按值统计）时间统计类型(多)
     */
    @RequestMapping("/valueMul/{xColumnName}/{timeStatType}")
    public R valueMulDay(@PathVariable("xColumnName") String xColumnName, @PathVariable("timeStatType") String timeStatType,@RequestParam String yColumnNameMul,HttpServletRequest request) {
        String[] yColumnNames = yColumnNameMul.split(",");
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("xColumn", xColumnName);
        params.put("timeStatType", timeStatType);
        List<List<Map<String, Object>>> result2 = new ArrayList<List<Map<String,Object>>>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        EntityWrapper<ZukebaozhangxiufuEntity> ew = new EntityWrapper<ZukebaozhangxiufuEntity>();
        String tableName = request.getSession().getAttribute("tableName").toString();
        if(tableName.equals("yonghu")) {
            ew.eq("yonghuzhanghao", (String)request.getSession().getAttribute("username"));
        }
        for(int i=0;i<yColumnNames.length;i++) {
            params.put("yColumn", yColumnNames[i]);
            List<Map<String, Object>> result = zukebaozhangxiufuService.selectTimeStatValue(params, ew);
            for(Map<String, Object> m : result) {
                for(String k : m.keySet()) {
                    if(m.get(k) instanceof Date) {
                        m.put(k, sdf.format((Date)m.get(k)));
                    }
                }
            }
            result2.add(result);
        }
        return R.ok().put("data", result2);
    }

    /**
     * 分组统计
     */
    @RequestMapping("/group/{columnName}")
    public R group(@PathVariable("columnName") String columnName,HttpServletRequest request) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("column", columnName);
        EntityWrapper<ZukebaozhangxiufuEntity> ew = new EntityWrapper<ZukebaozhangxiufuEntity>();
        String tableName = request.getSession().getAttribute("tableName").toString();
        if(tableName.equals("yonghu")) {
            ew.eq("yonghuzhanghao", (String)request.getSession().getAttribute("username"));
        }
        List<Map<String, Object>> result = zukebaozhangxiufuService.selectGroup(params, ew);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for(Map<String, Object> m : result) {
            for(String k : m.keySet()) {
                if(m.get(k) instanceof Date) {
                    m.put(k, sdf.format((Date)m.get(k)));
                }
            }
        }
        return R.ok().put("data", result);
    }






}
