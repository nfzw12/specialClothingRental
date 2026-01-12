export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"服装分类","menuJump":"列表","tableName":"fuzhuangfenlei"}],"menu":"服装分类管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","租借合同"],"menu":"服装信息","menuJump":"列表","tableName":"fuzhuangxinxi"}],"menu":"服装信息管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"租借合同","menuJump":"列表","tableName":"zujiehetong"}],"menu":"租借合同管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","删除","审核"],"menu":"月租借订单","menuJump":"列表","tableName":"yuezujiedingdan"}],"menu":"月租借订单管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","删除"],"menu":"日租借订单","menuJump":"列表","tableName":"rizujiedingdan"}],"menu":"日租借订单管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除","月租金统计","审核"],"menu":"月租借结算","menuJump":"列表","tableName":"yuezujiejiesuan"}],"menu":"月租借结算管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","删除","审核","日租统计"],"menu":"日租借结算","menuJump":"列表","tableName":"rizujiejiesuan"}],"menu":"日租借结算管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","删除","审核","报修统计"],"menu":"租客保障修复","menuJump":"列表","tableName":"zukebaozhangxiufu"}],"menu":"租客保障修复管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看"],"menu":"服装信息列表","menuJump":"列表","tableName":"fuzhuangxinxi"}],"menu":"服装信息模块"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","租借订单","月租借订单","日租借订单"],"menu":"租借合同列表","menuJump":"列表","tableName":"zujiehetong"}],"menu":"租借合同模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","租借结算","支付","月租借结算","删除"],"menu":"月租借订单","menuJump":"列表","tableName":"yuezujiedingdan"}],"menu":"月租借订单管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["日租借结算","查看","删除"],"menu":"日租借订单","menuJump":"列表","tableName":"rizujiedingdan"}],"menu":"日租借订单管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","租客报账修复","支付","删除"],"menu":"月租借结算","menuJump":"列表","tableName":"yuezujiejiesuan"}],"menu":"月租借结算管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","删除","支付"],"menu":"日租借结算","menuJump":"列表","tableName":"rizujiejiesuan"}],"menu":"日租借结算管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","删除","支付"],"menu":"租客保障修复","menuJump":"列表","tableName":"zukebaozhangxiufu"}],"menu":"租客保障修复管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看"],"menu":"服装信息列表","menuJump":"列表","tableName":"fuzhuangxinxi"}],"menu":"服装信息模块"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","租借订单","月租借订单","日租借订单"],"menu":"租借合同列表","menuJump":"列表","tableName":"zujiehetong"}],"menu":"租借合同模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
