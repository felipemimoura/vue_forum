<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <label for="newPostText"></label>
          <textarea
            v-model="newPostText"
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
import PostList from '@/components/PostList.vue'
import sourceData from '@/data.json'
import { computed, ref } from 'vue'

const props = defineProps(['id'])

const { threads, posts } = sourceData

const newPostText = ref('')

const thread = computed(() => threads.find((t) => t.id === props.id))
const threadPosts = computed(() => sourceData.posts.filter((p) => p.threadId === props.id))

const addPost = () => {
  const postId = `ggqq${Math.random()}`
  const newPost = {
    id: postId,
    text: newPostText.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: props.id,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
  }

  posts.push(newPost)
  thread.value.posts.push(postId)
  newPostText.value = ''
}
</script>

<style></style>
