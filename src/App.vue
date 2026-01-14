<script setup>
	import{RouterLink,RouterView}from'vue-router';
	import AppButton from'@/component/AppButton.vue';
	import app from'@/app.js';
</script>

<template>
	<RouterLink to="/" class="0{padding:5px}">Home</RouterLink>
	<RouterLink to="/about" class="0{padding:5px}">About</RouterLink>
	<RouterView/>
</template>

<style>@import'/assets/stylezero/global.css';</style>
