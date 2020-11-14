<template>
  <div class="container">
    <p>名前：{{ user.name }}</p>
    <p>email：{{ user.email }}</p>
    <p>電話番号：{{ user.tel }}</p>
    <p>コメント：{{ user.comment }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user']),
  },
}
</script>
