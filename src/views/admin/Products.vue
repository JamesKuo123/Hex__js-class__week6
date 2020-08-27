<template>
  <div>
    <loading
      :active.sync='isLoading'
      :can-cancel='true'
      :on-cancel='onCancel'
      :is-full-page='fullPage'
    ></loading>
    <h2>產品列表</h2>
    <table>
      <tr>
        <td>產品名稱</td>
        <td>原價</td>
        <td>詳細資料</td>
      </tr>
      <tr v-for='product in this.products' :key='product.id'>
        <td>{{product.title}}</td>
        <td>{{product.origin_price}}</td>
        <td>
          <button class='btn btn-info' @click='goPage(`admin/product/${product.id}`)'>info</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        token: '',
        uuid: process.env.VUE_APP_UUID,
      },
      products: [],
      pagination: {},
    };
  },
  methods: {
    getProducts(whichPage = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${this.user.uuid}/admin/ec/products?page=${whichPage}`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        this.products = response.data.data;
        this.pagination = response.data.meta.pagination;
        this.isLoading = false;
      });
    },
    goPage(page) {
      this.$router.push(`/${page}`);
    },
  },
  created() {
    this.user.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    if (this.user.token === '') {
      this.$router.push('/login');
    }
    this.axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;
    this.getProducts();
  },
};
</script>
