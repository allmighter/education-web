const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm9rv33/",
            name: "ssm9rv33",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm9rv33/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学习平台app"
        } 
    }
}
export default base
