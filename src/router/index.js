import { createMemoryHistory, createRouter } from 'vue-router'

import TeamChart from '@/components/TeamChart.vue';
import DashboardPage from '@/components/DashboardPage.vue'


const routes = [
    {path: '/', component: DashboardPage},
    {path: '/team', component: TeamChart, },

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
  
  export default router
