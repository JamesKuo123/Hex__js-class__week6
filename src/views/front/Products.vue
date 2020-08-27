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
        <td>類別</td>
        <td>原價</td>
        <td>特價</td>
        <td>詳細資料</td>
        <td>加入購物車</td>
      </tr>
      <tr v-for='product in products' :key='product.id'>
        <td>{{product.title}}</td>
        <td>{{product.category}}</td>
        <td>{{product.origin_price}}</td>
        <td>{{product.price}}</td>
        <td>
          <button class='btn btn-primary' @click='goPage(`front/product/${product.id}`)'>
            詳細資料
          </button>
        </td>
        <td>
          <button class='btn btn-info' @click='sendToCart(product)'>加入購物車</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
      toCartProduct: {
        product: '',
        quantity: '1',
      },
    };
  },
  methods: {
    goPage(page) {
      this.$router.push(`/${page}`);
    },
    getDetail(id) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`,
        )
        .then((res) => {
          this.isLoading = false;
          console.log(res);
        })
        .catch(() => {
          this.isLoading = false;
          console.log('fail');
        });
    },
    sendToCart(product) {
      this.isLoading = true;
      this.toCartProduct.product = product.id;
      console.log(this.toCartProduct);
      this.$http.post(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`, this.toCartProduct)
        .then(() => {
          this.isLoading = false;
          alert(`商品${product.title}加入成功`);
        })
        .catch(() => {
          this.isLoading = false;
          console.log('fail');
        });
    },
  },
  created() {
    this.isLoading = true;
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`,
      )
      .then((res) => {
        this.isLoading = false;
        this.products = res.data.data;
      })
      .catch(() => {
        this.isLoading = false;
        alert('123');
      });
  },
};
</script>
