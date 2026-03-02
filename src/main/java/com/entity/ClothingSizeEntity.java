package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;

/**
 * 服装尺码表
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@TableName("clothing_size")
public class ClothingSizeEntity {
    /**
     * 主键ID（自增）
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    /**
     * 服装唯一标识（如货号）
     */
    private String clothingId;
    /**
     * 服装名称
     */
    private String clothingName;
    /**
     * 尺码（如S/M/L/XL/2XL）
     */
    private String size;
    /**
     * 库存数量（默认0，非负）
     */
    private Integer qty;

    /**
     * 设置：主键ID（自增）
     */
    public void setId(Long id) {
        this.id = id;
    }
    /**
     * 获取：主键ID（自增）
     */
    public Long getId() {
        return id;
    }
    /**
     * 设置：服装唯一标识（如货号）
     */
    public void setClothingId(String clothingId) {
        this.clothingId = clothingId;
    }
    /**
     * 获取：服装唯一标识（如货号）
     */
    public String getClothingId() {
        return clothingId;
    }
    /**
     * 设置：服装名称
     */
    public void setClothingName(String clothingName) {
        this.clothingName = clothingName;
    }
    /**
     * 获取：服装名称
     */
    public String getClothingName() {
        return clothingName;
    }
    /**
     * 设置：尺码（如S/M/L/XL/2XL）
     */
    public void setSize(String size) {
        this.size = size;
    }
    /**
     * 获取：尺码（如S/M/L/XL/2XL）
     */
    public String getSize() {
        return size;
    }
    /**
     * 设置：库存数量（默认0，非负）
     */
    public void setQty(Integer qty) {
        this.qty = qty;
    }
    /**
     * 获取：库存数量（默认0，非负）
     */
    public Integer getQty() {
        return qty;
    }
}