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

const { state, dispatch } = useStore()

const threads = computed(() => state.threads)

const posts = computed(() => state.posts)

const thread = computed(() => threads.value.find((t) => t.id === props.id))

const threadPosts = computed(() => posts.value.filter((post) => post.threadId === props.id))

const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: props.id,
  }

  dispatch('createPost', post)
}
</script>

<style></style>
