<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/Product.vue";
import { useProductStore } from "@/stores/user/product";
import { useRoute } from "vue-router";
import { computed, watch, ref } from "vue";
import router from "@/router";
import { useUserCartStore } from "@/stores/user/cart";

const productStore = useProductStore();
const userCartStore = useUserCartStore();


const route = useRoute();
const searchText = ref("");

const filterProducts = computed(() =>
  productStore.filterProduct(route.query.q)
);
const addProductToCart = (productData) => {
  userCartStore.addToCart(productData);
  router.push({ name: "cart" });
};

watch(
  () => route.query.q,
  (newSearchText) => {
    searchText.value = newSearchText;
  },
  { immediate: true }
);
</script>
<template>
  <div class="container">
    <UserLayout>
      <h1 class="font-medium text-xl">Search: {{ searchText }}</h1>

      <Product
        :products="filterProducts"
        :addProductToCart="addProductToCart"
      />
    </UserLayout>
  </div>
</template>
