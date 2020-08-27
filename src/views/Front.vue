<template>
    <div>
        <h2>
            前台
        </h2>
        <button class="btn btn-primary" @click.prevent="goPage(`front/about`)">關於我們</button>
        <button class="btn btn-primary" @click.prevent="goPage(`front/products`)">產品列表</button>
        <button class="btn btn-primary" @click.prevent="goPage(`front/cart`)">購物車</button>
        <button class="btn btn-secondary" @click.prevent="goPage(` `)">回到首頁</button>
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
    this.goPage('front/products');
  },
};
</script>
