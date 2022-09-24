<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '@/components/PostList.vue'

const route = useRoute()

const { threads, posts } = sourceData

const thread = computed(() => threads.find((t) => t.id === route.params.id))
const threadPosts = computed(() => posts.filter((post) => post.threadId === route.params.id))
</script>

<style></style>
