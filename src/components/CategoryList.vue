<template>
  <ForumList
    v-for="category in props.categories"
    :key="category.id"
    :forums="getForumByCategory(category)"
    :title="category.name"
    :categoryId="category.id"
  />
</template>
<script setup>
import ForumList from './ForumList.vue'
import sourceData from '@/data.json'
import { reactive } from 'vue'
const props = defineProps({
  categories: {
    required: true,
    type: Array,
  },
})

const state = reactive({
  forums: sourceData.forums,
})

const getForumByCategory = (category) => {
  return state.forums.filter((forum) => forum.categoryId === category.id)
}
</script>
