import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { Header } from 'react-navigation-stack';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(
    Context
  );

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.view}>
                <Text style={styles.text}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash-2" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" style={styles.headerRight} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 22
  },
  view: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 16
  },
  headerRight: {
    fontSize: 30,
    marginRight: 15
  }
});

export default IndexScreen;
