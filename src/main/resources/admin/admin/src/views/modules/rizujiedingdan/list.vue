<template>
	<div class="main-content" :style='{"padding":"30px","backgroundAttachment":"fixed","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230312/52c1bcab43064c72aa492e0f342d2666.jpg)","flexDirection":"row-reverse","display":"flex","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"calc(100vh - 120px)"}'>
		<!-- 列表页 -->
		<template v-if="showFlag">
			<el-form class="center-form-pv" :style='{"border":"1px solid #6F6F97","width":"140px","padding":"5px","margin":"0 0 20px 10px","background":"rgba(255,255,255,.8)"}' :inline="true" :model="searchForm">
				<el-row :style='{"flexDirection":"column","display":"flex"}' >
					<div :style='{"margin":"0","flexDirection":"column","display":"flex"}'>
						<label :style='{"margin":"0 10px 0 0","color":"#000","textAlign":"center","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">订单编号</label>
						<el-input v-model="searchForm.dingdanbianhao" placeholder="订单编号" clearable></el-input>
					</div>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0","boxShadow":"0px 2px 6px 0px rgba(0,0,0,0.3020)","outline":"none","margin":"6px 0 0","color":"#fff","borderRadius":"30px","background":"#67D4B2","width":"100%","fontSize":"14px","height":"40px"}' type="success" @click="search()">查询</el-button>
				</el-row>

				<el-row :style='{"margin":"20px 0","flexDirection":"column","display":"flex"}'>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0","boxShadow":"0px 2px 6px 0px rgba(0,0,0,0.3020)","margin":"0 0 10px","outline":"none","color":"#fff","borderRadius":"30px","background":"#67D4B2","width":"100%","fontSize":"14px","height":"40px"}' v-if="isAuth('rizujiedingdan','新增')" type="success" @click="addOrUpdateHandler()">新增</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0","boxShadow":"0px 2px 6px 0px rgba(0,0,0,0.3020)","margin":"0 0 10px","outline":"none","color":"#fff","borderRadius":"30px","background":"#67D4B2","width":"100%","fontSize":"14px","height":"40px"}' v-if="isAuth('rizujiedingdan','删除')" :disabled="dataListSelections.length <= 0" type="danger" @click="deleteHandler()">删除</el-button>
				</el-row>
			</el-form>
			
			<el-table class="tables"
				:stripe='false'
				:style='{"padding":"0","borderColor":"#6F6F97","borderWidth":"1px","background":"#fff","flex":"1","width":"calc(100% - 140px)","borderStyle":"solid","height":"fit-content"}' 
				v-if="isAuth('rizujiedingdan','查看')"
				:data="dataList"
				v-loading="dataListLoading"
			@selection-change="selectionChangeHandler">
				<el-table-column :resizable='true' type="selection" align="center" width="50"></el-table-column>
				<el-table-column :resizable='true' :sortable='true' label="序号" type="index" width="50" />
				<el-table-column :resizable='true' :sortable='true'  
					prop="dingdanbianhao" 
				label="订单编号">
					<template slot-scope="scope">
						{{scope.row.dingdanbianhao}}
					</template>
				</el-table-column>
				<el-table-column :resizable='true' :sortable='true'  
					prop="fuzhuangmingcheng" 
				label="服装名称">
					<template slot-scope="scope">
						{{scope.row.fuzhuangmingcheng}}
					</template>
				</el-table-column>
				<el-table-column :resizable='true' :sortable='true'  
					prop="yonghuzhanghao" 
				label="用户账号">
					<template slot-scope="scope">
						{{scope.row.yonghuzhanghao}}
					</template>
				</el-table-column>
				<el-table-column :resizable='true' :sortable='true'  
					prop="zujin" 
				label="日租金">
					<template slot-scope="scope">
						{{scope.row.zujin}}
					</template>
				</el-table-column>
				<el-table-column width="300" label="操作">
					<template slot-scope="scope">
						<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 10px 4px 0","outline":"none","color":"#000","borderRadius":"30px","background":"#E4E4E4","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('rizujiedingdan','查看')" type="success" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">详情</el-button>
						<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 10px 4px 0","outline":"none","color":"#000","borderRadius":"30px","background":"#E4E4E4","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('rizujiedingdan','修改')" type="primary" size="mini" @click="addOrUpdateHandler(scope.row.id)">修改</el-button>
						<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 10px 4px 0","outline":"none","color":"#000","borderRadius":"30px","background":"#E4E4E4","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('rizujiedingdan','删除') " type="danger" size="mini" @click="deleteHandler(scope.row.id)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				@size-change="sizeChangeHandle"
				@current-change="currentChangeHandle"
				:current-page="pageIndex"
				background
				:page-sizes="[10, 20, 30, 50]"
				:page-size="pageSize"
				:layout="layouts.join()"
				:total="totalPage"
				prev-text="<"
				next-text=">"
				:hide-on-single-page="false"
				:style='{"padding":"0","margin":"20px 0","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","fontWeight":"500"}'
			></el-pagination>
		</template>
		
		<!-- 添加/修改页面  将父组件的search方法传递给子组件-->
		<add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>
	</div>
</template>

<script>
import AddOrUpdate from "./add-or-update";
export default {
  data() {
    return {
      searchForm: {
        key: ""
      },
      form:{},
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      showFlag: true,
      sfshVisiable: false,
      shForm: {},
      chartVisiable: false,
      chartVisiable1: false,
      chartVisiable2: false,
      chartVisiable3: false,
      chartVisiable4: false,
      chartVisiable5: false,
      addOrUpdateFlag:false,
      layouts: ["total","prev","pager","next","sizes","jumper"],
    };
  },
  created() {
    this.init();
    this.getDataList();
    this.contentStyleChange()
  },
  mounted() {
  },
  filters: {
    htmlfilter: function (val) {
      return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
    }
  },
  components: {
    AddOrUpdate,
  },
  methods: {
    contentStyleChange() {
      this.contentPageStyleChange()
    },
    contentPageStyleChange(){
      let arr = []
    },
    init () {
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },
    getDataList() {
      this.dataListLoading = true;
      this.$http({
        url: "rizujiedingdan/list",
        method: "get",
        params: {
          page: this.pageIndex,
          limit: this.pageSize,
          key: this.searchForm.key
        }
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.list;
          this.totalPage = data.data.total;
        }
        this.dataListLoading = false;
      });
    },
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    addOrUpdateHandler(id,info) {
      this.addOrUpdateFlag = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,info);
      });
    },
    deleteHandler(id) {
      var ids = id ? [id] : this.dataListSelections.map(item => item.id);
      this.$confirm(`确定要删除选中的记录吗？共 ${ids.length} 条`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: "rizujiedingdan/delete",
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message.success(data.msg);
            this.getDataList();
          } else {
            this.$message.error(data.msg);
          }
        });
      }).catch(() => {
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-content .el-pagination ::v-deep .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}

	.main-content .el-pagination ::v-deep .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}

	.main-content .el-pagination ::v-deep .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}

	.main-content .el-pagination ::v-deep .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}

	.main-content .el-pagination ::v-deep .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}

	.main-content .el-pagination ::v-deep .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}

	.main-content .el-pagination ::v-deep .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}

	.main-content .el-pagination ::v-deep .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
</style>