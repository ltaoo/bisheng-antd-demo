const path = require('path');
// const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;
// const replaceLib = require('antd-tools/lib/replaceLib');

// const isDev = process.env.NODE_ENV === 'development';

// function alertBabelConfig(rules) {
//   rules.forEach(rule => {
//     if (rule.loader && rule.loader === 'babel-loader') {
//       if (rule.options.plugins.indexOf(replaceLib) === -1) {
//         rule.options.plugins.push(replaceLib);
//       }
//       // eslint-disable-next-line
//       rule.options.plugins = rule.options.plugins.filter(
//         plugin => !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1,
//       );
//       // Add babel-plugin-add-react-displayname
//       rule.options.plugins.push(require.resolve('babel-plugin-add-react-displayname'));
//     } else if (rule.use) {
//       alertBabelConfig(rule.use);
//     }
//   });
// }

module.exports = {
    source: './posts',
    output: './_site',
    theme: 'bisheng-theme-antd',
    themeConfig: {
        home: '/',
        sitename: 'One',
        // plugins: [
        //     'bisheng-plugin-react?lang=__react',
        // ],
    },
    lessConfig: {
        javascriptEnabled: true,
    },
    // plugins: [
    //     'bisheng-plugin-react?lang=__react',
    // ],
    // webpackConfig(config) {
    //     // eslint-disable-next-line
    //     config.resolve.alias = {
    //         // 'antd/lib': path.join(process.cwd(), 'components'),
    //         // 'antd/es': path.join(process.cwd(), 'components'),
    //         // antd: path.join(process.cwd(), 'index'),
    //         // site: path.join(process.cwd(), 'site'),
    //         // 'react-router': 'react-router/umd/ReactRouter',
    //     };

    //     // eslint-disable-next-line
    //     config.externals = {
    //         // 'react-router-dom': 'ReactRouterDOM',
    //     };

    //     if (isDev) {
    //         // eslint-disable-next-line
    //         config.devtool = 'source-map';
    //     }

    //     alertBabelConfig(config.module.rules);

    //     config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));

    //     return config;
    // },
}