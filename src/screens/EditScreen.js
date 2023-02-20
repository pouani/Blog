import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'

import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {

  const { state } = useContext(Context)

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput value={title} onChange={newTitle => setTitle(newTitle)} />
      <Text>Edit Content:</Text>
      <TextInput value={content} onChange={newContent => setContent(newContent)} />
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({})