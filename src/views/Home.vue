<template>
  <div>
    <h2>首頁</h2>
    <div class="main">
      <button class="btn btn-primary" @click.prevent="goPage(`front`)">前往購物</button>
      <button class="btn btn-secondary" @click.prevent="goPage(`login`)">後臺登入</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goPage(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>
