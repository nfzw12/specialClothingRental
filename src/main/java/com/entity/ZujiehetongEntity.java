package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 租借合同
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@TableName("zujiehetong")
public class ZujiehetongEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public ZujiehetongEntity() {
		
	}
	
	public ZujiehetongEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 服装名称
	 */
					
	private String fuzhuangmingcheng;
	
	/**
	 * 服装分类
	 */
					
	private String fuzhuangfenlei;
	
	/**
	 * 服装图片
	 */
					
	private String fuzhuangtupian;
	
	/**
	 * 服装尺码
	 */
					
	private String fuzhuangchima;
	
	/**
	 * 服装颜色
	 */
					
	private String fuzhuangyanse;
	
	/**
	 * 服装材料
	 */
					
	private String fuzhuangcailiao;
	
	/**
	 * 月租金
	 */
					
	private String yuezujin;
	
	/**
	 * 日租金
	 */
					
	private String rizujin;
	
	/**
	 * 订金
	 */
					
	private String dingjin;
	
	/**
	 * 租借开始日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date zujiekaishiriqi;
	
	/**
	 * 租借结束日期
	 */
					
	private String zujiejieshuriqi;
	
	/**
	 * 租借详情
	 */
					
	private String zujiexiangqing;
	
	/**
	 * 收租日期
	 */
					
	private String shouzuriqi;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：服装名称
	 */
	public void setFuzhuangmingcheng(String fuzhuangmingcheng) {
		this.fuzhuangmingcheng = fuzhuangmingcheng;
	}
	/**
	 * 获取：服装名称
	 */
	public String getFuzhuangmingcheng() {
		return fuzhuangmingcheng;
	}
	/**
	 * 设置：服装分类
	 */
	public void setFuzhuangfenlei(String fuzhuangfenlei) {
		this.fuzhuangfenlei = fuzhuangfenlei;
	}
	/**
	 * 获取：服装分类
	 */
	public String getFuzhuangfenlei() {
		return fuzhuangfenlei;
	}
	/**
	 * 设置：服装图片
	 */
	public void setFuzhuangtupian(String fuzhuangtupian) {
		this.fuzhuangtupian = fuzhuangtupian;
	}
	/**
	 * 获取：服装图片
	 */
	public String getFuzhuangtupian() {
		return fuzhuangtupian;
	}
	/**
	 * 设置：服装尺码
	 */
	public void setFuzhuangchima(String fuzhuangchima) {
		this.fuzhuangchima = fuzhuangchima;
	}
	/**
	 * 获取：服装尺码
	 */
	public String getFuzhuangchima() {
		return fuzhuangchima;
	}
	/**
	 * 设置：服装颜色
	 */
	public void setFuzhuangyanse(String fuzhuangyanse) {
		this.fuzhuangyanse = fuzhuangyanse;
	}
	/**
	 * 获取：服装颜色
	 */
	public String getFuzhuangyanse() {
		return fuzhuangyanse;
	}
	/**
	 * 设置：服装材料
	 */
	public void setFuzhuangcailiao(String fuzhuangcailiao) {
		this.fuzhuangcailiao = fuzhuangcailiao;
	}
	/**
	 * 获取：服装材料
	 */
	public String getFuzhuangcailiao() {
		return fuzhuangcailiao;
	}
	/**
	 * 设置：月租金
	 */
	public void setYuezujin(String yuezujin) {
		this.yuezujin = yuezujin;
	}
	/**
	 * 获取：月租金
	 */
	public String getYuezujin() {
		return yuezujin;
	}
	/**
	 * 设置：日租金
	 */
	public void setRizujin(String rizujin) {
		this.rizujin = rizujin;
	}
	/**
	 * 获取：日租金
	 */
	public String getRizujin() {
		return rizujin;
	}
	/**
	 * 设置：订金
	 */
	public void setDingjin(String dingjin) {
		this.dingjin = dingjin;
	}
	/**
	 * 获取：订金
	 */
	public String getDingjin() {
		return dingjin;
	}
	/**
	 * 设置：租借开始日期
	 */
	public void setZujiekaishiriqi(Date zujiekaishiriqi) {
		this.zujiekaishiriqi = zujiekaishiriqi;
	}
	/**
	 * 获取：租借开始日期
	 */
	public Date getZujiekaishiriqi() {
		return zujiekaishiriqi;
	}
	/**
	 * 设置：租借结束日期
	 */
	public void setZujiejieshuriqi(String zujiejieshuriqi) {
		this.zujiejieshuriqi = zujiejieshuriqi;
	}
	/**
	 * 获取：租借结束日期
	 */
	public String getZujiejieshuriqi() {
		return zujiejieshuriqi;
	}
	/**
	 * 设置：租借详情
	 */
	public void setZujiexiangqing(String zujiexiangqing) {
		this.zujiexiangqing = zujiexiangqing;
	}
	/**
	 * 获取：租借详情
	 */
	public String getZujiexiangqing() {
		return zujiexiangqing;
	}
	/**
	 * 设置：收租日期
	 */
	public void setShouzuriqi(String shouzuriqi) {
		this.shouzuriqi = shouzuriqi;
	}
	/**
	 * 获取：收租日期
	 */
	public String getShouzuriqi() {
		return shouzuriqi;
	}

}
