<template>
<div :style='{"width":"1000px","padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"0 auto 20px","position":"relative","background":"#fff"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="服装名称" prop="fuzhuangmingcheng">
            <el-input v-model="ruleForm.fuzhuangmingcheng" 
                placeholder="服装名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}'  label="服装分类" prop="fuzhuangfenlei">
            <el-select v-model="ruleForm.fuzhuangfenlei" placeholder="请选择服装分类"  >
              <el-option
                  v-for="(item,index) in fuzhuangfenleiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="服装图片" v-if="type!='cross' || (type=='cross' && !ro.fuzhuangtupian)" prop="fuzhuangtupian">
            <file-upload
            tip="点击上传服装图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.fuzhuangtupian?ruleForm.fuzhuangtupian:''"
            @change="fuzhuangtupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' class="upload" v-else label="服装图片" prop="fuzhuangtupian">
                <img v-if="ruleForm.fuzhuangtupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.fuzhuangtupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fuzhuangtupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="服装尺码" prop="fuzhuangchima">
            <el-input v-model="ruleForm.fuzhuangchima" 
                placeholder="服装尺码" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="服装颜色" prop="fuzhuangyanse">
            <el-input v-model="ruleForm.fuzhuangyanse" 
                placeholder="服装颜色" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="服装材料" prop="fuzhuangcailiao">
            <el-input v-model="ruleForm.fuzhuangcailiao" 
                placeholder="服装材料" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="服装价格" prop="fuzhuangjiage">
            <el-input v-model="ruleForm.fuzhuangjiage" 
                placeholder="服装价格" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="库存" prop="kucun">
            <el-input v-model="ruleForm.kucun" 
                placeholder="库存" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="服装介绍" prop="fuzhuangjieshao">
            <editor 
                :style='{"padding":"0","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.fuzhuangjieshao" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"rgba(113, 205, 150, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"rgba(132, 159, 143, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            fuzhuangmingcheng : false,
            fuzhuangfenlei : false,
            fuzhuangtupian : false,
            fuzhuangchima : false,
            fuzhuangyanse : false,
            fuzhuangcailiao : false,
            fuzhuangjiage : false,
            kucun : false,
            fuzhuangjieshao : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          fuzhuangmingcheng: '',
          fuzhuangfenlei: '',
          fuzhuangtupian: '',
          fuzhuangchima: '',
          fuzhuangyanse: '',
          fuzhuangcailiao: '',
          fuzhuangjiage: '',
          kucun: '',
          fuzhuangjieshao: '',
        },
        fuzhuangfenleiOptions: [],


        rules: {
          fuzhuangmingcheng: [
            { required: true, message: '服装名称不能为空', trigger: 'blur' },
          ],
          fuzhuangfenlei: [
            { required: true, message: '服装分类不能为空', trigger: 'blur' },
          ],
          fuzhuangtupian: [
          ],
          fuzhuangchima: [
          ],
          fuzhuangyanse: [
          ],
          fuzhuangcailiao: [
          ],
          fuzhuangjiage: [
            { required: true, message: '服装价格不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          kucun: [
            { required: true, message: '库存不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          fuzhuangjieshao: [
          ],
        },
      };
    },
    computed: {



    },
    components: {
    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='fuzhuangmingcheng'){
              this.ruleForm.fuzhuangmingcheng = obj[o];
              this.ro.fuzhuangmingcheng = true;
              continue;
            }
            if(o=='fuzhuangfenlei'){
              this.ruleForm.fuzhuangfenlei = obj[o];
              this.ro.fuzhuangfenlei = true;
              continue;
            }
            if(o=='fuzhuangtupian'){
              this.ruleForm.fuzhuangtupian = obj[o].split(",")[0];
              this.ro.fuzhuangtupian = true;
              continue;
            }
            if(o=='fuzhuangchima'){
              this.ruleForm.fuzhuangchima = obj[o];
              this.ro.fuzhuangchima = true;
              continue;
            }
            if(o=='fuzhuangyanse'){
              this.ruleForm.fuzhuangyanse = obj[o];
              this.ro.fuzhuangyanse = true;
              continue;
            }
            if(o=='fuzhuangcailiao'){
              this.ruleForm.fuzhuangcailiao = obj[o];
              this.ro.fuzhuangcailiao = true;
              continue;
            }
            if(o=='fuzhuangjiage'){
              this.ruleForm.fuzhuangjiage = obj[o];
              this.ro.fuzhuangjiage = true;
              continue;
            }
            if(o=='kucun'){
              this.ruleForm.kucun = obj[o];
              this.ro.kucun = true;
              continue;
            }
            if(o=='fuzhuangjieshao'){
              this.ruleForm.fuzhuangjieshao = obj[o];
              this.ro.fuzhuangjieshao = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.$http.get('option/fuzhuangfenlei/fuzhuangfenlei', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.fuzhuangfenleiOptions = res.data.data;
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('fuzhuangxinxi/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('fuzhuangxinxi/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('fuzhuangxinxi/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('fuzhuangxinxi/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      fuzhuangtupianUploadChange(fileUrls) {
          this.ruleForm.fuzhuangtupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 120px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input ::v-deep .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 12px;
	  box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.302);
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select ::v-deep .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 10px;
	  box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.302);
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor ::v-deep .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.302);
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview ::v-deep .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview ::v-deep .upload .upload-img {
	  border: 1px dashed #999;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview ::v-deep .el-upload-list .el-upload-list__item {
	  border: 1px dashed #999;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview ::v-deep .el-upload .el-icon-plus {
	  border: 1px dashed #999;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea ::v-deep .el-textarea__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 12px;
	  box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.302);
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  min-height: 120px;
	}
</style>
