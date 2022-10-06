<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<script setup>
import ForumList from '@/components/ForumList'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
  id: String,
})

const categories = computed(() => store.state.categories)

const category = computed(() => categories.value.find((category) => category.id === props.id))
const getForumsForCategory = (category) => {
  return store.state.forums.filter((forum) => forum.categoryId === category.id)
}
</script>

<style scoped></style>
