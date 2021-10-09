import Vue from 'vue'
import Router from 'vue-router'

import Profissional from '../components/Profissional/Profissional.vue'
import Atendimento from '../components/Atendimento/Atendimento.vue'
import Revisao from '../components/Revisao/Revisao.vue'
import Conclusao from '../components/Conclusao/Conclusao.vue'

Vue.use(Router)

const routes = [
    {
        name: 'profissional',
        path:'/',
        component: Profissional,
    },

    {
        name: 'Atendimento',
        path: '/Atendimento',
        component: Atendimento
    },
    
    {
        name: 'Revisao',
        path: '/Revisao',
        component: Revisao
    },

    {
        name: 'Conclusao',
        path: '/Conclusao',
        component: Conclusao
    },
]

const router = new Router({ routes })

export default router