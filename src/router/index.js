import{createRouter,createWebHistory}from'vue-router';
import Home from'@/page/Home.vue';
import About from'@/page/About.vue';


const router=createRouter({
  createWebHistory((()=>{const r=[];for(const s of import.meta.url.substr(location.origin.length+1).split('/')){if(s==='src'||s==='assets')break;r.push(s)}return'/'+r.join('/')})()),
  routes:[
  	{path:'/',component:Home},
  	{path:'/about',component:About}
  ],
})

export default router;
