<template>
  <ForumList :forums="forums" />
</template>

<script setup>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'

const forums = sourceData.forums
</script>

<style></style>
