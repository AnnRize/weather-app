import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/AppLayout.vue";
import NotFoundView from "@/pages/NotFoundView.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         component: AppLayout,
         children: [
            {
               path: "",
               component: () => import("@/pages/HomeView.vue"),
            },
            {
               path: "forecast",
               component: () => import("@/pages/ForecastView.vue"),
            },
         ],
      },
      {
         path: "/404",
         component: NotFoundView,
      },
      {
         path: "/:catchAll(.*)*",
         redirect: { path: "/404" },
      },
   ],
});

export default router;
