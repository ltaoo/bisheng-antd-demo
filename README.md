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