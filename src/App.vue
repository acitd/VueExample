<script setup>
	import{RouterLink,RouterView}from'vue-router';
	import{init,base}from'@/app.js';
	init();
</script>

<template>
	<RouterLink to="/" class="0{padding:5px}">Home</RouterLink>
	<RouterLink to="/about" class="0{padding:5px}">About</RouterLink>
	<RouterView/>
</template>

<style>@import'/assets/stylezero/global.css';</style>
