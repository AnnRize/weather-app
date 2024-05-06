import App from "@/App.vue";
import AppLayout from "@/AppLayout.vue";
import NotFoundView from "@/pages/NotFoundView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         // подключаем Роутер к приложение
         path: "/",
         component: App,
         children: [
            {
               // подключаем Шаблоны
               path: "",
               component: AppLayout,
               children: [
                  // добавляем страницы которые нужны в шаблоне
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
