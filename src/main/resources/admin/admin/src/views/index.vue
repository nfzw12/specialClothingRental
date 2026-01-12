<template>
	<el-container class="index-container">
		<index-header></index-header>
		<el-container>
			<index-aside-static></index-aside-static>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
	import IndexHeader from '@/components/index/IndexHeader'
	import IndexAsideStatic from '@/components/index/IndexAsideStatic'
	export default {
		components: {
			IndexHeader,
			IndexAsideStatic
		}
	}
</script>

<style lang="scss" scoped>
	// 铺满全屏
	.index-container {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
	}
	.el-main {
		padding: 20px;
		background-color: #f0f2f5;
		overflow-y: auto;
	}
</style>
