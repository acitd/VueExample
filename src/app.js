import{useRouter}from'vue-router';
export let router;
export let base;
export function init(){
	router=useRouter();
	base=router.options.history.base;
}
