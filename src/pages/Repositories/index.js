import React from 'react';

import { View, Text, AsyncStorage } from 'react-native';

import styles from './styles';

AsyncStorage.clear();

const Repositories = () => (
  <View style={styles.container}>
    <Text>Repositories</Text>
  </View>
);

export default Repositories;
