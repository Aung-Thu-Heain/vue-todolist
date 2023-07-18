import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddNewView from "../views/AddNewView.vue";
import EditProjectView from "../components/EditProjectView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addNew",
    name: "addNew",
    component: AddNewView,
  },
  {
    path: "/editProject/:id",
    name: "editProject",
    component: EditProjectView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
