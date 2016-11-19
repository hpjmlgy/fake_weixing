var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: {
    common: [
      // necessary for hot reloading with IE:
      'eventsource-polyfill',
      // listen to code updates emitted by hot middleware:
      'webpack-hot-middleware/client',
      // your code:
    ],

    mbck: './src/mbck',
    index: './src/index',
    tg: './src/tg',
    tg_all: './src/tg_all',
    xzcp: './src/xzcp',
    zpscc: './src/zpscc',
    zpzzym: './src/zpzzym', //8、10、11照片制作页面
    mbtz: './src/mbtz', //9模板调整

    // zpsbj: './src/zpsbj', //11照片书编辑页面(测试页面)
    xccyzz: './src/xccyzz', //13-16炫彩冲印制作


    xccc: './src/xccc', //12炫彩尺寸选择
    btcc: './src/btcc', //17摆台尺寸选择
    wlxq: './src/wlxq', //20物流详情
    sgtl: './src/sgtl', //21时光台历
    ddxq: './src/ddxq', //25订单详情
    zffs: './src/zffs', //26支付方式
    wd: './src/wd', //我的
    wddd: './src/wddd', //28+29我的订单
    yhj: './src/yhj', //30+31优惠券
    hb: './src/hb', //32红包
    yce: './src/yce', //33预存额
    gwc: './src/gwc', //34,35购物车
    dzgl: './src/dzgl', //36,37,38地址管理
    gywm: './src/gywm', //39关于我们
    //40联系客服（页面逻辑问题）
    grzx: './src/grzx', //41个人中心 42修改登录手机
    dlzc: './src/dlzc', //43,44登录注册
    sszz: './src/sszz', //45时尚杂志介绍
    ykjz: './src/ykjz', //46硬壳精装
    ykjz1: './src/ykjz1',
    xccy: './src/xccy', //47-49炫彩冲印
    xccy1: './src/xccy1',
    btbh: './src/btbh', //50摆台版画
    btbh1: './src/btbh1'


  },

  output: {
    path: path.join(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: "[name].bundle.js",
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style!css'
        // loader: ExtractTextPlugin.extract('style', 'css'),
    }, {
      test: /\.(png|jpg)$/,
      exclude: /node_modules/,
      loader: 'url-loader'
    }]
  }
};