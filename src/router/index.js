import{createRouter,createWebHistory}from'vue-router';
import Home from'@/page/Home.vue';
import About from'@/page/About.vue';


const router=createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:[
  	{path:'/',component:Home},
  	{path:'/about',component:About}
  ],
})

export default router;
