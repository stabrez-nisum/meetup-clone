<template>
<div>
    <Search></Search>
     <img src="../../public/meetup-landing-page.jpg" class="landing-image" alt="" />
</div>
</template>

<script>
import Search from "./Search.vue";

export default {
    name : "Home",
    components:{
    Search,
    },
}
</script>