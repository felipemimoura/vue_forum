<template>
  <ThreadList :threads="threads" />
</template>

<script setup>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'

const { threads } = sourceData

// const postById = (postId) => posts.find((post) => post.id === postId)

// const userById = (userId) => users.find((post) => post.id === userId)
</script>

<style></style>
