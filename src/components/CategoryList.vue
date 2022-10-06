<template>
  <ForumList
    v-for="category in props.categories"
    :key="category.id"
    :forums="getForumByCategory(category)"
    :categoryId="category.id"
    :title="category.name"
  />
</template>
<script setup>
import { useStore } from 'vuex'
import ForumList from './ForumList.vue'
const props = defineProps({
  categories: {
    required: true,
    type: Array,
  },
})

const { state } = useStore()

const getForumByCategory = (category) => {
  return state.forums.filter((forum) => forum.categoryId === category.id)
}
</script>
