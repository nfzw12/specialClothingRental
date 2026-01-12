<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20210116/1cec02de420545959de6d077f69986dc.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"padding":"40px 20px 20px","margin":"0","borderColor":"#71CD96","borderRadius":"50px","background":"#fff","borderWidth":"0 10px","width":"500px","position":"absolute","right":"0","borderStyle":"solid","height":"auto"}' :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"margin":"0 0 16px 0","color":"rgba(0, 0, 0, 1)","textAlign":"center","width":"100%","lineHeight":"34px","fontSize":"24px","height":"auto"}'>基于SpringBoot框架的服装租借管理系统登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"50%","margin":"0 auto 24px"}' prop="username">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>账号：</div>
				<input :style='{"border":"1px solid #ddd","padding":"0 10px","color":"#000","outlineOffset":"4px","background":"rgba(249, 249, 249, 1)","width":"100%","fontSize":"14px","height":"44px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"50%","margin":"0 auto 24px"}' prop="password">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<input :style='{"border":"1px solid #ddd","padding":"0 10px","color":"#000","outlineOffset":"4px","background":"rgba(249, 249, 249, 1)","width":"100%","fontSize":"14px","height":"44px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>
			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"80%","textAlign":"center","margin":"20px auto"}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>
			<el-form-item :style='{"width":"80%","textAlign":"center","margin":"20px auto"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 auto","outline":"none","color":"#fff","borderRadius":"40px","background":"rgba(113, 205, 150, 1)","width":"300px","fontSize":"14px","height":"44px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 5px","outline":"none","color":"#fff","borderRadius":"4px","background":"rgba(64, 158, 255, 1)","display":"none","width":"auto","fontSize":"14px","height":"44px"}' @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
			<div :style='{"width":"90%","margin":"40px auto","position":"relative","textAlign":"center"}'>
			<router-link :style='{"cursor":"pointer","padding":"3px 5px","margin":"0 3px","color":"#000","background":"rgba(223, 223, 223, 1)","fontSize":"14px","textDecoration":"none"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
		</el-form>
    </div>
</div>
</template>

<script>

export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"服装分类","menuJump":"列表","tableName":"fuzhuangfenlei"}],"menu":"服装分类管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","租借合同"],"menu":"服装信息","menuJump":"列表","tableName":"fuzhuangxinxi"}],"menu":"服装信息管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"租借合同","menuJump":"列表","tableName":"zujiehetong"}],"menu":"租借合同管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","删除","审核"],"menu":"月租借订单","menuJump":"列表","tableName":"yuezujiedingdan"}],"menu":"月租借订单管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","删除"],"menu":"日租借订单","menuJump":"列表","tableName":"rizujiedingdan"}],"menu":"日租借订单管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除","月租金统计","审核"],"menu":"月租借结算","menuJump":"列表","tableName":"yuezujiejiesuan"}],"menu":"月租借结算管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","删除","审核","日租统计"],"menu":"日租借结算","menuJump":"列表","tableName":"rizujiejiesuan"}],"menu":"日租借结算管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","删除","审核","报修统计"],"menu":"租客保障修复","menuJump":"列表","tableName":"zukebaozhangxiufu"}],"menu":"租客保障修复管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看"],"menu":"服装信息列表","menuJump":"列表","tableName":"fuzhuangxinxi"}],"menu":"服装信息模块"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","租借订单","月租借订单","日租借订单"],"menu":"租借合同列表","menuJump":"列表","tableName":"zujiehetong"}],"menu":"租借合同模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","租借结算","支付","月租借结算","删除"],"menu":"月租借订单","menuJump":"列表","tableName":"yuezujiedingdan"}],"menu":"月租借订单管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["日租借结算","查看","删除"],"menu":"日租借订单","menuJump":"列表","tableName":"rizujiedingdan"}],"menu":"日租借订单管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","租客报账修复","支付","删除"],"menu":"月租借结算","menuJump":"列表","tableName":"yuezujiejiesuan"}],"menu":"月租借结算管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","删除","支付"],"menu":"日租借结算","menuJump":"列表","tableName":"rizujiejiesuan"}],"menu":"日租借结算管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","删除","支付"],"menu":"租客保障修复","menuJump":"列表","tableName":"zukebaozhangxiufu"}],"menu":"租客保障修复管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看"],"menu":"服装信息列表","menuJump":"列表","tableName":"fuzhuangxinxi"}],"menu":"服装信息模块"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","租借订单","月租借订单","日租借订单"],"menu":"租借合同列表","menuJump":"列表","tableName":"zujiehetong"}],"menu":"租借合同模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}]
		}
	},
  components: {
  },
	created() {
        for(let item in this.roleMenus) {
            if(this.roleMenus[item].hasFrontLogin=='是') {
                this.roles.push(this.roleMenus[item]);
            }
        }
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
              if (res.data.code === 0) {
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('UserTableName', this.loginForm.tableName);
                localStorage.setItem('username', this.loginForm.username);
                localStorage.setItem('adminName', this.loginForm.username);
                localStorage.setItem('sessionTable', this.loginForm.tableName);
                localStorage.setItem('role', this.role);
                localStorage.setItem('keyPath', this.$config.indexNav.length+2);
                this.$router.push('/index/center');
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  duration: 1500,
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20210116/1cec02de420545959de6d077f69986dc.jpg);
		
		.el-form-item {
		  & ::v-deep .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item ::v-deep .el-input .el-input__inner {
			border: 1px solid #ddd;
			padding: 0 10px;
			color: #000;
			background: rgba(249, 249, 249, 1);
			width: 100%;
			font-size: 14px;
			outline-offset: 4px;
			height: 44px;
		}
		
		.list-code ::v-deep .el-input .el-input__inner {
			border: 1px solid #ddd;
			padding: 0 10px;
			outline: none;
			color: #000;
			background: rgba(249, 249, 249, 1);
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 90px);
			font-size: 14px;
			height: 44px;
		}
		
		.list-type ::v-deep .el-radio__input .el-radio__inner {
			background: rgba(53, 53, 53, 0);
			border-color: #666666;
		}
		.list-type ::v-deep .el-radio__input.is-checked .el-radio__inner {
			background: rgba(113, 205, 150, 1);
			border-color: rgba(113, 205, 150, 1);
		}
		.list-type ::v-deep .el-radio__label {
			color: #666666;
			font-size: 14px;
		}
		.list-type ::v-deep .el-radio__input.is-checked+.el-radio__label {
			color: rgba(113, 205, 150, 1);
			font-size: 14px;
		}
	}
</style>
