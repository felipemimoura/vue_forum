<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save-post="addPost" />
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
import { computed, reactive } from 'vue'

const props = defineProps({
  id: String,
})
const state = reactive({
  threads: sourceData.threads,
  posts: sourceData.posts,
})

const thread = computed(() => state.threads.find((t) => t.id === props.id))

const threadPosts = computed(() => state.posts.filter((post) => post.threadId === props.id))

const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: props.id,
  }
  console.log('eventData', post)
  state.posts.push(post)
  thread.value.posts.push(postId)
  state.newPostText = ''
}
</script>

<style></style>
