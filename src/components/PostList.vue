<template lang="">
  <div>
    <div class="post-list">
      <div class="post" v-for="post in props.posts" :key="post.id">
        <div class="user-info">
          <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

          <a href="#">
            <img class="avatar-large" :src="userById(post.userId).avatar" alt="teste" />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ post.text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ post.publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import sourceData from '@/data.json'
import { defineProps } from 'vue'

const props = defineProps(['posts'])
const { users } = sourceData

// const postById = (postId) => posts.find((post) => post.id === postId)

const userById = (userId) => users.find((post) => post.id === userId)
</script>
<style lang=""></style>
