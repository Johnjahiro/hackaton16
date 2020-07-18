<template>
  <div>        
    <UserDetail></UserDetail>
  </div>
</template>

<script>

import UserDetail from '@/components/UserDetail.vue'

export default {
  name: 'Users',
  components: {
    UserDetail
  },
  data() {
    return {
      usuarios: []
    }
  }
}
</script>
