import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
  initGlobalState,
  MicroAppStateActions,
} from 'qiankun';
import globalState from './globalState';

export let setGlobalState;
export let micState;
export const runQiankun = (props) => {
  registerMicroApps([
    {
      name: 'asset-app',
      entry: '/asset-app',
      container: '#container',
      activeRule: '/asset',
      props: { base: '/asset', ...props },
    },
    {
      name: 'device-app',
      entry: '/device-app',
      container: '#container',
      activeRule: '/device',
      props: { base: '/device', ...props },
    },
  ]);

  start({ sandbox: { experimentalStyleIsolation: true } });
  addGlobalUncaughtErrorHandler((error) => console.log(error));

  //主应用与微应用 微应用与微应用 之间相互通信
  const actions: MicroAppStateActions = initGlobalState(globalState);

  actions.onGlobalStateChange((state, prev) => {
    micState = state;
    console.log('main1', state, prev);
  }, true);
  setGlobalState = (state) => {
    actions.setGlobalState({ ...micState, ...state });
  };
};
