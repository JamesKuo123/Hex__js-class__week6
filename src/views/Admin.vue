<template>
  <div>
    <h2>後台</h2>
    <button class="btn btn-primary" @click.prevent='goPage(`admin/products`)'>產品列表</button>
    <button class="btn btn-primary" @click.prevent='goPage(`admin/coupons`)'>優惠券列表</button>
    <button class="btn btn-primary" @click.prevent='goPage(`admin/photos`)'>圖片庫</button>
    <button class="btn btn-primary" @click.prevent='goPage(`admin/orders`)'>訂單列表</button>
    <button class="btn btn-secondary" @click.prevent='goPage(` `)'>回到首頁</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goPage(page) {
      this.$router.push(`/${page}`);
    },
  },
  created() {
    this.goPage('admin/products');
  },
};
</script>
