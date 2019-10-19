import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Blog title</Text>
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
      <Button title="Save your post" onPress={() => onSubmit(title, content)} />
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

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

export default BlogPostForm;
