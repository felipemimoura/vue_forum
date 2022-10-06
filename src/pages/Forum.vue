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
import { computed } from 'vue'
import { useStore } from 'vuex'

import ThreadList from '@/components/ThreadList.vue'

const store = useStore()

const props = defineProps({
  id: String,
})

// const state = reactive({
//   threads: sourceData.threads,
// })
console.log(store.state.forums)
// const threads = computed(() =)

const forums = computed(() => store.state.forums)
const threads = computed(() => store.state.threads)

const forum = computed(() => forums.value.find((forum) => forum.id === props.id))

const threadList = computed(() => threads.value.filter((thread) => thread.forumId === props.id))
</script>
<style lang=""></style>
