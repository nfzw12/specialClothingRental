package com.dao;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.entity.ClothingSizeEntity;
import java.util.List;
import java.util.Map;

/**
 * 服装尺码表
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface ClothingSizeDao extends BaseMapper<ClothingSizeEntity> {

    /**
     * 根据服装ID查询尺码列表
     * @param clothingId 服装ID
     * @return 尺码列表
     */
    List<ClothingSizeEntity> selectByClothingId(String clothingId);
}