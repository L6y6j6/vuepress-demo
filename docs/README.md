---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---

VuePress 2 已经发布 :tada: ！

代码块示例：

```ts title=".vuepress/config.ts" ts{1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```