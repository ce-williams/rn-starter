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

const submitAndClear = () => {};

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);
  // const clearInput = ()
  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        levalue={this.text}
      />
      <TouchableOpacity 
      style={styles.btn} 
      onPress={(text) => addItem(text)}>
        <Text style={styles.btnText}>
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
