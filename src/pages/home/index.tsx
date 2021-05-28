import React from 'react';
import BLayout from '@/components/BLayout';
import { Switch, Route } from 'react-router-dom';
import SettingPage from './setting';

const Home = () => {
  return (
    <BLayout>
      <div id="container"></div>
      <Switch>
        <Route path="/setting" exact>
          <SettingPage />
        </Route>
      </Switch>
    </BLayout>
  );
};

export default Home;
