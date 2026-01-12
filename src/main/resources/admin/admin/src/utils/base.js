const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooto8ka3/",
            name: "springbooto8ka3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooto8ka3/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SpringBoot框架的服装租借管理系统"
        } 
    }
}
export default base
