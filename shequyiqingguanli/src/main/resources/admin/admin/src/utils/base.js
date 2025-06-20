const base = {
    get() {
        return {
            url : "http://localhost:8080/shequyiqingguanli/",
            name: "shequyiqingguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shequyiqingguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区疫情管理系统"
        } 
    }
}
export default base
