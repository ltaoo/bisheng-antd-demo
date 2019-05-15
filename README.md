# 使用 bisheng 记录

## 问题

### 1、详情页 404
404 就是没有匹配到路由，这个很明显，但是为什么呢？因为`theme-one`配置的是`/posts/:post`路径，而我们指定`source`为其他名字的文件夹，比如

```js
// bisheng.config.s
module.exports = {
    source: './components',
};
```

那么，在`components`下的`md`文件实际访问路径就是`/components/:post`，所以匹配不到。

### 2、bisheng-plugin-react 不生效

首先，在`lazyload: true`的情况下，是使用了`src/loader/source-loader.js`来处理`md`文件，使用`themeConfig.plugins`，所以在这里断点查看实际使用了哪些`plugins`，并确定路径正确。

> 大部分不生效可能是因为路径错误。

由于不知道怎么配，所以直接修改`node_modules/bisheng-theme-one`下的配置文件：

```js
module.exports = {
    // ...
    plugins: [
        path.join(__dirname, '..', '..', 'bisheng-plugin-react?lang=__react'),
    ],
}
```

`bisheng-plugin-react`是作用在`theme`上的，那么只能自己实现`theme`，而不能使用第三方，因为`bisheng.config.js`无法覆盖`theme.config.js`。