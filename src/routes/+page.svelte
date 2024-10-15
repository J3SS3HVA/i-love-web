<script>
    import { onMount } from 'svelte';
    import { Me, Journal, Other, WeLoveWeb, ProfileImg, Cursor } from '$lib'
    export let data = data;
    export let person = data.person;

</script>

<Cursor />

<Me {person} />

<Journal />

<ProfileImg {person}/>

<Other />

<WeLoveWeb />

<style>

</style>