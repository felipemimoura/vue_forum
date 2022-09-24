<template>
  <ThreadList :threads="threads" />
</template>

<script setup>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'

const { threads } = sourceData
</script>

<style></style>
