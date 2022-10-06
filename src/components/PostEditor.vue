<template lang="">
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="text"></label>
        <textarea
          v-model="state.text"
          name="newPostText"
          id=""
          cols="30"
          rows="10"
          class="form-input"
        />
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const state = reactive({
  text: '',
})

const emit = defineEmits(['save-post'])

const save = () => {
  const post = {
    text: state.text,
    publishedAt: Math.floor(Date.now() / 1000),
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
  }

  emit('save-post', { post })

  state.text = ''
}
</script>
<style lang=""></style>
