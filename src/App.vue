<script setup>
	import{RouterLink,RouterView}from'vue-router';
	import{init,base}from'@/app.js';
	init()
</script>

<template>
	<RouterLink to="/" class="0{padding:10px}">
		<img class="0{vertical-align:middle;padding-right:10px}" width="25" :src="base+'/assets/logo.svg'"/>
		Home
	</RouterLink>
	<RouterLink to="/about" class="0{padding:10px}">About</RouterLink>
	<hr/>
	<RouterView/>
</template>

<style>@import'/assets/stylezero/global.css';</style>
