<template>
  <div>
    <loading :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    <h2>後台登入</h2>
    <form>
      <label>
        Email:
        <input type="text" v-model="user.email" />
      </label>
      <label>
        Password:
        <input type="password" v-model="user.password" />
      </label>
      <button class="btn btn-primary" type="submit" @click.prevent="login">Login</button>
    </form>
    <button class="backIndex btn btn-secondary" @click.prevent="goPage(` `)">返回首頁</button>
  </div>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.backIndex {
  margin-top: 24px;
}
</style>

<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    goPage(page) {
      this.$router.push(`/${page}`);
    },
    login() {
      const url = 'https://course-ec-api.hexschool.io/';
      const api = `${url}api/auth/login`;
      this.isLoading = true;
      this.axios
        .post(api, this.user)
        .then((response) => {
          this.isLoading = false;
          const { token } = response.data;
          const { expired } = response.data;
          document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`;
          this.$router.push('/admin');
        })
        .catch(() => {
          this.isLoading = false;
          alert('Logging in failed.');
        });
    },
  },
};
</script>
