<template>
	<div>
		<span class="red">{{msg}}</span>
		<router-link to="/login">登陆</router-link>
		<router-link to="/register">注册</router-link>

		<router-view></router-view>	  
		<!-- 路由占位符,根据不同路径填充不同内容 -->
	</div>
</template>
<script>
	export default{
		data () {
			return {
				msg:'你好吗',
			}
		}
	}
</script>
<style scoped>
	.red{
		color: red;
	}
</style>