package com.service;

import com.baomidou.mybatisplus.service.IService;
import com.entity.ClothingSizeEntity;
import java.util.List;

/**
 * 服装尺码表
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
public interface ClothingSizeService extends IService<ClothingSizeEntity> {

    /**
     * 根据服装ID查询尺码列表
     * @param clothingId 服装ID
     * @return 尺码列表
     */
    List<ClothingSizeEntity> selectByClothingId(String clothingId);
}