module.exports = {
    publicPath:"./",
    outputDir:"docs",
    assetsDir:"assets",
    indexPath:"index.html",
    filenameHashing:true,
    pages:undefined,
    lintOnSave:true,
    runtimeCompiler:false,
    transpileDependencies:[],
    productionSourceMap:false,
    crossorigin:undefined,
    integrity:false,
    devServer:{//代理
        port:8080,
        proxy:'http://192.168.1.1:8080',
    }
}