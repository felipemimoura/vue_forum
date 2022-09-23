<template>
  <div>Hello form page home</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{thread.title}}</h2>

    <div v-for="postId in thread.posts" :key="postId">
      <p>{{userById(postById(postId).userId).name}}</p>
      <p>{{postById(postId).text}}</p>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json';

const { threads, posts, users } = sourceData;

const postById = (postId) => posts.find((post) => post.id === postId);

const userById = (userId) => users.find((post) => post.id === userId);
</script>

<style>

</style>
