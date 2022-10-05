<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<script setup>
import ForumList from '@/components/ForumList'
import sourceData from '@/data.json'
import { computed, reactive } from 'vue'

const props = defineProps({
  id: String,
})
const state = reactive({
  categories: sourceData.categories,
})

const category = computed(() => state.categories.find((category) => category.id === props.id))
const getForumsForCategory = (category) => {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id)
}
</script>

<style scoped></style>
