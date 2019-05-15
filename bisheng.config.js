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
    source: './components',
    output: './_site',
    theme: 'bisheng-theme-antd',
    themeConfig: {
        categoryOrder: {
            'Ant Design': 0,
            原则: 1,
            Principles: 1,
            视觉: 2,
            Visual: 2,
            模式: 3,
            Patterns: 3,
            其他: 6,
            Other: 6,
            Components: 100,
        },
        // 控制左侧菜单
        typeOrder: {
            General: 0,
            Layout: 1,
            Navigation: 2,
            'Data Entry': 3,
            'Data Display': 4,
            Feedback: 5,
            Other: 6,
            通用: 0,
            布局: 1,
            导航: 2,
            数据录入: 3,
            数据展示: 4,
            反馈: 5,
            其他: 6,
        },
        docVersions: {
            '0.9.x': 'http://09x.ant.design',
            '0.10.x': 'http://010x.ant.design',
            '0.11.x': 'http://011x.ant.design',
            '0.12.x': 'http://012x.ant.design',
            '1.x': 'http://1x.ant.design',
            '2.x': 'http://2x.ant.design',
        },
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