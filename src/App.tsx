import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import Main from './screens/Main';

const App = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        grey: '#3B6C82',
        aqua: '#75DAFC',
        teal: '#6291A5',
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Main />
    </NativeBaseProvider>
  );
};

export default App;
