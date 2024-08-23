<script setup>
import Hero from "@/components/Hero.vue";
import Product from "@/components/Product.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import router from "@/router";
import { useUserCartStore } from "@/stores/user/cart";

import { useProductStore } from "@/stores/user/product";
const productStore = useProductStore();
const userCartStore = useUserCartStore();

const addProductToCart = (productData) => {
  userCartStore.addToCart(productData);
  router.push({name:'cart'})
};

</script>
<template>
  <UserLayout>
    <!-- Hero  -->
    <Hero />

    <!--content  -->
    <Product
      :products="productStore.list"
      :addProductToCart="addProductToCart"
    />
  </UserLayout>
</template>
