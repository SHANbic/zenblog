import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const post = state.find(post => post.id === id);

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.inputText}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.inputText}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Submit your post"
        onPress={() => editBlogPost(id, title, content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    fontSize: 20
  },
  label: {
    marginLeft: 5,
    fontSize: 30
  }
});

export default EditScreen;
