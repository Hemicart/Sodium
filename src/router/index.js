import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "mainpage",
    component: () => import("@/views/Mainpage.vue"),
    meta: {
      title: "Sodium"
    }
  },
  {
    path: "/app",
    name: "app",
    component: () => import("@/views/App.vue"),
    meta: {
      title: "App page"
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'borrowing',
        name: 'borrowing',
        component: () => import('@/views/Borrowing.vue')
      },
      {
        path: 'lending',
        name: 'lending',
        component: () => import('@/views/Lending.vue')
      },
      {
        path: 'fpe',
        name: 'fairpriceengine',
        component: () => import('@/views/FairPriceEngine.vue')
      },
      {
        path: 'fpe/collection/:paramCollectionID',
        name: 'collection',
        component: () => import('@/views/Collection.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});

export default router;
