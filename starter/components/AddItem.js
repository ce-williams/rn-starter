import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {Ionicons} from '@expo/vector-icons';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);
  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          {/* <Icon name="plus" solid size={20} /> */}
          {/* <Ionicons name="pluscircleo" size={20} color="green" /> */}
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#73bfa2',
    opacity: '75',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: '#3d3d3d',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
