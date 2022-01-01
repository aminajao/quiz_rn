import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Amin Olayiwola</Text>
        <Text style={{color: 'red'}}>
          Ajao Al-Amin Olayiwola Al-Amin Ajao Olayiwola Adedotun Ajao Dimeji
          Ajao Al-Amin Olayiwola Al-Amin Ajao Olayiwola Adedotun Ajao Dimeji
          Al-Amin Olayiwola Al-Amin Ajao
        </Text>
        <View style={{display: 'flex'}}>
          <Button title="Click"></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
