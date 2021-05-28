import { FC, useState, useEffect } from 'react';
import ProLayout from '@ant-design/pro-layout';
import { useTranslation } from 'react-i18next';
import { useHistory, Link, useLocation } from 'react-router-dom';
import HeaderUser from '@/components/BHeaderUser';
import TuyaLogo from './tuyalogo.png';
import AssetsIcon from './assets-icon.png';
import DeviceIcon from './devices-icon.png';
import SettingIcon from './setting-icon.png';

const iconStyle = {
  width: 16,
  height: 16,
  marginTop: -2,
  marginRight: 10,
};

const BLayout: FC = ({ children }) => {
  const [pathname, setPathname] = useState('/asset');
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const title = t('menu.title.default');

  const Assets = () => {
    return <img src={AssetsIcon} alt="" style={iconStyle} />;
  };
  const Device = () => {
    return <img src={DeviceIcon} alt="" style={iconStyle} />;
  };
  const Setting = () => {
    return <img src={SettingIcon} alt="" style={iconStyle} />;
  };
  const route = {
    routes: [
      {
        path: '/asset',
        name: t('menu.title.assets'),
        icon: <Assets />,
        component: '@/pages/Assets',
      },
      {
        path: '/device',
        name: t('menu.title.devices'),
        icon: <Device />,
        component: '@/pages/Devices',
      },
      {
        path: '/setting',
        name: t('menu.title.setting'),
        icon: <Setting />,
        component: '@/pages/setting',
      },
    ],
  };

  const menuItemRender = (menuItemProps, defaultDom) => {
    return (
      <Link
        to={menuItemProps.path}
        style={{ height: 40 }}
        onClick={() => {
          setPathname(menuItemProps.path);
        }}
      >
        {defaultDom}
      </Link>
    );
  };

  const Logo = () => {
    return <img src={TuyaLogo} alt="" style={{height: 28 }} />;
  };

  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname === '/') history.push('/asset');
    else setPathname(location.pathname);
  }, []);

  return (
    <ProLayout
      location={{ pathname }}
      logo={() => <Logo />}
      navTheme="light"
      headerTheme="light"
      fixSiderbar
      fixedHeader
      layout="mix"
      contentStyle={{ minHeight: 'calc(100vh - 96px)' }}
      route={route}
      title={title}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={menuItemRender}
      rightContentRender={() => <HeaderUser />}
    >
      {children}
    </ProLayout>
  );
};

export default BLayout;
