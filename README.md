<center><p align="center"><img src="./tuya_logo.png" width="28%" height="28%" /></p></center>

Tuya IoT Suite Portal, Primary Application
===

[English](README.md) | [中文版](README_zh.md)

This topic describes the Tuya IoT Suite Portal. This is the portal application for the web management console of the Tuya IoT Suite.
You can use the portal application to implement login and logout and manage routes and UI of the overall project.

## Directory structure

Source code location
```
iot-suite-portal
└── src
```

> The entry file is `src/index.tsx`.

Application directory structure
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

## Dependency

The project adopts the [qiankun](https://qiankun.umijs.org/) micro front-end architecture.
`qiankun` configuration path
```
iot-suite-portal
└── src
    └── qiankun
```

[CRACO](https://github.com/gsoft-inc/craco) is used to build custom configurations.
```
iot-suite-portal
└── .cracorc.js
```

## Deployment

On the micro front-end architecture, you can independently deploy primary applications and sub-applications. Currently, a single domain name and multiple directory structures are used to distinguish applications by default.

![network](./frontend-network.jpg)


## Debugging

Run the following command to perform local debugging. The default port number is 3000, and the default debugging address is http://localhost:3000/.

```
npm run start
```

You must enter the sub-application project to start the specific sub-application.
