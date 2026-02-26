## 问题分析

1. **当前状态**：虽然FuzhuangxinxiDao接口和XML文件中都定义了selectListView方法，但仍然出现"Invalid bound statement (not found)"错误

2. **可能原因**：
   - CommonDao接口中定义了`getFollowByOption2`方法，但在XML文件中没有对应的实现，导致MyBatis初始化失败
   - 项目没有重新编译，之前的修改没有生效
   - MyBatis和MyBatis-Plus的版本兼容性问题

3. **修复方案**：

   ### 步骤1：确保CommonDao.xml中的方法完整实现
   - 检查并确认`getFollowByOption2`方法在CommonDao.xml中有对应的实现
   - 确保所有接口方法都有对应的XML实现

   ### 步骤2：清理并重新编译项目
   - 执行`mvn clean compile`命令，清理旧的编译文件并重新编译
   - 确保所有XML文件都被正确编译到target目录

   ### 步骤3：检查版本兼容性
   - 确认MyBatis和MyBatis-Plus的版本组合兼容
   - 当前使用的版本：
     - mybatis-spring-boot-starter 1.3.2
     - mybatis-plus 2.3
     - mybatisplus-spring-boot-starter 1.0.5

   ### 步骤4：验证修复结果
   - 启动应用，检查是否还有"Invalid bound statement (not found)"错误
   - 测试FuzhuangxinxiDao的selectListView方法是否正常工作

4. **预期结果**：
   - 应用能够正常启动
   - 调用FuzhuangxinxiDao.selectListView方法时不再出现"Invalid bound statement (not found)"错误
   - 所有Mapper接口的方法都能正常调用

5. **风险评估**：
   - 清理并重新编译项目可能需要一些时间
   - 版本调整可能会引入新的依赖冲突
   - 但这些风险都在可控范围内，并且是解决当前问题的必要步骤

现在我需要执行这些修复步骤，以解决"Invalid bound statement (not found): com.dao.FuzhuangxinxiDao.selectListView"问题。