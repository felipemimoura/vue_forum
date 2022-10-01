<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum=details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a new thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="threadList" />
  </div>
</template>
<script setup>
import { computed, reactive } from 'vue'
import ThreadList from '@/components/ThreadList.vue'
import sourceData from '@/data.json'

const props = defineProps({
  id: String,
})

const state = reactive({
  forums: sourceData.forums,
  threads: sourceData.threads,
})

const forum = computed(() => state.forums.find((forum) => forum.id === props.id))

const threadList = computed(() => state.threads.filter((thread) => thread.forumId === props.id))
console.log(threadList.value)
</script>
<style lang=""></style>
