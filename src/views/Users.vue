<template>
  <div>    
    <UsersList></UsersList>

  </div>
</template>

<script>

import UsersList from '@/components/UsersList.vue'
// import UserDetail from '@/components/UserDetail.vue'

export default {
  name: 'Users',
  components: {
    UsersList,
    // UserDetail
  }
}
</script>
