module.exports = {
    source: './posts',
    output: './_site',
    theme: 'bisheng-theme-one',
    themeConfig: {
        home: '/',
        sitename: 'One',
        plugins: [
            'bisheng-plugin-react?lang=__react',
        ],
    },
    plugins: [
        'bisheng-plugin-react?lang=__react',
    ],
}