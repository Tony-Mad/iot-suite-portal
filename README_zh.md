<center><p align="center"><img src="./tuya_logo.png" width="28%" height="28%" /></p></center>

Tuya Iot Suite Portal -- 基座应用
===

[English](README.md) | [中文版](README_zh.md)

本应用为 Tuya Iot Suite 开发套件的 Web 管理控制台入口应用
负责用户登录、登出、整体项目的路由与界面管理

## 目录结构

源码位置
```
iot-suite-portal
└── src
```

> 入口文件为src/index.tsx

完整目录结构
```
iot-suite-portal
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── BHeaderUser
│   │   │   ├── account.png
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   ├── BLayout
│   │   │   ├── assets-icon.png
│   │   │   ├── devices-icon.png
│   │   │   ├── index.tsx
│   │   │   ├── setting-icon.png
│   │   │   └── tuyalogo.png
│   │   ├── BLayoutLogin
│   │   │   ├── index.less
│   │   │   ├── index.tsx
│   │   │   └── login.jpg
│   │   ├── BLogin
│   │   │   ├── component
│   │   │   │   ├── EmailForm.tsx
│   │   │   │   ├── TeleForm.tsx
│   │   │   │   └── VerifyCode.tsx
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   ├── BSwitchLang
│   │   │   └── index.tsx
│   │   ├── PLogin
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   ├── PResetPwd
│   │   │   └── index.tsx
│   │   ├── PSetting
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── constant
│   │   └── index.ts
│   ├── hooks
│   │   └── index.ts
│   ├── index.css
│   ├── index.tsx
│   ├── init.ts
│   ├── lang
│   │   ├── en-US
│   │   │   ├── index.ts
│   │   │   ├── login.ts
│   │   │   ├── menu.ts
│   │   │   └── setting.ts
│   │   ├── index.ts
│   │   └── zh-CN
│   │       ├── index.ts
│   │       ├── login.ts
│   │       ├── menu.ts
│   │       └── setting.ts
│   ├── pages
│   │   ├── home
│   │   │   ├── index.tsx
│   │   │   └── setting
│   │   │       └── index.tsx
│   │   ├── index.ts
│   │   ├── login
│   │   │   └── index.tsx
│   │   └── resetPwd
│   │       └── index.tsx
│   ├── qiankun
│   │   ├── globalState.ts
│   │   └── index.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupProxy.js
│   └── utils
│       └── index.ts
├── tsconfig.extend.json
├── tsconfig.json
├── typings.d.ts
└── yarn.lock
```

## 依赖情况

项目采用微前端架构，微前端框架采用[qiankun](https://qiankun.umijs.org/)
qiankun相关配置路径
```
iot-suite-portal
└── src
    └── qiankun
```

构建配置使用[CRACO](https://github.com/gsoft-inc/craco)
相关自定义配置
```
iot-suite-portal
└── .cracorc.js
```

## 部署说明
微前端架构可以独立部署基座应用和子应用，目前默认情况下使用单域名+多目录结构区分应用
![network](./frontend-network.jpg)


## 调试说明

本地调试，启动命令，默认端口号为3000，默认调试地址 http://localhost:3000/
```
npm run start
```

子应用的启动，需要进入子应用项目中启动
