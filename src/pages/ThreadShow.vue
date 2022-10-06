<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save-post="addPost" />
  </div>
</template>

<script setup>
import PostEditor from '@/components/PostEditor.vue'
import PostList from '@/components/PostList.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  id: String,
})

const store = useStore()

const threads = computed(() => store.state.threads)

const posts = computed(() => store.state.posts)

const thread = computed(() => threads.value.find((t) => t.id === props.id))

const threadPosts = computed(() => posts.value.filter((post) => post.threadId === props.id))

const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: props.id,
  }

  posts.value.push(post)
  thread.value.posts.push(post.id)
}
</script>

<style></style>
