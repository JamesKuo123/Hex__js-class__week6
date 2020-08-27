<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
    <h2>{{product.title}}</h2>
    <p>{{product.description}}</p>
    <p>{{product.content}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      product: {},
    };
  },
  created() {
    this.isLoading = true;
    const { id } = this.$route.params;
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`,
      )
      .then((res) => {
        this.isLoading = false;
        this.product = res.data.data;
      })
      .catch(() => {
        this.isLoading = false;
      });
  },
};
</script>
