<script setup>
import { RouterView } from "vue-router";
import { useUserCartStore } from "./stores/user/cart";
import { onMounted } from "vue";
const userCartStore = useUserCartStore()


onMounted(()=>{
  userCartStore.loadcart()
})
</script>


<template>
  <div>
    <RouterView />
  </div>
</template>
