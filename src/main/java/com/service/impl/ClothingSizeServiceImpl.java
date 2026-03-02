package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;

import com.dao.ClothingSizeDao;
import com.entity.ClothingSizeEntity;
import com.service.ClothingSizeService;

/**
 * 服装尺码表
 * @author 
 * @email 
 * @date 2023-06-28 20:45:21
 */
@Service("clothingSizeService")
public class ClothingSizeServiceImpl extends ServiceImpl<ClothingSizeDao, ClothingSizeEntity> implements ClothingSizeService {

    @Override
    public List<ClothingSizeEntity> selectByClothingId(String clothingId) {
        return baseMapper.selectByClothingId(clothingId);
    }
}