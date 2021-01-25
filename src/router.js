import Vue from 'vue';
import VueRouter from 'vue-router';
import DesignProjects from './views/Design_Projects.vue'

Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {
            path:'/',  
            name:'Landing', 
            component: () =>import('./components/Lander.vue')
        },
        {
            path:'/DesignProjects',  
            name:'DesignProjects', 
            component: DesignProjects
        },
        
    ]

});

export default router;