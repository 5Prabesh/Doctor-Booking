import React from 'react';
import AuthStack from './src/Navigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import TabStack from './src/Navigation/TabStack';

const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <TabStack/>
    </NavigationContainer>
  );
};

export default App;
