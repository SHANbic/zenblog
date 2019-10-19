import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const post = state.find(post => post.id === id);

  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default EditScreen;
