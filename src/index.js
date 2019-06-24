import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    {/* para a barra do android ficar roxa */}
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

export default App;
