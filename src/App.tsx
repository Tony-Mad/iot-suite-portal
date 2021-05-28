import React, {useEffect, useState} from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { ConfigProvider, Spin } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import { getI18n, useTranslation } from 'react-i18next';


import { runQiankun } from './qiankun';
import init from './init';
import './App.css';
import pages from '@/pages';
import { apiService } from '@tuya/connector';

// 鉴权例外列表
const excludePathList = ['/login', '/resetPwd'];

const App = () => {
  const mainHistory = useHistory();
  runQiankun({ mainHistory });
  init(mainHistory);
  const needAuth = !excludePathList.includes(mainHistory.location.pathname);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getProjectInfo().then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  const i18n = getI18n();
  const locale = i18n.language === 'zh-CN' ? zhCN : enUS;

  if (needAuth) {
    // 非例外布局，均需校验登录状态
    const value = localStorage.getItem('_USERNAME');
    if (!value) {
      mainHistory.push('/login');
    }
  }

  return (
    <ConfigProvider locale={locale}>
      <div>
        <Switch>
          {pages.map((item) => {
            return (
              <Route key={item.name} {...item}>
                {loading && needAuth ? <Spin spinning>
                  <div style={{width: '100vw', height: '100vh'}}></div>
                </Spin> : <item.page /> }
              </Route>
            );
          })}
        </Switch>
      </div>
    </ConfigProvider>
  );
};

export default App;
