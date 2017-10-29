
//导入vue核心包
import vue from 'vue'

//导入路由和使用路由
import vueRouter from 'vue-router'
vue.use(vueRouter)

//导入路由组件
import login from './components/login/login.vue';
import register from './components/login/register.vue';

//定义路由规则
var router = new vueRouter({
	routes: [
		{ path: '/login', component: login },
		{ path: '/register', component: register }
	]
})

//导入页面入口文件App.vue
import App from './App.vue'

new vue({     //此处的vue与导入的vue一样
	el:"#app",
	router,  //这一如果上面定义的路由名不是router是router1等一定要写router1:router
	render : c => c (App)
})