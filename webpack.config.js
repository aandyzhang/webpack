const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    externals: ['lodash'],   //库中不加载lodash,防止加载重复
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        library: 'library',  //库可以通过script的方式引入，方法挂在library上，名称可以替换
        libraryTarget: 'umd',   //通过umd的方式，可以通过cjs,amd.esmodule 方式，
                               //都可以引入到这个库文件,取值可以为this，window,意思是library变量可以挂在this,window上
    }
}