import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的 VuePress 站点",
  base: "/vuepress-demo/",
});
