import { useHistory } from 'react-router-dom';
import { apiService } from '@tuya/connector';
import { useTranslation } from 'react-i18next';

import BLogin from '@/components/BLogin';

import { EmailFormField } from '@/components/BLogin/component/EmailForm';
import { TeleFormField } from '@/components/BLogin/component/TeleForm';
import BLayoutLogin from '../BLayoutLogin';

const PLogin = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const onEmailSubmit = async (values: EmailFormField) => {
    const { nick_name, token } = await apiService.multiLogin({
      userName: values.username,
      pwd: values.password,
    });
    localStorage.setItem('_USERNAME', nick_name);
    token && history.push('/asset');
  };

  const onTeleSubmit = async (values: TeleFormField) => {
    const { nick_name, token } = await apiService.multiLogin({
      countryCode: values.countryCode,
      phoneNum: values.phoneNum,
      pwd: values.password,
    });
    localStorage.setItem('_USERNAME', nick_name);
    token && history.push('/asset');
  };

  return (
    <BLayoutLogin>
      <BLogin onEmailSubmit={onEmailSubmit} onTeleSubmit={onTeleSubmit} isLogin/>
    </BLayoutLogin>
  );
};

export default PLogin;
