<template>
  <div>    
    <PostsList></PostsList>

  </div>
</template>

<script>

import PostsList from '@/components/PostsList.vue'

export default {
  name: 'Posts',
  components: {
    PostsList,
    // UserDetail
  }
}
</script>
