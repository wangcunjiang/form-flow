import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/Table.vue')
  },
  {
    path: '/formEditor',
    name: 'formEditor',
    component: () => import('@/views/FormEditor.vue')
  },
  {
    path: '/flowEditor',
    name: 'flowEditor',
    props: true,
    component: () => import('@/views/FlowEditor.vue')
  },
  {
    path: '/appStore',
    name: 'AppStore',
    component: () => import('@/views/AppStore.vue')
  },
  {
    path: '/appAdmin',
    name: 'AppAdmin',
    component: () => import('@/components/app-admin/AppAdmin.vue'),
    children: [
      {
        path: 'appInfo',
        name: 'AppInfo',
        component: () => import('@/components/app-admin/AppInfo.vue')
      },
      {
        path: 'userAdmin',
        name: 'UserAdmin',
        component: () => import('@/components/app-admin/UserAdmin.vue')
      },
      {
        path: 'formAdmin',
        name: 'FormAdmin',
        component: () => import('@/components/app-admin/FormAdmin.vue')
      },
      {
        path: 'flowAdmin',
        name: 'FlowAdmin',
        component: () => import('@/components/app-admin/FlowAdmin.vue')
      }
    ]
  },
  {
    path: '/appReport',
    name: 'AppReport',
    component: () => import('@/components/app-report/AppReport.vue')
  },
  {
    path: '/appClient',
    name: 'AppClient',
    props: true,
    component: () => import('@/components/app-client/AppClient.vue'),
    children: [
      {
        path: 'start',
        name: 'Start',
        props: true,
        component: () => import('@/components/app-client/Start.vue')
      },
      {
        path: 'created',
        name: 'Created',
        props: true,
        component: () => import('@/components/app-client/Created.vue')
      },
      {
        path: 'todo',
        name: 'Todo',
        props: true,
        component: () => import('@/components/app-client/Todo.vue')
      },
      {
        path: 'done',
        name: 'Done',
        props: true,
        component: () => import('@/components/app-client/Done.vue')
      }
    ]
  }
]

export default new Router({ routes })
