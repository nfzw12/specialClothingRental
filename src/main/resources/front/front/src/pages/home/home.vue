<template>
<div class="home-preview" :style='{"width":"100%","margin":"10px auto"}'>
	<el-row type="flex" :gutter="5" justify="center" style="width: 100%">
		<el-col :span="3" v-if="queryList.length>1">
			<el-select v-model="queryIndex">
				<el-option
				  v-for="(item,index) in queryList"
				  :key="index"
				  :label="item.queryName"
				  :value="index"
				></el-option>
			</el-select>
		</el-col>
		<el-col :span="3" v-if="queryIndex==0">
			<el-input v-model="fuzhuangxinxifuzhuangmingcheng" placeholder="服装名称"></el-input>
		</el-col>
		<el-col :span="3" v-if="queryIndex==0">
			<el-button type="primary" @click="search('fuzhuangxinxi')">搜索</el-button>
		</el-col>
	</el-row>




	


<div class="lists" :style='{"minHeight":"800px","padding":"0 460px","margin":"0 0 10px","backgroundImage":"url(http://codegen.caihongy.cn/20220913/8e8ea6dda36142b58d5ff29666bf7988.png)","flexDirection":"column","display":"flex","backgroundSize":"100% 503px","backgroundPosition":"center","backgroundRepeat":"no-repeat","justifyContent":"space-around"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"200px","margin":"0px auto","lineHeight":"54px","textAlign":"center"}'>
	  <span :style='{"color":"#000","fontSize":"30px","fontWeight":"600"}'>服装信息展示</span>
	</div>
	
	
	
	<!-- 样式二 -->
	<div class="list list2 index-pv1" :style='{"width":"100%","padding":"0 10px","alignItems":"center","flexWrap":"wrap","display":"flex","height":"auto"}'>
		<div :style='{"padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"10px","borderRadius":"15px","background":"#fff","display":"flex","width":"460px","fontSize":"0","height":"152px"}' v-for="(item,index) in fuzhuangxinxiList" class="list-item animation-box" :key="index" @click="toDetail('fuzhuangxinxiDetail', item)">
			<img :style='{"width":"130px","margin":"0 20px 0 0","objectFit":"cover","borderRadius":"15px","height":"100%"}' v-if="preHttp(item.fuzhuangtupian)" :src="item.fuzhuangtupian.split(',')[0]" alt="" />
			<img :style='{"width":"130px","margin":"0 20px 0 0","objectFit":"cover","borderRadius":"15px","height":"100%"}' v-else :src="baseUrl +  (item.fuzhuangtupian?item.fuzhuangtupian.split(',')[0]:'')" alt="" />
			<div :style='{"padding":"10px","overflow":"hidden","alignItems":"center","flexDirection":"column","display":"flex","width":"300px","justifyContent":"center","height":"100%"}' class="item-info">
				<div class="name line1" :style='{"overflow":"hidden","color":"rgba(0, 0, 0, 1)","textAlign":"center","width":"100%","lineHeight":"32px","fontSize":"14px","fontWeight":"600"}'>{{item.fuzhuangmingcheng}}</div>
				<div class="name line1" :style='{"overflow":"hidden","color":"rgba(0, 0, 0, 1)","textAlign":"center","width":"100%","lineHeight":"32px","fontSize":"14px","fontWeight":"600"}'>{{item.fuzhuangyanse}}</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	<div @click="moreBtn('fuzhuangxinxi')" :style='{"border":"5px solid rgba(113, 205, 150, 1)","padding":"10px","margin":"10px auto","borderRadius":"50%","textAlign":"center","background":"#fff","display":"block","width":"220px","lineHeight":"32px"}'>
		<span :style='{"color":"rgba(113, 205, 150, 1)","fontSize":"18px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"rgba(113, 205, 150, 1)","fontSize":"18px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>
<div class="lists" :style='{"minHeight":"800px","padding":"0 460px","margin":"0 0 10px","backgroundImage":"url(http://codegen.caihongy.cn/20220913/8e8ea6dda36142b58d5ff29666bf7988.png)","flexDirection":"column","display":"flex","backgroundSize":"100% 503px","backgroundPosition":"center","backgroundRepeat":"no-repeat","justifyContent":"space-around"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"200px","margin":"0px auto","lineHeight":"54px","textAlign":"center"}'>
	  <span :style='{"color":"#000","fontSize":"30px","fontWeight":"600"}'>租借合同展示</span>
	</div>
	
	
	
	<!-- 样式二 -->
	<div class="list list2 index-pv1" :style='{"width":"100%","padding":"0 10px","alignItems":"center","flexWrap":"wrap","display":"flex","height":"auto"}'>
		<div :style='{"padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"10px","borderRadius":"15px","background":"#fff","display":"flex","width":"460px","fontSize":"0","height":"152px"}' v-for="(item,index) in zujiehetongList" class="list-item animation-box" :key="index" @click="toDetail('zujiehetongDetail', item)">
			<img :style='{"width":"130px","margin":"0 20px 0 0","objectFit":"cover","borderRadius":"15px","height":"100%"}' v-if="preHttp(item.fuzhuangtupian)" :src="item.fuzhuangtupian.split(',')[0]" alt="" />
			<img :style='{"width":"130px","margin":"0 20px 0 0","objectFit":"cover","borderRadius":"15px","height":"100%"}' v-else :src="baseUrl +  (item.fuzhuangtupian?item.fuzhuangtupian.split(',')[0]:'')" alt="" />
			<div :style='{"padding":"10px","overflow":"hidden","alignItems":"center","flexDirection":"column","display":"flex","width":"300px","justifyContent":"center","height":"100%"}' class="item-info">
				<div class="name line1" :style='{"overflow":"hidden","color":"rgba(0, 0, 0, 1)","textAlign":"center","width":"100%","lineHeight":"32px","fontSize":"14px","fontWeight":"600"}'>{{item.fuzhuangmingcheng}}</div>
				<div class="name line1" :style='{"overflow":"hidden","color":"rgba(0, 0, 0, 1)","textAlign":"center","width":"100%","lineHeight":"32px","fontSize":"14px","fontWeight":"600"}'>{{item.fuzhuangyanse}}</div>
				<div class="name line1" :style='{"overflow":"hidden","color":"rgba(0, 0, 0, 1)","textAlign":"center","width":"100%","lineHeight":"32px","fontSize":"14px","fontWeight":"600"}'>收租日期:{{item.shouzuriqi}}</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	<div @click="moreBtn('zujiehetong')" :style='{"border":"5px solid rgba(113, 205, 150, 1)","padding":"10px","margin":"10px auto","borderRadius":"50%","textAlign":"center","background":"#fff","display":"block","width":"220px","lineHeight":"32px"}'>
		<span :style='{"color":"rgba(113, 205, 150, 1)","fontSize":"18px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"rgba(113, 205, 150, 1)","fontSize":"18px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>


</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        queryList:[
          {
              queryName:"服装名称",
          },
        ],
        queryIndex: 0,
        fuzhuangxinxifuzhuangmingcheng: '',
        newsList: [],

        fuzhuangxinxiList: [],
        zujiehetongList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      search(tablename) {
        if (this.queryIndex == 0 && this.fuzhuangxinxifuzhuangmingcheng) {
          this.$router.push({path: '/index/' + tablename, query: {indexQueryCondition: this.fuzhuangxinxifuzhuangmingcheng}});
        }
      },
		getList() {
          let autoSortUrl = "";
			
			this.$http.get('fuzhuangxinxi/list', {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.fuzhuangxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			this.$http.get('zujiehetong/list', {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.zujiehetongList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(1.02) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(1.03) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
