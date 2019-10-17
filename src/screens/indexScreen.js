import React, { useContext } from 'react';
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
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      {state.length > 0 ? (
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
      ) : (
        <Text style={styles.empty}>
          Not even a single post on your blog
          <Text style={styles.sucker}> sucker!</Text>
        </Text>
      )}
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
    borderTopColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
