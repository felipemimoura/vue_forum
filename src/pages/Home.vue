<template>
  <CategoryList :categories="categories" />
</template>

<script setup>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList.vue'

const categories = sourceData.categories
</script>

<style></style>
