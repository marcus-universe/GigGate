import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/proberaeume',
    name: 'Proberäume',
    component: () => import('../views/ProbeRaeume.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/CommunityPage.vue')
  },
  {
    path: '/preis',
    name: 'Preise',
    component: () => import('../views/PreisePage.vue')
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: () => import('../views/KontaktPage.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
