const webpack = require("webpack");

const {
    override,
    addWebpackAlias,
    addWebpackPlugin,
    addDecoratorsLegacy,
    addLessLoader,
} = require("customize-cra");
const path = require("path");

module.exports = override(
    //配置别名
    addWebpackAlias({
        "@":path.resolve(__dirname,"src")
    }),
    //在代码里实用环境变量
    addWebpackPlugin(new webpack.DefinePlugin({
        "process.env.vconsole":JSON.stringify(process.env.vconsole),
        "process.env.tenantId":JSON.stringify(process.env.tenantId),
    })),
    //支持less
    addLessLoader({}),
    //支持装饰器
    addDecoratorsLegacy(),
)