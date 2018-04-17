import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 17
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const AgentItem = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.avatar }} style={styles.photo} />
    <Text style={styles.text}>
      {props.name}
      {/* {`${props.name.first} ${props.name.last}`} */}
    </Text>
  </View>
);

export default AgentItem;