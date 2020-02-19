<template>
	<view class="card">
		<!-- header -->
		<view v-if="showhead" class="p-2 border-bottom main-border-color">
			<slot name="title">
				<text v-if="headTitle" class="font-md font-weight">{{headTitle}}</text>	
			</slot>			
		</view>
		
		<view>
			<image v-if="bodyCover" :src="bodyCover"
			mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			showhead:{
				type:Boolean,
				default:true
			},
			headTitle: String,
			bodyCover: String
		}
	}
</script>

<style>
</style>
