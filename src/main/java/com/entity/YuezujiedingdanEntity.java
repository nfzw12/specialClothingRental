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
 * 月租借订单
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@TableName("yuezujiedingdan")
public class YuezujiedingdanEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public YuezujiedingdanEntity() {
		
	}
	
	public YuezujiedingdanEntity(T t) {
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
	 * 订单编号
	 */
					
	private String dingdanbianhao;
	
	/**
	 * 服装名称
	 */
					
	private String fuzhuangmingcheng;
	
	/**
	 * 服装图片
	 */
					
	private String fuzhuangtupian;
	
	/**
	 * 服装分类
	 */
					
	private String fuzhuangfenlei;
	
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
	 * 租借时长(月)
	 */
					
	private String yuezujieshizhang;
	
	/**
	 * 租借日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date zujieriqi;
	
	/**
	 * 订金
	 */
					
	private String dingjin;
	
	/**
	 * 收租日期
	 */
					
	private String shouzuriqi;
	
	/**
	 * 租借备注
	 */
					
	private String zujiebeizhu;
	
	/**
	 * 用户账号
	 */
					
	private String yonghuzhanghao;
	
	/**
	 * 用户姓名
	 */
					
	private String yonghuxingming;
	
	/**
	 * 手机
	 */
					
	private String shouji;
	
	/**
	 * 是否支付
	 */
					
	private String ispay;
	
	
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
	 * 设置：订单编号
	 */
	public void setDingdanbianhao(String dingdanbianhao) {
		this.dingdanbianhao = dingdanbianhao;
	}
	/**
	 * 获取：订单编号
	 */
	public String getDingdanbianhao() {
		return dingdanbianhao;
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
	 * 设置：租借时长(月)
	 */
	public void setYuezujieshizhang(String yuezujieshizhang) {
		this.yuezujieshizhang = yuezujieshizhang;
	}
	/**
	 * 获取：租借时长(月)
	 */
	public String getYuezujieshizhang() {
		return yuezujieshizhang;
	}
	/**
	 * 设置：租借日期
	 */
	public void setZujieriqi(Date zujieriqi) {
		this.zujieriqi = zujieriqi;
	}
	/**
	 * 获取：租借日期
	 */
	public Date getZujieriqi() {
		return zujieriqi;
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
	/**
	 * 设置：租借备注
	 */
	public void setZujiebeizhu(String zujiebeizhu) {
		this.zujiebeizhu = zujiebeizhu;
	}
	/**
	 * 获取：租借备注
	 */
	public String getZujiebeizhu() {
		return zujiebeizhu;
	}
	/**
	 * 设置：用户账号
	 */
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
	/**
	 * 设置：用户姓名
	 */
	public void setYonghuxingming(String yonghuxingming) {
		this.yonghuxingming = yonghuxingming;
	}
	/**
	 * 获取：用户姓名
	 */
	public String getYonghuxingming() {
		return yonghuxingming;
	}
	/**
	 * 设置：手机
	 */
	public void setShouji(String shouji) {
		this.shouji = shouji;
	}
	/**
	 * 获取：手机
	 */
	public String getShouji() {
		return shouji;
	}
	/**
	 * 设置：是否支付
	 */
	public void setIspay(String ispay) {
		this.ispay = ispay;
	}
	/**
	 * 获取：是否支付
	 */
	public String getIspay() {
		return ispay;
	}

}
