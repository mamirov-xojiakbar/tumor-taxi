import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "not-found",
    //   component: () => import("../pages/not-found.vue"),
    // },

    {
      path: "/",
      component: () => import("../layout/default.vue"),
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../pages/home.vue"),
        },
        {
          path: "/orders",
          name: "orders",
          component: () => import("../pages/orders.vue"),
        },
        {
          path: "/delivery-order",
          name: "delivery-order",
          component: () => import("../pages/delivery-order.vue"),
        },
        {
          path: "/zakaz",
          name: "zakaz",
          component: () => import("../pages/zakaz.vue"),
        },
        {
          path: "/driver",
          name: "driver",
          component: () => import("../pages/driver.vue"),
        },
        {
          path: "/order-details",
          name: "order-details",
          component: () => import("../pages/order-details.vue"),
        },
      ],
    },

    {
      path: "/",
      component: () => import("../layout/auth.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("../pages/auth/signIn.vue"),
        },
        {
          path: "/signup",
          name: "signup",
          component: () => import("../pages/auth/signUp.vue"),
        },

        {
          path: "/loginDriver",
          name: "loginDriver",
          component: () => import("../pages/driverAuth/signInDriver.vue"),
        },
        {
          path: "/signupDriver",
          name: "signupDriver",
          component: () => import("../pages/driverAuth/signUpDriver.vue"),
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// router.beforeEach((to, from) => {
//   const isLoggedin = JSON.parse(localStorage.getItem("user"));

//   if (!isLoggedin && to.name != "login") {
//     return { name: "login" };
//   }
// });

export default router;



