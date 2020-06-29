
## React TypeScript Graphql Antd 项目开发模板

> 基于[Ice](https://ice.work/docs/guide/about)React、TypeScript、Graphql、Antd项目开发模板

## 使用

```bash
# 安装依赖
$ yarn

# 启动服务
$ yarn start  # visit http://localhost:3333
```

## 目录

```md
├── .ice/                          # 运行时生成的临时目录
├── build/                         # 构建产物目录
├── mock/                          # 本地模拟数据
│   ├── index.js
├── public/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── src/                           # 源码
│   ├── components/                # 自定义业务组件
│   ├── layouts/                   # 布局组件
│   ├── pages/                     # 页面
│   ├── models/                    # 应用级数据状态
│   ├── global.scss                # 全局样式
│   ├── config.ts                  # 环境配置
│   ├── routes.ts                  # 路由配置
│   └── app.ts                     # 应用入口
│
├── build.json
├── package.json
└── tsconfig.json
```
