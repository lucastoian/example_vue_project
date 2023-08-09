import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import PLP from './components/PLP.vue'

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'PLP',
        component: PLP,
      }
    ]
  })
