<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div v-for="thread in props.threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'Thread', params: { id: thread.id } }"
              >{{ thread.title }}
            </router-link>
          </p>
          <p class="text-faded text-xsmall">
            <a href="#">{{ userById(thread.userId).name }}</a
            >, {{ thread.publishedAt }}
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>
          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-small text-faded">
              {{ thread.publishedAt }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import sourceData from '@/data.json'

const props = defineProps(['threads'])

const { users } = sourceData

// const postById = (postId) => posts.find((post) => post.id === postId)

const userById = (userId) => users.find((post) => post.id === userId)
</script>
<style lang=""></style>
