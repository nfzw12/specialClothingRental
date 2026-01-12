<template>
<div>
	<div :style='{"padding":"20px ","margin":"10px auto","borderRadius":"0","backgroundImage":"url(http://codegen.caihongy.cn/20220913/2bf17b548cd84ca7bbb24fad3ba725f3.png)","width":"1000px","backgroundSize":"100% 100%","height":"100px"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"width":"100%","margin":"0 0 0 -40px","fontSize":"16px","lineHeight":"30px","justifyContent":"center","display":"flex"}'>
			<el-breadcrumb-item>首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in breadcrumbItem" :key="index">{{item.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="detail-preview" :style='{"width":"1000px","margin":"10px auto","position":"relative"}'>
		<div class="attr" :style='{"minHeight":"680px","padding":"20px","position":"relative","flexDirection":"row-reverse","display":"flex"}'>
			<el-carousel :style='{"width":"351px","margin":"0 10px 0 0","height":"600px"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="550px" :autoplay="true" :interval="3000" :loop="true">
				<el-carousel-item :style='{"border":"8px solid #71CD96","width":"100%","borderRadius":"40px","height":"600px"}' v-for="item in detailBanner" :key="item.id">
					<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' v-if="item.substr(0,4)=='http'" :src="item" fit="cover" class="image"></el-image>
					<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' v-else :src="baseUrl + item" fit="cover" class="image"></el-image>
				</el-carousel-item>
			</el-carousel>
	
			
			<div class="info" :style='{"width":"640px","padding":"10px","margin":"0 20px 0 0","background":"rgba(245, 245, 245, 1)"}'>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#f5f5f5","justifyContent":"space-between","display":"flex"}'>
					<div :style='{"color":"#333","fontSize":"16px"}'>
                    {{detail.fuzhuangmingcheng}}
                    </div>
				</div>

				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"#f5f5f5","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#333","textAlign":"right","width":"122px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>订单编号</div>
					<div  :style='{"padding":"0 10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","color":"#666","background":"#fff","width":"400px","fontSize":"14px","lineHeight":"40px"}'>{{detail.dingdanbianhao}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"#f5f5f5","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#333","textAlign":"right","width":"122px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>报修名称</div>
					<div  :style='{"padding":"0 10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","color":"#666","background":"#fff","width":"400px","fontSize":"14px","lineHeight":"40px"}'>{{detail.baoxiumingcheng}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"#f5f5f5","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#333","textAlign":"right","width":"122px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>报修价格</div>
					<div  :style='{"padding":"0 10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","color":"#666","background":"#fff","width":"400px","fontSize":"14px","lineHeight":"40px"}'>{{detail.baoxiujiage}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"#f5f5f5","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#333","textAlign":"right","width":"122px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>报修日期</div>
					<div  :style='{"padding":"0 10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","color":"#666","background":"#fff","width":"400px","fontSize":"14px","lineHeight":"40px"}'>{{detail.baoxiuriqi}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"#f5f5f5","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#333","textAlign":"right","width":"122px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>用户账号</div>
					<div  :style='{"padding":"0 10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","color":"#666","background":"#fff","width":"400px","fontSize":"14px","lineHeight":"40px"}'>{{detail.yonghuzhanghao}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"#f5f5f5","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#333","textAlign":"right","width":"122px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>用户姓名</div>
					<div  :style='{"padding":"0 10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","color":"#666","background":"#fff","width":"400px","fontSize":"14px","lineHeight":"40px"}'>{{detail.yonghuxingming}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"#f5f5f5","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#333","textAlign":"right","width":"122px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>手机</div>
					<div  :style='{"padding":"0 10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","color":"#666","background":"#fff","width":"400px","fontSize":"14px","lineHeight":"40px"}'>{{detail.shouji}}</div>
				</div>
				<div class="btn" :style='{"padding":"10px 0","margin":"0 0 0 100px","flexWrap":"wrap","display":"flex"}'>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"rgba(64, 158, 255, 1)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="isAuth('zukebaozhangxiufu','审核')" @click="onSH" type="warning">审核</el-button>
				</div>
			</div>
			
		</div>
		
		
		<el-tabs class="detail" :style='{"border":"1px solid #DCDFE6","boxShadow":"0 1px 6px 0 rgba(0, 0, 0, .1)","background":"#FFF"}' v-model="activeName" type="border-card">
			<el-tab-pane label="报修内容" name="first">
				<div v-html="detail.baoxiuneirong"></div>
			</el-tab-pane>
		</el-tabs>
		<el-dialog title="审核" :visible.sync="sfshVisiable" width="50%">
			<el-form ref="shForm" :model="shForm" label-width="80px">
				<el-form-item label="审核状态">
					<el-select v-model="shForm.sfsh" placeholder="审核状态">
						<el-option label="通过" value="是"></el-option>
						<el-option label="不通过" value="否"></el-option>
						<el-option label="待审核" value="待审核"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="内容">
					<el-input type="textarea" :rows="8" v-model="shForm.shhf"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="sfshVisiable = false">取 消</el-button>
				<el-button type="primary" @click="shHandler">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</div>
</template>

<script>
  import CountDown from '@/components/CountDown';
  export default {
    //数据集合
    data() {
      return {
        tablename: 'zukebaozhangxiufu',
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '详情信息'
          }
        ],
        title: '',
        detailBanner: [],
        endTime: 0,
        detail: {},
        activeName: 'first',
        total: 1,
        pageSize: 5,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        rules: {
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ]
        },
        buynumber: 1,
        sfshVisiable: false,
        shForm: {
          sfsh: '是',
          shhf: ''
        },
      }
    },
    created() {
        this.init();
    },
    //方法集合
    methods: {
        init() {
          this.baseUrl = this.$config.baseUrl;
          if(this.$route.query.detailObj) {
            this.detail = JSON.parse(this.$route.query.detailObj);
          }
          this.$http.get(this.tablename + '/detail/'  + this.detail.id, {}).then(res => {
            if (res.data.code == 0) {
              this.detail = res.data.data;
              this.title = this.detail.fuzhuangmingcheng;
              this.detailBanner = this.detail.fuzhuangtupian ? this.detail.fuzhuangtupian.split(",") : [];
              this.$forceUpdate();
            }
          });


        },
      onSH() {
        this.sfshVisiable = true;
      },
      shHandler(){
        this.$confirm(`确定操作?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.detail.sfsh = this.shForm.sfsh;
          this.detail.shhf = this.shForm.shhf;
          this.$http.post(`${this.tablename}/update`, this.detail).then(res => {
            if (res.data.code == 0) {
              this.sfshVisiable = false;
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
              });
            }
          });
        });
      },
      curChange(page) {
        this.getDiscussList(page);
      },
      prevClick(page) {
        this.getDiscussList(page);
      },
      nextClick(page) {
        this.getDiscussList(page);
      },
      // 下载
      download(file){
        if(!file) {
            this.$message({
              type: 'error',
              message: '文件不存在',
              duration: 1500,
            });
            return;
        }
        window.open(this.baseUrl+file)
      },


    },
    components: {
      CountDown
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.detail-preview {
	
	  .attr {
	    .el-carousel ::v-deep .el-carousel__indicator button {
	      width: 0;
	      height: 0;
	      display: none;
	    }
	
	    .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
	      border-color: none;
	    }
	  }
	
	  .detail {
	    & ::v-deep .el-tabs__header .el-tabs__nav-wrap {
	      margin-bottom: 0;
	    }
	
	    & .add .el-textarea {
	      width: auto;
	    }
	  }
	}
	
	.attr .el-carousel ::v-deep .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel ::v-deep .el-carousel__container .el-carousel__arrow--left:hover {
		background: #71cd96;
	}
	
	.attr .el-carousel ::v-deep .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel ::v-deep .el-carousel__container .el-carousel__arrow--right:hover {
		background: #71cd96;
	}

	.attr .el-carousel ::v-deep .el-carousel__indicators {
		padding: 0;
		margin: 0;
		z-index: 2;
		bottom: 20px;
		position: absolute;
		list-style: none;
	}
	
	.attr .el-carousel ::v-deep .el-carousel__indicators li {
		border-radius: 10px;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.attr .el-carousel ::v-deep .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.attr .el-carousel ::v-deep .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}
	
	.attr .el-input-number ::v-deep .el-input-number__decrease {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		border-radius: 4px 0 0 4px;
		top: 1px;
		left: 1px;
		background: #f5f5f5;
		width: 40px;
		justify-content: center;
		border-width: 0 1px 0 0;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number ::v-deep .el-input-number__decrease i {
		color: #666;
		font-size: 14px;
	}

	.attr .el-input-number ::v-deep .el-input-number__increase {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		right: 1px;
		border-radius: 0 4px 4px 0;
		top: 1px;
		background: #f5f5f5;
		width: 40px;
		justify-content: center;
		border-width: 0 0 0 1px;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number ::v-deep .el-input-number__increase i {
		color: #666;
		font-size: 14px;
	}
	
	.attr .el-input-number ::v-deep .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		border-radius: 4px;
		padding: 0 40px;
		outline: none;
		color: #666;
		background: #FFF;
		display: inline-block;
		width: 100%;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		height: 40px;
	}
	
	.detail-preview .detail.el-tabs ::v-deep .el-tabs__header {
		margin: 0;
		background: rgba(113, 142, 124, 1);
		border-color: #E4E7ED;
		border-width: 0 0 1px 0;
		border-style: solid;
	}
	
	.detail-preview .detail.el-tabs ::v-deep .el-tabs__header .el-tabs__item {
		border: 0;
		padding: 0 20px;
		margin: 0;
		color: #000;
		background: rgba(160, 160, 160, 1);
		font-weight: 500;
		display: inline-block;
		font-size: 14px;
		line-height: 40px;
		position: relative;
		list-style: none;
		height: 40px;
	}
	
	.detail-preview .detail.el-tabs ::v-deep .el-tabs__header .el-tabs__item:hover {
		border: 0;
		color: #fff;
		background: #a0a0a0;
	}
	
	.detail-preview .detail.el-tabs ::v-deep .el-tabs__header .el-tabs__item.is-active {
		border: 0;
		color: #000;
		background: rgba(198, 232, 211, 1);
	}
	
	.detail-preview .detail.el-tabs ::v-deep .el-tabs__content {
		padding: 15px;
	}
	
	.detail-preview .detail.el-tabs .add ::v-deep .el-form-item__label {
		padding: 0 10px 0 0;
		color: #666;
		width: 80px;
		font-size: 14px;
		line-height: 40px;
		text-align: right;
	}
	
	.detail-preview .detail.el-tabs .add ::v-deep .el-textarea__inner {
		border: 1px solid #71CD96;
		border-radius: 4px;
		padding: 0 12px;
		box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.302);
		outline: none;
		color: #333;
		width: 900px;
		font-size: 14px;
		line-height: 32px;
		height: 120px;
	}
	
	.breadcrumb-preview .el-breadcrumb ::v-deep .el-breadcrumb__separator {
		margin: 0 9px;
		color: rgba(113, 205, 150, 1);
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb ::v-deep .el-breadcrumb__inner a {
		margin: 0 0 0 100px;
		color: rgba(113, 205, 150, 1);
		display: inline-block;
	}

	.breadcrumb-preview .el-breadcrumb ::v-deep .el-breadcrumb__inner {
		color: rgba(113, 205, 150, 1);
		display: inline-block;
	}
	
	.el-pagination ::v-deep .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination ::v-deep .btn-prev {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	.el-pagination ::v-deep .btn-next {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	.el-pagination ::v-deep .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination ::v-deep .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination ::v-deep .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	.el-pagination ::v-deep .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 5px;
		background: rgba(216, 216, 216, 1);
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination ::v-deep .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: rgba(113, 205, 150, 1);
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 5px;
		background: rgba(216, 216, 216, 1);
		text-align: center;
		min-width: 30px;
		height: 28px;
}

.el-pagination ::v-deep .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 5px;
		background: rgba(113, 205, 150, 1);
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination ::v-deep .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination ::v-deep .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	.el-pagination ::v-deep .el-pagination__sizes .el-input .el-input__inner {
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
	
	.el-pagination ::v-deep .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	.el-pagination ::v-deep .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}

	.el-pagination ::v-deep .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination ::v-deep .el-pagination__jump .el-input {
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
	
	.el-pagination ::v-deep .el-pagination__jump .el-input .el-input__inner {
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
