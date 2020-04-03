import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        {/* <Icon
          name="remove"
          solid
          size={20}
          color="#db3535"
          onPress={() => deleteItem(item.id)}
        /> */}
        <Text style={styles.listItemRemove} onPress={() => deleteItem(item.id)}>X</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#6e6e6e',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  listItemRemove: {
    fontSize: 20,
    color: "#d6320d",
  }
});

export default ListItem;
