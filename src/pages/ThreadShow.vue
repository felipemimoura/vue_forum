<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <label for="newPostText"></label>
          <textarea
            v-model="state.newPostText"
            name="newPostText"
            id=""
            cols="30"
            rows="10"
            class="form-input"
          />
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
import { computed, reactive } from 'vue'

const props = defineProps({
  id: String,
})
const state = reactive({
  newPostText: '',
  threads: sourceData.threads,
  posts: sourceData.posts,
})

const thread = computed(() => state.threads.find((t) => t.id === props.id))

const threadPosts = computed(() => state.posts.filter((post) => post.threadId === props.id))

const addPost = () => {
  const postId = `ggqq${Math.random()}`
  const post = {
    id: postId,
    text: state.newPostText,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: props.id,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
  }
  state.posts.push(post)
  thread.value.posts.push(postId)
  state.newPostText = ''
}
</script>

<style></style>
