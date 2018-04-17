import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

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

const ClientItem = (props) => (
  <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Chat', { clientId: props._id, name: props.name, agentId: props.agentId })}>
    <Image source={{ uri: props.avatar }} style={styles.photo} />
    <Text style={styles.text}>
      {props.name}
      {/* {`${props.name.first} ${props.name.last}`} */}
    </Text>
  </TouchableOpacity>
);

export default ClientItem;