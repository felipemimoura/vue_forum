<template>

    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div class="post"
           v-for="postId in thread.posts"
           :key="postId"
      >

        <div class="user-info">
          <a href="#" class="user-name">{{userById(postById(postId).userId).name}}</a>

          <a href="#">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="teste">
          </a>

          <p class="desktop-only text-small">107 posts</p>

        </div>

        <div class="post-content">
          <div>
            <p>
              {{postById(postId).text}}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{postById(postId).publishedAt}}
        </div>

      </div>

    </div>
</template>

<script setup>
import sourceData from '@/data.json';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { threads, posts, users } = sourceData;

const thread = computed(() => threads.find((t) => t.id === route.params.id));
const postById = (postId) => posts.find((post) => post.id === postId);
const userById = (userId) => users.find((post) => post.id === userId);
</script>

<style>

</style>
