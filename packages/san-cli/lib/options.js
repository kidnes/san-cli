/**
 * @file san.config 格式
 * @author wangyongqing <wangyongqing01@baidu.com>
 */

const joi = require('@hapi/joi');

const schema = joi
    .object({
        // env 相关
        browserslist: joi.alternatives().try(joi.array(), joi.object()),
        jsonpFunction: joi.string(),
        transpileDependencies: joi.array(),
        indexPath: joi.string(),
        // 产出相关
        // 下面这个将 public 内容 copy 到产出文件夹
        // 使用打包脚本自己处理吧，不再单独暴漏配置项
        // copyPublicDir: joi.boolean(),
        // 专门给 smarty 留的一个配置项
        templateDir: joi.string().allow(''),
        copy: joi.alternatives().try(
            joi.array().items(
                joi
                    .object({
                        compress: joi.bool(),
                        from: joi.string(),
                        to: joi.string(),
                        ignore: joi.alternatives().try(joi.string(), joi.object().instance(RegExp))
                    })
                    .unknown(true)
            ),
            joi
                .object({
                    from: joi.string(),
                    compress: joi.bool(),
                    to: joi.string(),
                    ignore: joi.alternatives().try(joi.string(), joi.object().instance(RegExp))
                })
                .unknown(true)
        ),
        // 插件相关
        plugins: joi.array(),
        // 产出相关
        publicPath: joi.string().allow(''),
        outputDir: joi.string(),
        assetsDir: joi.string().allow(''),
        // 多页配置
        pages: joi.object().pattern(
            /\w+/,
            joi.alternatives().try(
                joi.string().required(),
                joi.array().items(joi.string().required()),
                joi
                    .object()
                    .keys({
                        entry: joi
                            .alternatives()
                            .try(joi.string().required(), joi.array().items(joi.string().required()))
                            .required(),
                        chunks: joi
                            .alternatives()
                            .try(joi.string().required(), joi.array().items(joi.string().required()))
                    })
                    .unknown(true)
            )
        ),
        // 生产环境优化相关
        terserOptions: joi.object(),
        sourceMap: joi.boolean(),
        filenameHashing: joi.boolean(),
        largeAssetSize: joi.number(),
        // css 相关
        css: joi.object({
            cssPreprocessor: joi.string().valid('less', 'sass', 'styl', 'stylus', 'scss'),
            extract: joi.boolean(),
            sourceMap: joi.boolean(),
            requireModuleExtension: joi.boolean(),
            loaderOptions: joi.object({
                css: joi.object(),
                sass: joi.object(),
                less: joi.object(),
                scss: joi.object(),
                stylus: joi.object(),
                postcss: joi.object()
            })
        }),
        // webpack 相关配置
        // 内置 loader 的 options
        loaderOptions: joi.object(),
        splitChunks: joi.object(),
        // -> splitChunksCacheGroups是 splitChunks 的全称，其实 splitChunks 就是 cachegroup
        splitChunksCacheGroups: joi.object(),
        // 纯自定义的函数
        chainWebpack: joi.func(),
        configureWebpack: joi.alternatives().try(joi.object(), joi.func()),
        // dev server
        devServer: joi
            .object({
                port: joi.number()
            })
            .unknown(true)
    })
    // 为了方便自定义扩展
    .unknown(true);
exports.validate = (options, cb) => {
    schema.validate(options, cb);
};
exports.validateSync = async (value, options) => await schema.validateAsync(value, options);

exports.defaults = {
    pages: undefined,
    indexPath: 'index.html',
    outputDir: 'output',
    assetsDir: '',
    publicPath: '/',
    filenameHashing: false,
    devServer: {
        clientLogLevel: 'info',
        overlay: {warnings: false, errors: true},
        hot: true,
        noInfo: true,
        stats: 'errors-only',
        inline: false,
        lazy: false,
        quiet: false,
        index: 'index.html',
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 100
        },
        disableHostCheck: true,
        compress: false,
        host: '0.0.0.0',
        port: 8899,
        https: false
    },
    sourceMap: false
};
