import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import First from '@/components/First'
import Second from '@/components/Second'



import UserList from '@/user/list'
import UserList2 from '@/user/list2'
import UserList3 from '@/user/list3'
Vue.use(Router)
let router = new Router({
	routes:[
		{
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/first',
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/first', component: First, name: '首页', menuShow: true},
        {path: '/second', component: Second, name: '图文', menuShow: true}
      ]
    },
    {
      path: '/',
      name: '用户管理',
      component: Home,
      redirect: '/first',
      menuShow: true,
      iconCls: 'iconfont icon-user', // 图标样式class
      children: [
        {path: '/userlist', component: UserList, name: '用户基本信息', menuShow: true},
        {path: '/userLis2', component: UserList2, name: '走马灯', menuShow: true},
        {path: '/userLis3', component: UserList3, name: '用户具体信息', menuShow: true}
      ]
    },
	]
})
 export default router
