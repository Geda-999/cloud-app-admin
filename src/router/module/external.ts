export default {
  name: "error",
  path: "/error",
  component: () => import("@/layouts/common-page.vue"),
  meta: { menu: { title: "外链", icon: "Link" } },
  children: [
    {
      name: "Github",
      path: "404",
      component: () => import("@/views/default/Blank.vue"),
      meta: {
        menu: { title: "Github仓库", path: "https://github.com/cloudhao1999/cloud-app-admin" }
      }
    }
  ]
};
