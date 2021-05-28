import { FC } from 'react';
import HomePage from './home';
import LoginPage from './login';
import ResetPwd from './resetPwd';

export interface IPage {
  name: string;
  path: string;
  exact: boolean;
  page: FC;
}

const index: IPage[] = [
  { name: '登录页', path: '/login', exact: true, page: LoginPage },
  { name: '重置密码', path: '/resetPwd', exact: true, page: ResetPwd },
  { name: '首页', path: '/', exact: false, page: HomePage },
];

export default index;
