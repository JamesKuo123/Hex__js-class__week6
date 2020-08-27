import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/front',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: 'about',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/front/Checkout.vue'),
      },
      {
        path: 'checkoutok',
        component: () => import('../views/front/CheckoutOK.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/Product.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue'),
      },
      {
        path: 'photos',
        component: () => import('../views/admin/Photos.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/admin/Product.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
