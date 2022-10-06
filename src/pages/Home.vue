<template>
  <h1 class="push-top">Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script setup>
import { computed } from 'vue'
import CategoryList from '@/components/CategoryList.vue'
import { useStore } from 'vuex'

const store = useStore()

const categories = computed(() => store.state.categories)
</script>

<style></style>
