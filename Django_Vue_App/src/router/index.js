import { createRouter, createWebHistory } from 'vue-router'

import dashboard from '../pages/master/Dashboard.vue'
import home from '../pages/master/Home.vue'
import profile from '../pages/master/Profile.vue'

const routes = [
  {
              
    name: 'Dashboard',
    path: '/',
    component: dashboard
  },
  {
    
    name: 'home',
    path: '/home', 
    component:home
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
              
              name: 'profile',
              path: '/profile',
              component: profile
            }
];
const router = Router();

export default router;
function Router(){
              const router = new createRouter(
                            {
                                          history:createWebHistory(),
                                          routes,
                            }
              );
              return router;
}