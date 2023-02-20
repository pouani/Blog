import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'

import BlogPostForm from '../components/BlogPostForm';

import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  
  const { addBlogPost } = useContext(Context);

  return <BlogPostForm />
  
};

const styles = StyleSheet.create({});

export default CreateScreen;